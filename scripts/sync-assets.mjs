#!/usr/bin/env node
// Sync canonical brand assets from the repo root into site/public/ for the
// Next.js static export.
//
// SOURCE OF TRUTH: the repo root (brand.json, llms.txt, colors.css, colors.json,
// tokens.json, assets/, and the two long-form .md docs). NEVER reverse direction.
// Runs automatically via the site's `prebuild` script; also `npm run sync`.
//
// Side effects (all under site/public/):
//   - assets/logos/*           (all Moon Society logo files)
//   - assets/ldc/*             (LDC sub-brand mark)
//   - favicon.svg              (from assets/favicons/)
//   - brand.json, llms.txt, colors.css, colors.json, tokens.json
//   - moon-society-brand-guide.md, moon-society-design-spec.md  (for /guide, /spec)
//   - assets/downloads/moon-society-logo-bundle.zip  (built fresh from logos)
//
// Idempotent: re-running with no source changes copies nothing.

import { copyFile, mkdir, readFile, writeFile, stat, readdir } from "node:fs/promises";
import { dirname, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { deflateRawSync } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITE = resolve(ROOT, "site");
const PUBLIC = resolve(SITE, "public");

const ROOT_LOGOS = resolve(ROOT, "assets/logos");
const ROOT_LDC = resolve(ROOT, "assets/ldc");
const ROOT_FAVICONS = resolve(ROOT, "assets/favicons");

const PUBLIC_LOGOS = resolve(PUBLIC, "assets/logos");
const PUBLIC_LDC = resolve(PUBLIC, "assets/ldc");
const PUBLIC_DOWNLOADS = resolve(PUBLIC, "assets/downloads");

// Files included in the logo bundle zip (the production-ready variants).
const BUNDLE_LOGOS = [
  "MoonSoc_TransWhite_Print.png",
  "MoonSocLogo-Trans-440x190.png",
  "MoonSoc_TransBlack_Print.png",
  "MoonSoc_Logo.png",
  "MoonSocietyLogo2014.svg",
];

const BRAND_FILES = ["brand.json", "llms.txt", "colors.css", "colors.json", "tokens.json"];
const DOC_FILES = ["moon-society-brand-guide.md", "moon-society-design-spec.md"];

async function sha256(path) { return createHash("sha256").update(await readFile(path)).digest("hex"); }
async function ensureDir(p) { await mkdir(p, { recursive: true }); }
async function exists(p) { try { await stat(p); return true; } catch { return false; } }

async function syncIfChanged(src, dst, label) {
  await ensureDir(dirname(dst));
  let unchanged = false;
  try {
    const [a, b] = await Promise.all([sha256(src), sha256(dst)]);
    unchanged = a === b;
  } catch { /* dst missing */ }
  if (unchanged) return { label, action: "skip" };
  await copyFile(src, dst);
  return { label, action: "copy" };
}

async function syncDir(srcDir, dstDir, prefix) {
  const out = [];
  if (!(await exists(srcDir))) return out;
  for (const entry of await readdir(srcDir)) {
    const src = resolve(srcDir, entry);
    if ((await stat(src)).isFile()) {
      out.push(await syncIfChanged(src, resolve(dstDir, entry), `${prefix}/${entry}`));
    }
  }
  return out;
}

// ── Minimal ZIP writer (no deps). CRC32 inlined (node:zlib.crc32 is Node 22+). ──
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = (CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)) >>> 0;
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function buildZip(entries) {
  const localChunks = [];
  const centralChunks = [];
  let offset = 0;
  const d = new Date();
  const time = ((d.getHours() & 0x1f) << 11) | ((d.getMinutes() & 0x3f) << 5) | ((d.getSeconds() / 2) & 0x1f);
  const date = (((d.getFullYear() - 1980) & 0x7f) << 9) | (((d.getMonth() + 1) & 0x0f) << 5) | (d.getDate() & 0x1f);
  for (const { name, data } of entries) {
    const compressed = deflateRawSync(data);
    const crc = crc32(data);
    const nameBuf = Buffer.from(name, "utf8");
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0, 6);
    local.writeUInt16LE(8, 8); local.writeUInt16LE(time, 10); local.writeUInt16LE(date, 12);
    local.writeUInt32LE(crc, 14); local.writeUInt32LE(compressed.length, 18); local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26); local.writeUInt16LE(0, 28);
    localChunks.push(local, nameBuf, compressed);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0, 8); central.writeUInt16LE(8, 10); central.writeUInt16LE(time, 12);
    central.writeUInt16LE(date, 14); central.writeUInt32LE(crc, 16); central.writeUInt32LE(compressed.length, 20);
    central.writeUInt32LE(data.length, 24); central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt16LE(0, 30); central.writeUInt16LE(0, 32); central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36); central.writeUInt32LE(0, 38); central.writeUInt32LE(offset, 42);
    centralChunks.push(central, nameBuf);
    offset += local.length + nameBuf.length + compressed.length;
  }
  const centralBuf = Buffer.concat(centralChunks);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0); eocd.writeUInt16LE(0, 4); eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8); eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralBuf.length, 12); eocd.writeUInt32LE(offset, 16); eocd.writeUInt16LE(0, 20);
  return Buffer.concat([...localChunks, centralBuf, eocd]);
}

