<h1 align="center">The Moon Society — Brand (Unofficial)</h1>

<p align="center">
  <strong>Building a spacefaring civilization on the Moon.</strong><br>
  <sub>A community-maintained source of truth for the Moon Society visual identity.</sub>
</p>

---

This repository is an **unofficial, community-maintained** reference for the
[The Moon Society](https://www.moonsociety.org) brand — colors, typography, logos,
voice, and the [Lunar Development Conference (LDC)](https://ldc.moonsociety.org) sub-brand.
It is structured so that every Moon Society–branded surface (website, slide deck,
email signature, social card) can pull from one place.

Audiences served (in priority order):

1. **Machine consumers** — AI agents, build pipelines, design tools (`brand.json`, `llms.txt`, `tokens.json`, `colors.css`)
2. **Developers** — building Moon Society–branded UI
3. **Designers & contributors** — needing logos, fonts, and voice guidance

## Stable URLs

Served by the showcase site in [`site/`](site/) once deployed to `branding.moonsociety.org`:

| Short URL | Resolves to | Purpose |
|---|---|---|
| `/guide`  | [`moon-society-brand-guide.md`](moon-society-brand-guide.md) | Human-readable brand guide |
| `/spec`   | [`moon-society-design-spec.md`](moon-society-design-spec.md) | Technical design specification |
| `/logo`   | Logo bundle (zip of all variants) | All logos in one download |
| `/colors` | [`colors.css`](colors.css)        | CSS custom properties (`--ms-*`) |
| `/tokens` | [`tokens.json`](tokens.json)      | W3C design tokens |
| `/fonts`  | Google Fonts share URL            | One-click font import |
| `/json`   | [`brand.json`](brand.json)        | Machine-readable manifest |
| `/llms`   | [`llms.txt`](llms.txt)            | LLM-readable brand summary |

## I want to…

- **…add the Moon Society logo to my project** — download a variant from [`assets/logos/`](assets/logos/). Use `MoonSoc_TransWhite_Print.png` on dark backgrounds, `MoonSocLogo-Trans-440x190.png` on light.

- **…use Moon Society colors in my CSS**
  ```css
  @import url("https://branding.moonsociety.org/colors.css");
  .cta { background: var(--ms-gold); color: var(--ms-space-cadet); }
  ```

- **…teach an AI assistant the Moon Society brand** — paste
  [`llms.txt`](llms.txt) into its system prompt, or feed it [`brand.json`](brand.json).

- **…use the design tokens in iOS / Android / SCSS** — run
  [Style Dictionary](https://amzn.github.io/style-dictionary/) against
  [`tokens.json`](tokens.json) (W3C Design Tokens format).

## Brand at a glance

**Voice:** Authoritative · Aspirational · Inclusive · Active — *credible enthusiasm*.
A knowledgeable colleague who is genuinely excited and wants you to be part of it.

**Colors** (full table in [`brand.json`](brand.json)):

| Name | Hex | Token |
|---|---|---|
| Space Cadet Blue | `#13294B` | `--ms-space-cadet` |
| Gold             | `#FFCD00` | `--ms-gold`        |
| Cerulean         | `#00A3E0` | `--ms-cerulean`    |
| Cyan             | `#6AD1E3` | `--ms-cyan`        |
| Emerald          | `#009775` | `--ms-emerald`     |
| Near-Black       | `#1D252D` | `--ms-near-black`  |

⚠ Gold (`#FFCD00`) on white fails WCAG contrast — never use gold text on white.

**Typography:**
- Display: Syne (700, 800) — 32px and above
- Headings: League Spartan (600, 700)
- Body: Noto Sans (400, 600)
- Serif (editorial): Palatino / TeX Gyre Pagella
- Code: Inconsolata (400, 700)

**Sub-brand:** [LDC 2026](https://ldc.moonsociety.org) — Lunar Development Conference,
July 17–18 2026 (virtual). Inherits the parent palette and type; keeps its own mark
([`assets/ldc/`](assets/ldc/)).

## Repository layout

```
.
├── brand.json                  v2.0.0 manifest — machine-readable source of truth
├── llms.txt                    Brand summary for AI consumers (llms.txt convention)
├── colors.css                  CSS custom properties (--ms-*)
├── colors.json                 Same color data, standalone
├── tokens.json                 W3C Design Tokens format
├── moon-society-brand-guide.md Canonical long-form brand guide
├── moon-society-design-spec.md Canonical long-form design specification
├── assets/
│   ├── logos/                  Moon Society logo variants
│   ├── ldc/                    LDC sub-brand mark
│   └── favicons/               Favicon(s)
├── schemas/
│   └── brand-v2.json           JSON Schema for brand.json
├── scripts/
│   ├── sync-assets.mjs         Mirrors assets into site/public for deploy
│   └── validate-manifest.mjs   Validates brand.json against the schema
├── site/                       Showcase website (Next.js 15 → Azure Static Web Apps)
└── .github/workflows/          CI/CD (Azure Static Web Apps)
```

The showcase website that backs `branding.moonsociety.org` is the Next.js 15 app in
[`site/`](site/). To work on it: `cd site && npm install && npm run dev`. See
[`site/DEPLOY.md`](site/DEPLOY.md) for deployment.

## Disclaimer & trademarks

This is an **unofficial**, community-maintained resource. The Moon Society and the
Moon Society logo are trademarks of The Moon Society, Incorporated. Logo and brand
assets remain the property of The Moon Society; the tooling/code in this repository
(`scripts/`, `schemas/`, `site/`) is provided for community use.
