# Moon Society Brand Archive (Unofficial) — Agent Context

Community-maintained source of truth for The Moon Society brand, plus a Next.js
showcase site. Modeled on North Bend Digital's `brand-guide` (canonical archive)
and `brand-guide-website` (Next.js site) repos, and the Mars Society brand guide.

## Source of truth

**`brand.json`** (v2.x, validated by `schemas/brand-v2.json`) is the canonical
machine-readable manifest. When brand values change:

1. Edit `brand.json` first — it is the ONLY hand-edited machine file.
2. **Generate** the derived files: `node scripts/generate-derived.mjs`. This
   writes `colors.css`, `colors.json`, `tokens.json`, and `llms.txt` from
   `brand.json`. NEVER hand-edit those four — they are overwritten. (They are
   intentionally standalone so consumers can fetch a single file.)
3. Run `node scripts/validate-manifest.mjs` — validates against the schema (AJV
   when installed) AND recomputes every `colors.accessibility` contrast ratio,
   failing if a stated ratio/WCAG label is wrong.
4. The long-form docs `moon-society-brand-guide.md` and `moon-society-design-spec.md`
   are the human narrative; keep them consistent with `brand.json` by hand.

CI (`.github/workflows/validate.yml`) runs steps 2–3 on every push/PR:
`generate-derived.mjs --check` fails the build if any derived file is stale, so
drift between `brand.json` and its derivatives cannot land. Contributor flow is
documented in `CONTRIBUTING.md`.

Typography note: display and headings are **both League Spartan** (a
weight/size distinction, not two faces); the editorial serif is **Spectral**.
All five roles load from Google Fonts CDN — no system or self-hosted faces. The
former Syne (display) and Palatino (serif) are retired.

## Layout

```
brand.json, llms.txt, colors.css, colors.json, tokens.json   machine-readable
moon-society-brand-guide.md, moon-society-design-spec.md      long-form docs
schemas/brand-v2.json                                         manifest schema
assets/logos/   assets/ldc/   assets/favicons/                brand assets
scripts/generate-derived.mjs                                 brand.json -> derived files
scripts/sync-assets.mjs                                       root files -> site/public (+ /v2 snapshots)
scripts/validate-manifest.mjs                                 schema + contrast check
LICENSE  NOTICE  CONTRIBUTING.md                              governance (MIT code; TMS owns brand assets)
site/                                                         Next.js 15 showcase site
.github/workflows/azure-static-web-apps.yml                   deploy
.github/workflows/validate.yml                                manifest validate + sync check
```

## The site (`site/`)

- Next.js 15 App Router, React 19, Tailwind v3, shadcn/ui, `next-themes`.
- `output: 'export'` → static `out/`; deployed to Azure Static Web Apps.
- **Dark-mode-first** (Moon Society is a dark brand: Space Cadet background); light mode is the override. This is the inverse of the NBD template it was adapted from.
- `site/lib/brand-data.ts` imports `site/public/brand.json` and projects it into the
  shapes components consume. `site/public/*` brand files are **synced** from the repo
  root by `scripts/sync-assets.mjs` (runs via `prebuild`). Do not hand-edit
  `site/public/brand.json` etc. — edit the root copies.
- Pages: Overview, Logo, Colors, Typography, Voice & Tone, **LDC** (sub-brand), Downloads.
- Machine routes: `/brand.json`, `/llms.txt` (App Router route handlers, `force-static`).

## Commands

```bash
node scripts/generate-derived.mjs    # brand.json -> colors.css/json, tokens.json, llms.txt
node scripts/generate-derived.mjs --check  # CI: fail if derived files are stale
node scripts/validate-manifest.mjs   # validate brand.json + recompute contrast ratios
cd site && npm install               # install site deps
cd site && npm run dev               # dev server (localhost:3000)
cd site && npm run build             # prebuild sync + static export to out/
```

## Conventions

- Color tokens are `--ms-*` (not `--nbd-*`).
- Gold (#FFCD00) on white fails WCAG — never emit gold text on white.
- Primary white-text wordmark goes on dark backgrounds only.
- This is unofficial; keep the trademark/disclaimer line in README and site footer.
