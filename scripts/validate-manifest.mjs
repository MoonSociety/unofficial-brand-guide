#!/usr/bin/env node
// Validate brand.json against schemas/brand-v2.json.
//
// Uses AJV if available (preferred — full JSON Schema 2020-12 validation).
// Falls back to a lightweight structural check if AJV isn't installed, so the
// script is useful even in a bare checkout without dev dependencies.

import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const manifestPath = resolve(ROOT, "brand.json");
const schemaPath = resolve(ROOT, "schemas/brand-v2.json");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const schema = JSON.parse(await readFile(schemaPath, "utf8"));

async function validateWithAjv() {
  const { default: Ajv2020 } = await import("ajv/dist/2020.js");
  const { default: addFormats } = await import("ajv-formats");
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const ok = validate(manifest);
  if (!ok) {
    console.error("[validate-manifest] brand.json FAILED schema validation:\n");
    for (const e of validate.errors) {
      console.error(`  ${e.instancePath || "(root)"} ${e.message}`);
    }
    process.exit(1);
  }
  console.log("[validate-manifest] brand.json is valid (AJV, full schema).");
}

function validateStructurally() {
  const errors = [];
  const req = (cond, msg) => { if (!cond) errors.push(msg); };

  req(/^2\.\d+\.\d+$/.test(manifest.version), "version must be 2.x.y");
  req(manifest.organization?.name, "organization.name is required");
  req(manifest.organization?.mission, "organization.mission is required");
  for (const group of ["primary", "secondary", "neutral", "semantic", "accessibility"]) {
    req(Array.isArray(manifest.colors?.[group]), `colors.${group} must be an array`);
  }
  const hex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
  const tok = /^--ms-[a-z][a-z0-9-]*$/;
  for (const g of ["primary", "secondary", "neutral", "semantic", "extended"]) {
    for (const c of manifest.colors?.[g] ?? []) {
      req(hex.test(c.hex), `colors.${g}: "${c.name}" has invalid hex ${c.hex}`);
      req(tok.test(c.token), `colors.${g}: "${c.name}" has invalid token ${c.token}`);
    }
  }
  req(Array.isArray(manifest.typography?.fonts) && manifest.typography.fonts.length > 0,
    "typography.fonts must be a non-empty array");
  req(manifest.logos && Object.keys(manifest.logos).length > 1, "logos must define variants");
  req(manifest.voice?.traits?.length > 0, "voice.traits is required");

  if (errors.length) {
    console.error("[validate-manifest] brand.json FAILED structural check:\n");
    for (const e of errors) console.error(`  ${e}`);
    process.exit(1);
  }
  console.log(`[validate-manifest] brand.json passed structural check (${manifest.colors.primary.length + manifest.colors.secondary.length} core colors, ${manifest.typography.fonts.length} fonts).`);
  console.log("[validate-manifest] (install 'ajv' + 'ajv-formats' for full schema validation.)");
}

try {
  await validateWithAjv();
} catch (e) {
  if (e?.code === "ERR_MODULE_NOT_FOUND") {
    validateStructurally();
  } else {
    console.error("[validate-manifest] error:", e);
    process.exit(1);
  }
}
