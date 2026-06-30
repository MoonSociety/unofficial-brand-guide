#!/usr/bin/env node
// Generate the derived brand files from brand.json (the single source of truth).
//
//   brand.json  ──►  colors.css   (CSS custom properties, --ms-*)
//               ──►  colors.json  (standalone color arrays)
//               ──►  tokens.json  (W3C Design Tokens Community Group format)
//               ──►  llms.txt     (LLM/AI brand summary, llms.txt convention)
//
// NEVER hand-edit the four derived files — edit brand.json and re-run this.
//
//   node scripts/generate-derived.mjs           # write the derived files
//   node scripts/generate-derived.mjs --check    # exit 1 if any are stale (CI)
//
// The --check mode regenerates in memory and diffs against the committed files
// so CI fails the build when brand.json and its derivatives drift apart.

import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const brand = JSON.parse(await readFile(resolve(ROOT, "brand.json"), "utf8"));

const CHECK = process.argv.includes("--check");

// ── helpers ──────────────────────────────────────────────────────────
// --ms-space-cadet -> spaceCadet ; --ms-gray-100 -> gray100
const camelFromToken = (token) =>
  token.replace(/^--ms-/, "").split("-").map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1))).join("");

const allColors = [
  ...brand.colors.primary,
  ...brand.colors.secondary,
  ...brand.colors.neutral,
  ...brand.colors.semantic,
  ...(brand.colors.extended ?? []),
];

// ── colors.css ───────────────────────────────────────────────────────
function buildColorsCss() {
  const pad = Math.max(...allColors.map((c) => c.token.length)) + 1;
  const line = (c) => `  ${(c.token + ":").padEnd(pad + 1)} ${c.hex};${c.usage ? ` /* ${c.name} — ${c.usage} */` : ` /* ${c.name} */`}`;
  const section = (title, list) => `  /* ${title} */\n${list.map(line).join("\n")}`;
  return `/**
 * The Moon Society — Brand Color Palette (unofficial)
 * https://branding.moonsociety.org/colors.css
 *
 * Usage:  @import url("https://branding.moonsociety.org/colors.css");
 * Or copy these custom properties into your own stylesheet.
 *
 * GENERATED from brand.json by scripts/generate-derived.mjs — do not hand-edit.
 * Canonical: brand.json (https://branding.moonsociety.org/brand.json)
 */

:root {
${section("Primary Colors", brand.colors.primary)}

${section("Secondary Colors", brand.colors.secondary)}

${section("Neutral Colors", brand.colors.neutral)}

${section("Semantic Colors", brand.colors.semantic)}

${section("Extended Palette", brand.colors.extended ?? [])}
}
`;
}

// ── colors.json ──────────────────────────────────────────────────────
function buildColorsJson() {
  const slim = (list) => list.map((c) => ({ name: c.name, token: c.token, hex: c.hex }));
  return JSON.stringify(
    {
      $schema: "./schemas/brand-v2.json#/properties/colors",
      $comment: "GENERATED from brand.json by scripts/generate-derived.mjs — do not hand-edit.",
      primary: slim(brand.colors.primary),
      secondary: slim(brand.colors.secondary),
      neutral: slim(brand.colors.neutral),
      semantic: slim(brand.colors.semantic),
      extended: slim(brand.colors.extended ?? []),
    },
    null,
    2
  ) + "\n";
}

