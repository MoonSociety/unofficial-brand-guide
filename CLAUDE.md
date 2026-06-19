# Moon Society Brand Archive (Unofficial) — Agent Context

Community-maintained source of truth for The Moon Society brand, plus a Next.js
showcase site. Modeled on North Bend Digital's `brand-guide` (canonical archive)
and `brand-guide-website` (Next.js site) repos, and the Mars Society brand guide.

## Source of truth

**`brand.json`** (v2.0.0, validated by `schemas/brand-v2.json`) is the canonical
machine-readable manifest. When brand values change:

1. Edit `brand.json` first.
2. Keep the derived files in sync **by hand**: `colors.css`, `colors.json`,
   `tokens.json`, `llms.txt`. (They are intentionally standalone so consumers can
   fetch a single file.)
3. Run `node scripts/validate-manifest.mjs` to check the manifest against the schema.
4. The long-form docs `moon-society-brand-guide.md` and `moon-society-design-spec.md`
   are the human narrative; keep them consistent with `brand.json`.

## Layout

```
brand.json, llms.txt, colors.css, colors.json, tokens.json   machine-readable
moon-society-brand-guide.md, moon-society-design-spec.md      long-form docs
schemas/brand-v2.json                                         manifest schema
assets/logos/   assets/ldc/   assets/favicons/                brand assets
scripts/sync-assets.mjs                                       root assets -> site/public
scripts/validate-manifest.mjs                                 schema check
site/                                                         Next.js 15 showcase site
.github/workflows/azure-static-web-apps.yml                   deploy
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
node scripts/validate-manifest.mjs   # validate brand.json
cd site && npm install               # install site deps
cd site && npm run dev               # dev server (localhost:3000)
cd site && npm run build             # prebuild sync + static export to out/
```

## Conventions

- Color tokens are `--ms-*` (not `--nbd-*`).
- Gold (#FFCD00) on white fails WCAG — never emit gold text on white.
- Primary white-text wordmark goes on dark backgrounds only.
- This is unofficial; keep the trademark/disclaimer line in README and site footer.