async function buildLogoBundle() {
  await ensureDir(PUBLIC_DOWNLOADS);
  const entries = [];
  for (const f of BUNDLE_LOGOS) {
    const src = resolve(ROOT_LOGOS, f);
    if (await exists(src)) entries.push({ name: f, data: await readFile(src) });
  }
  const readme =
    `The Moon Society — Logo Bundle (unofficial)\n` +
    `Canonical: https://branding.moonsociety.org\n` +
    `The Moon Society and the Moon Society logo are trademarks of The Moon Society, Incorporated.\n` +
    `Generated: ${new Date().toISOString()}\n`;
  entries.push({ name: "README.txt", data: Buffer.from(readme, "utf8") });
  await writeFile(resolve(PUBLIC_DOWNLOADS, "moon-society-logo-bundle.zip"), buildZip(entries));
  return { label: "assets/downloads/moon-society-logo-bundle.zip", action: "build" };
}

async function main() {
  if (!(await exists(ROOT_LOGOS))) {
    console.error(`[sync-assets] expected brand assets at ${ROOT_LOGOS} — aborting.`);
    process.exit(1);
  }

  const results = [];
  results.push(...(await syncDir(ROOT_LOGOS, PUBLIC_LOGOS, "assets/logos")));
  results.push(...(await syncDir(ROOT_LDC, PUBLIC_LDC, "assets/ldc")));

  const faviconSrc = resolve(ROOT_FAVICONS, "favicon.svg");
  if (await exists(faviconSrc)) {
    results.push(await syncIfChanged(faviconSrc, resolve(PUBLIC, "favicon.svg"), "favicon.svg"));
  }

  for (const f of [...BRAND_FILES, ...DOC_FILES]) {
    const src = resolve(ROOT, f);
    if (await exists(src)) results.push(await syncIfChanged(src, resolve(PUBLIC, f), f));
  }

  // Immutable version-pinned snapshots: site/public/v{major}/<brand files>.
  // Lets downstream consumers pin e.g. /v2/brand.json and not break on the
  // next brand update (the unversioned paths always track latest).
  const brand = JSON.parse(await readFile(resolve(ROOT, "brand.json"), "utf8"));
  const major = `v${brand.version.split(".")[0]}`;
  for (const f of BRAND_FILES) {
    const src = resolve(ROOT, f);
    if (await exists(src)) results.push(await syncIfChanged(src, resolve(PUBLIC, major, f), `${major}/${f}`));
  }

  results.push(await buildLogoBundle());

  const acted = results.filter((r) => r.action !== "skip").length;
  console.log(`[sync-assets] ${acted} actions, ${results.length - acted} unchanged.`);
  for (const r of results) if (r.action !== "skip") console.log(`  ${r.action.padEnd(8)} ${r.label}`);
}

main().catch((err) => { console.error("[sync-assets] failed:", err); process.exit(1); });