// ── tokens.json (W3C Design Tokens) ──────────────────────────────────
function buildTokensJson() {
  const colorGroup = (list) =>
    Object.fromEntries(
      list.map((c) => [
        camelFromToken(c.token),
        { $value: c.hex, $type: "color", ...(c.usage ? { $description: `${c.name} — ${c.usage}` } : {}) },
      ])
    );

  const t = brand.tokens ?? {};
  const mapLeaves = (group, $type, valueTransform = (v) => v) =>
    Object.fromEntries(
      Object.entries(group ?? {})
        .filter(([k]) => !k.startsWith("$"))
        .map(([k, v]) => [
          k,
          { $value: valueTransform(v.value), ...($type ? { $type } : {}), ...(v.usage ? { $description: v.usage } : {}) },
        ])
    );

  const fontFamily = Object.fromEntries(
    brand.typography.fonts.map((f) => [
      f.role === "headings" ? "heading" : f.role,
      { $value: [f.family, ...f.fallbacks], $type: "fontFamily" },
    ])
  );

  const out = {
    $schema: "https://design-tokens.github.io/community-group/format/",
    $description:
      "The Moon Society design tokens (unofficial) — W3C Design Tokens Community Group format. GENERATED from brand.json by scripts/generate-derived.mjs — do not hand-edit. Use with style-dictionary or any compatible tool.",
    color: {
      primary: colorGroup(brand.colors.primary),
      secondary: colorGroup(brand.colors.secondary),
      neutral: colorGroup(brand.colors.neutral),
      semantic: colorGroup(brand.colors.semantic),
      extended: colorGroup(brand.colors.extended ?? []),
    },
    font: {
      family: fontFamily,
      weight: mapLeaves(t.fontWeight, "fontWeight"),
      lineHeight: mapLeaves(t.lineHeight, "number"),
      size: mapLeaves(t.fontSize, "dimension"),
      letterSpacing: mapLeaves(t.letterSpacing, "dimension"),
    },
    size: {
      fontBase: { $value: brand.typography.scale?.base ?? "16px", $type: "dimension" },
      fontMinBody: { $value: brand.typography.scale?.minimumBody ?? "14px", $type: "dimension" },
      maxLineWidth: { $value: brand.typography.scale?.maxLineWidth ?? "65ch", $type: "dimension" },
    },
    space: mapLeaves(t.space, "dimension"),
    radius: mapLeaves(t.radius, "dimension"),
    shadow: mapLeaves(t.shadow, "shadow"),
    transition: mapLeaves(t.transition, "duration"),
    layout: mapLeaves(t.layout, "dimension"),
  };
  return JSON.stringify(out, null, 2) + "\n";
}

// ── llms.txt ─────────────────────────────────────────────────────────
function buildLlmsTxt() {
  const o = brand.organization;
  const byRole = Object.fromEntries(brand.typography.fonts.map((f) => [f.role, f]));
  const fam = (f) => (f ? `${f.family} (${f.fallbacks.join(", ")})` : "");
  const colorLine = (c) => `- ${c.name}:`.padEnd(22) + ` ${c.hex}` + (c.usage ? `  — ${c.usage}` : "");

  const fails = brand.colors.accessibility.filter((a) => a.wcag === "Fail" && a.background === "#FFFFFF");
  const negatives = [
    ...fails.map((a) => {
      const c = allColors.find((x) => x.hex.toUpperCase() === a.foreground.toUpperCase());
      return `- ${c ? c.name : a.foreground} (${a.foreground}) on White fails WCAG contrast (${a.ratio}). Do not use as text on white.`;
    }),
    "- Do not place the primary white-text wordmark on light or busy backgrounds.",
    ...brand.voice.dont.filter((d) => /lunar/i.test(d)).map((d) => `- ${d}`),
  ];

  const fontLine = (label, f, extra = "") =>
    f ? `- ${label}: ${f.family}, weights ${f.weights.join("/")}${extra}${f.usage ? "" : ""}` : "";

  const prohibitions = brand.logos.rules.prohibitions.map((p) => `- ${p}`).join("\n");

  const subBrandLines = Object.values(brand.subBrands ?? {})
    .map((s) => {
      const head = `- ${s.fullName ?? s.name}${s.tagline ? `: ${s.tagline}` : ""}`;
      const body = [s.description, s.website ? s.website : "", s.inherits ? s.inherits : ""].filter(Boolean).join(" ");
      return `${head}\n  ${body}`;
    })
    .join("\n");

  const display = byRole.display;
  const headings = byRole.headings;
  const body = byRole.body;
  const serif = byRole.serif;
  const mono = byRole.monospace;

  return `# The Moon Society — LLM/AI Brand Consumption Guidelines (unofficial)

> This file provides concise, machine-readable brand guidance for AI systems.
> Full machine-readable manifest: ${brand.resources?.brandJson ?? "https://branding.moonsociety.org/brand.json"}
> Follows the llms.txt convention: https://llmstxt.org/
>
> GENERATED from brand.json by scripts/generate-derived.mjs — do not hand-edit.
>
> NOTE: This is an unofficial, community-maintained brand reference. The Moon
> Society and the Moon Society logo are trademarks of The Moon Society, Incorporated.

## Organization

- Name: ${o.name}
- Tagline: "${o.tagline}"
- Founded: ${o.founded} (501(c)(3) nonprofit)
- Website: ${o.website}
- Brand guide: ${o.brandGuide}
- Contact: ${o.contact}

## Mission

${o.mission}

## Canonical Colors

Use these exact hex values. Do not approximate or substitute.

Primary:
${brand.colors.primary.map(colorLine).join("\n")}

Secondary:
${brand.colors.secondary.map(colorLine).join("\n")}

Neutrals:
${brand.colors.neutral.filter((c) => ["--ms-white", "--ms-near-black"].includes(c.token)).map(colorLine).join("\n")}

CSS tokens (importable from /colors.css):
  ${brand.colors.primary.concat(brand.colors.secondary).map((c) => c.token).join(", ")},
  --ms-white, --ms-near-black

NEGATIVE GUIDANCE (prevent confidently-wrong AI output):
${negatives.join("\n")}

## Typography

All five roles are delivered via Google Fonts (CDN) — no system or self-hosted faces.

${fontLine("Display", display, " (prefer 800), 32px and above; same family as headings")}
${fontLine("Headings", headings, " (prefer 600–700), line-height " + (headings?.lineHeight ?? 1.2))}
${fontLine("Body", body, ", line-height 1.5–1.6")}
${fontLine("Serif (editorial/print)", serif, ", line-height " + (serif?.lineHeight ?? 1.65))}
${fontLine("Monospace/code", mono, " (use sparingly)")}
- Source: Google Fonts (${brand.resources?.fonts ?? "https://branding.moonsociety.org/fonts"})

## Voice & Tone

Voice: ${brand.voice.coreStatement.split(".")[0]}. Traits: ${brand.voice.traits.join(", ")}.

Do:
${brand.voice.do.map((d) => `- ${d}`).join("\n")}

Don't:
${brand.voice.dont.map((d) => `- ${d}`).join("\n")}

## Logo

- Canonical (SVG):  /${brand.logos["canonical-svg"].file}  — source of truth; white wordmark for dark backgrounds; no TM glyph
- Face-only (SVG):  /${brand.logos["face-only"].file}  — disc/icon mark for favicons and avatars
- Primary (white):  /${brand.logos["primary-white"].file}  — dark backgrounds (raster)
- Primary (black):  /${brand.logos["primary-black"].file}  — light backgrounds (raster)
- Icon:             /${brand.logos["icon"].file}  — favicons, tight spaces

Logo bundle (ZIP): ${brand.resources?.logoBundle ?? "https://branding.moonsociety.org/logo"}

Prohibitions:
${prohibitions}

Clear space: ${brand.logos.rules.clearSpace}
Minimum size: ${brand.logos.rules.minimumSize.digital} digital / ${brand.logos.rules.minimumSize.print} print.

## Sub-brands

${subBrandLines}

## Repository

Source: ${brand.resources?.repo ?? "https://github.com/MoonSociety/unofficial-brand-guide"}
`;
}

// ── write / check ────────────────────────────────────────────────────
const outputs = {
  "colors.css": buildColorsCss(),
  "colors.json": buildColorsJson(),
  "tokens.json": buildTokensJson(),
  "llms.txt": buildLlmsTxt(),
};

if (CHECK) {
  let stale = 0;
  for (const [name, content] of Object.entries(outputs)) {
    let current = "";
    try { current = await readFile(resolve(ROOT, name), "utf8"); } catch { /* missing */ }
    if (current !== content) {
      stale++;
      console.error(`[generate-derived] STALE: ${name} differs from brand.json. Run: node scripts/generate-derived.mjs`);
    }
  }
  if (stale) process.exit(1);
  console.log(`[generate-derived] all ${Object.keys(outputs).length} derived files are in sync with brand.json.`);
} else {
  for (const [name, content] of Object.entries(outputs)) {
    await writeFile(resolve(ROOT, name), content);
    console.log(`[generate-derived] wrote ${name}`);
  }
}
