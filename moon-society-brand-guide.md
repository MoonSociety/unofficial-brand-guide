# The Moon Society Brand Guide

**Version 1.0 | March 2026**

---

## About This Guide

This brand guide defines the visual identity of The Moon Society for use across digital and print materials. It is written for two audiences: volunteer designers and web contributors who build Moon Society materials, and AI coding agents (such as those in Replit or Claude Code) that generate layouts, components, or pages from this document as context.

If you are an AI agent building a Moon Society page or component, treat the values in this guide as authoritative. When in doubt, refer to the companion **Design Specification** document for CSS custom properties and implementation-ready values.

### Glossary of Historical Terms

These terms appear in internal documents and archived materials. They are provided for context only and should not be featured in public-facing work.

- **MMM (Moon Miners' Manifesto):** The Moon Society's long-running newsletter publication, originally founded in 1986.
- **LDC (Lunar Development Conference):** The Moon Society's annual conference series.
- **WSD:** A custom content management system used by the Moon Society and its predecessor organizations from approximately 2003 to 2013.
- **Coriolis:** Internal name for the Moon Society website design used from 2013 to 2018, characterized by gold accent colors and Inconsolata monospace type.
- **Artemis Society / Artemis Project:** The Moon Society's predecessor organization (1995-2000) and its commercial lunar base project. These names should be treated as historical background only, to avoid confusion with the unrelated NASA Artemis program.

---

## Brand Story and Voice

### Who We Are

The Moon Society is a membership-based space advocacy organization dedicated to furthering the development and settlement of the Moon. Founded in 2000 and incorporated as a 501(c)(3) nonprofit, the Society brings together citizens, scientists, engineers, and enthusiasts who believe that a permanent human presence on the Moon is both achievable and essential.

### Brand Voice

The Moon Society's voice should convey **credible enthusiasm**. We are technically informed but never exclusionary. We are optimistic about humanity's future on the Moon but grounded in real engineering, science, and policy.

**We sound like:** A knowledgeable colleague who is genuinely excited about what they do and wants you to be part of it.

**Tone principles:**

- **Authoritative, not academic.** Use precise language without unnecessary jargon. When technical terms are needed, provide enough context that a motivated newcomer can follow along.
- **Aspirational, not fantastical.** We advocate for real missions, real technology, and real timelines. Avoid language that reads like science fiction marketing.
- **Inclusive, not insider.** The Moon Society has deep institutional history, but public communications should welcome people who discovered us yesterday. Avoid unexplained acronyms and inside references.
- **Active, not passive.** We are building something. Use language that reflects agency and momentum. "The Moon Society is developing..." rather than "It is hoped that..."

**Avoid:**

- Overuse of "lunar" as a modifier when "Moon" works fine
- Sci-fi cliches: "boldly go," "final frontier," "to the stars"
- Breathless superlatives: "revolutionary," "game-changing," "unprecedented"
- Insider shorthand in public-facing text (MMM, LDC, WSD without explanation)

---

## Logo

### Primary Wordmark

The Moon Society logo is a horizontal wordmark featuring the text "THE MOON SOCIETY" with a rendered lunar disc positioned behind the word "MOON." The word "MOON" appears in a heavy/black weight, while "THE" and "SOCIETY" use a lighter weight, creating visual hierarchy through contrast. A trademark symbol (™) appears after "SOCIETY."

### Canonical Logo (Source of Truth)

The **canonical Moon Society wordmark** is the vector file [`assets/logos/MoonSocietyLogo2014.svg`](assets/logos/MoonSocietyLogo2014.svg), maintained upstream at `https://strabo.moonsociety.org/images/moonsoc-logo/MoonSocietyLogo2014.svg`. Use this SVG anywhere SVG is supported, and as the master for generating any new raster sizes. The companion disc/face-only mark is [`assets/logos/TMS_LOGO_Face_Only_S619_01.svg`](assets/logos/TMS_LOGO_Face_Only_S619_01.svg) (favicons, avatars, small icons).

The **canonical raster logo** is [`assets/logos/MoonSocietyLogo2026_larger.png`](assets/logos/MoonSocietyLogo2026_larger.png) (2026 re-upload, 1580×646, transparent background), maintained upstream at `https://www.moonsociety.org/wp-content/uploads/2026/07/MoonSocietyLogo2026_larger.png`. This exact asset is the site-wide header/footer lockup on www.moonsociety.org (as of 2026-07-06) — use it for any raster placement in preference to the legacy PNG/JPG exports in the inventory below.

> **Important:** The canonical SVG does **not** render a visible trademark (™) glyph. Several legacy raster files in the inventory below *do* include a ™ — those are **non-canonical**. Prefer the canonical SVG; do not add a ™ to it. A dedicated light-background SVG (dark wordmark text) is not yet available — for light backgrounds use the transparent black-text PNGs below until a light SVG is produced from the vector source.

### Logo File Inventory

All logo files are located in this repository at [`assets/logos/`](assets/logos/). The following table describes each file and its intended use.

#### For dark backgrounds (Space Cadet Blue, Near-Black, Black)

| File | Format | Size | Description |
|------|--------|------|-------------|
| `MoonSoc_TransWhite_Print.png` | PNG, transparent | 99 KB | **Primary web and print logo.** White text, lunar disc on transparent background. High resolution, suitable for print and large digital displays. Use this for website headers, presentation slides, and any dark-background placement. |
| `MoonSocLogo-Black-440x190.jpg` | JPG, solid black bg | 19 KB | White text wordmark on solid black background. Use only where the background is exactly black — the solid black rectangle will be visible on any other color. 440×190px, web-optimized. |
| `MoonSoc_Logo_Blank.png` | PNG, solid black bg | 26 KB | White text wordmark on solid black background. Same constraint as above — visible black rectangle on non-black backgrounds. Higher quality than the JPG. |
| `MoonSoc_Logo.png` | PNG, dark bg built-in | 10 KB | Small thumbnail version of the white-text wordmark. Suitable for favicons or very small placements only. Too low-resolution for headers. |

#### For light backgrounds (White, light gray, Pinkish Off-White)

| File | Format | Size | Description |
|------|--------|------|-------------|
| `MoonSocLogo-Trans-440x190.png` | PNG, transparent | 23 KB | **Primary light-background logo.** Black text, lunar disc on transparent background. 440×190px, web-optimized. Ideal for light-background web headers, documents, and letterhead. |
| `MoonSoc_TransBlack_Print.png` | PNG, transparent | 100 KB | Black text wordmark on transparent background. High resolution, suitable for print. |
| `MoonSoc_Black_Print.png` | PNG | 95 KB | Black text wordmark, print resolution. For print production use. |
| `MoonSoc_Black_Print.pdf` | PDF | 55 KB | Vector black wordmark for print production. Use for professional printing where vector output is required. |
| `MoonSoc_White_Print.pdf` | PDF | 49 KB | Vector white wordmark for print production on dark substrates. |

#### Legacy and special-purpose files

| File | Format | Size | Description |
|------|--------|------|-------------|
| `MoonSocietyLogo2014.svg` | SVG | 41 KB | **Canonical wordmark (source of truth).** Vector file maintained upstream at strabo.moonsociety.org. White wordmark + lunar disc for dark backgrounds. Use wherever SVG is supported and to generate new raster sizes. No ™ glyph. |
| `TMS_LOGO_Face_Only_S619_01.svg` | SVG | 19 KB | Lunar disc / face-only mark (no wordmark). For favicons, avatars, and small icon placements. |
| `TMS_LOGO_06_2014_o710_0436_03.svg` | SVG | 42 KB | Original 2014 vector artwork with full metadata. Source file for reproduction. |
| `MoonSoc_Logo_BLK_217x100.png` | PNG | 7 KB | Small black-text logo at 217×100px. Too small for most applications — use `MoonSocLogo-Trans-440x190.png` instead. |
| `TMSlogo_blacktext_tranbg.gif` | GIF, transparent | 10 KB | Legacy GIF format. Do not use — replaced by the PNG transparent versions above. |
| `TMSlogo_blacktext_tranbg_0.gif` | GIF, transparent | 10 KB | Duplicate of the above. Do not use. |

#### Quick reference: Which logo file to use

| Scenario | File |
|----------|------|
| Website header (dark background) | `MoonSoc_TransWhite_Print.png` |
| Website header (light background) | `MoonSocLogo-Trans-440x190.png` |
| Wild Apricot header | `MoonSoc_TransWhite_Print.png` |
| Email template header | `MoonSocLogo-Black-440x190.jpg` (JPG for email compatibility) |
| Print — dark substrate | `MoonSoc_White_Print.pdf` |
| Print — light substrate | `MoonSoc_Black_Print.pdf` |
| Social media avatar / favicon | `MoonSoc_Logo.png` (small) |
| Generating new sizes | `MoonSocietyLogo2014.svg` (vector source) |

### Usage Rules

**Clear space:** Maintain a minimum clear space around the logo equal to the height of the capital "T" in "THE" on all sides. No other text, graphics, or visual elements should intrude into this space.

**Minimum size:** The wordmark should not be reproduced smaller than 200px wide in digital applications or 1.5 inches (38mm) wide in print.

**Background requirements:** The primary wordmark is designed for use on dark backgrounds. It should be placed on Space Cadet Blue (#13294B), near-black (#1D252D), or black (#000000). Do not place the primary logo on light backgrounds, mid-tone backgrounds, or busy photographic backgrounds where contrast is insufficient.

**Do not:**

- Alter the proportions or spacing of the wordmark
- Change the colors of any element within the logo
- Add effects such as drop shadows, outlines, glows, or gradients
- Rotate or skew the logo
- Place the logo on backgrounds that reduce legibility
- Crop or partially obscure the lunar disc
- Add a ™ symbol to the canonical SVG wordmark, or substitute the legacy ™-bearing raster files for it

---

## Color System

### Primary Colors

These two colors define the Moon Society's identity and should dominate all branded materials.

| Name | Hex | Pantone | Role |
|------|-----|---------|------|
| Space Cadet Blue | `#13294B` | 2767 C | Primary background, dominant brand color |
| Gold | `#FFCD00` | 116 C | Primary accent, calls to action, highlights |

### Secondary Colors

Supporting colors that extend the palette for layouts, illustrations, and informational hierarchy.

| Name | Hex | Pantone | Role |
|------|-----|---------|------|
| Cerulean | `#00A3E0` | 299 C | Links, interactive elements, secondary accent |
| Blue | `#006298` | 7691 C | Mid-tone blue for depth and layering |
| Cyan | `#6AD1E3` | 310 C | Light accent, data visualization, tags |
| Emerald | `#009775` | 334 C | Success states, positive indicators |

### Neutral Colors

Used for text, backgrounds, borders, and structural elements.

| Name | Hex | Pantone | Role |
|------|-----|---------|------|
| White | `#FFFFFF` | — | Primary text on dark backgrounds |
| Cool Gray 2 | `#D0D0CE` | Cool Gray 2 C | Subtle borders, dividers on dark mode |
| Cool Gray 5 | `#B1B3B3` | Cool Gray 5 C | Secondary text on dark backgrounds |
| Cool Gray 8 | `#888B8D` | Cool Gray 8 C | Muted text, placeholder text |
| Cool Gray 11 | `#53565A` | Cool Gray 11 C | Borders and dividers on light backgrounds |
| Near-Black | `#1D252D` | 433 C | Deep background, slightly warmer than pure black |
| Black | `#000000` | — | Use sparingly; prefer Near-Black for large areas |

### Extended Palette

These colors are available for specific applications such as data visualization, event branding, or editorial illustration. They should not replace primary or secondary colors in standard layouts.

| Name | Hex | Pantone | Notes |
|------|-----|---------|-------|
| Light Gold | `#FAE053` | 113 C | Lighter gold variant for gradients or hover states |
| Dark Gold | `#D29F13` | 7555 C | Darker gold variant for text on light backgrounds |
| Brownish Gold | `#967126` | 7558 C | Warm accent for editorial or print applications |
| Warm Gray 1 | `#D7D2CB` | Warm Gray 1 C | Warm neutral background alternative |
| Warm Gray 7 | `#968C83` | Warm Gray 7 C | Warm neutral mid-tone |
| Grayish Brown | `#5E514D` | 411 C | Warm neutral for text or accents |
| Brown | `#382F2D` | 412 C | Deep warm neutral |
| Pinkish Off-White | `#E5E1E6` | 663 C | Soft warm background for special sections |
| Chaise Mauve | `#C1B2B6` | 435 C | Warm accent |
| Lavender | `#7B6469` | 437 C | Warm mid-tone accent |
| Dark Cherry | `#453536` | 439 C | Deep warm accent |

---

## Typography

The Moon Society uses five typeface roles. Each serves a distinct purpose, and they should not be used interchangeably.

### Display / Decorative Headlines — League Spartan

**Use for:** Hero headlines, event titles, large promotional text, and display-size content where visual impact matters most.

**Source:** [Google Fonts — League Spartan](https://fonts.google.com/specimen/League+Spartan)

**Weights available:** 400 (Regular) through 900 (Black). Prefer 800 (Extra Bold) at display sizes.

**Guidance:** Display and headings now share **one family — League Spartan** — so the distinction is weight and size, not typeface. Set display headlines at 32px and above in weight 800 with tight tracking (−0.02em). This unifies the brand on a single geometric sans and replaces the former **Syne** display face (retired in the 2026 direction; see moonsociety.org). Do not reintroduce Syne or a second display typeface.

### Headings — League Spartan

**Use for:** Section headings (H1 through H6), navigation labels, button text, and any structural heading that is not a display/hero headline.

**Source:** [Google Fonts — League Spartan](https://fonts.google.com/specimen/League+Spartan)

**Weights:** Prefer 600 (Semibold) or 700 (Bold) for headings. 400 (Regular) may be used for navigation and smaller UI headings.

**Guidance:** League Spartan is a geometric sans-serif with clean, modern proportions. It pairs well with Noto Sans at body sizes. All-caps settings work well for short labels but should be avoided for headings longer than a few words.

### Body Text — Noto Sans

**Use for:** Paragraph text, list items, form labels, captions, and all general-purpose reading text.

**Source:** [Google Fonts — Noto Sans](https://fonts.google.com/specimen/Noto+Sans)

**Weights:** 400 (Regular) for body text, 600 or 700 (Bold) for inline emphasis. Italic styles are available for citations and titles of works.

**Guidance:** Set body text between 16px and 18px with a line height of 1.5 to 1.6. Noto Sans has a distinguishing capital "I" with serifs, which aids readability and accessibility.

### Serif / Editorial — Spectral

**Use for:** Long-form editorial content, pull quotes, formal documents, and print publications where a serif typeface is appropriate.

**Source:** [Google Fonts — Spectral](https://fonts.google.com/specimen/Spectral). Delivered via the Google Fonts CDN with a `Georgia, "Times New Roman", serif` fallback chain for first paint.

**Guidance:** Spectral is a contemporary screen-first serif that gives editorial surfaces a publishing voice while staying legible on screen. It replaces the former **Palatino / TeX Gyre Pagella** system-serif stack as part of the 2026 move to CDN-delivered Google Fonts (no system or self-hosted faces). Use it for the newsletter, whitepapers, and formal correspondence. It is not the default for web body text; Noto Sans is preferred for general screen reading.

### Monospace — Inconsolata

**Use for:** Code samples, technical specifications, data tables with fixed-width requirements, and terminal/command-line references.

**Source:** [Google Fonts — Inconsolata](https://fonts.google.com/specimen/Inconsolata)

**Weights:** 400 (Regular) and 700 (Bold).

**Guidance:** Use sparingly. Monospace type signals technical content and should be reserved for contexts where alignment or code formatting is genuinely needed.

---

## Accessibility Standards

The Moon Society is committed to meeting WCAG 2.1 AA standards across all digital properties.

### Color Contrast Requirements

All text must meet the following minimum contrast ratios against its background:

- **Normal text** (under 18px or under 14px bold): 4.5:1 minimum
- **Large text** (18px+ or 14px+ bold): 3:1 minimum
- **UI components and graphical elements:** 3:1 minimum against adjacent colors

### Approved High-Contrast Pairings

These pairings have been verified for WCAG AA compliance:

**On Space Cadet Blue (#13294B) backgrounds:**
- White (#FFFFFF) text — 14.5:1, passes AAA
- Gold (#FFCD00) text — 9.7:1, passes AAA
- Cool Gray 2 (#D0D0CE) text — 9.4:1, passes AAA
- Cyan (#6AD1E3) text — 8.2:1, passes AA
- Cerulean (#00A3E0) text — 5.1:1, passes AA

**On Near-Black (#1D252D) backgrounds:**
- White (#FFFFFF) text — 15.5:1, passes AAA
- Gold (#FFCD00) text — 10.3:1, passes AAA
- Cerulean (#00A3E0) text — 5.4:1, passes AA

**On White (#FFFFFF) backgrounds:**
- Space Cadet Blue (#13294B) text — 14.5:1, passes AAA
- Cool Gray 11 (#53565A) text — 7.4:1, passes AAA
- Blue (#006298) text — 6.6:1, passes AA
- Emerald (#009775) text — 3.7:1, large text only

### Pairings to Avoid

- Gold (#FFCD00) on White — 1.5:1, fails all contrast thresholds
- Dark Gold (#D29F13) on White — 2.4:1, fails AA even for large text
- Cerulean (#00A3E0) on White — 2.9:1, fails AA for normal text
- Light Gold (#FAE053) on White — fails all contrast thresholds
- Cool Gray 5 (#B1B3B3) on White — fails AA
- Pinkish Off-White (#E5E1E6) as a text color on any background — insufficient contrast

### Additional Accessibility Requirements

- All images must include descriptive alt text
- Interactive elements must be keyboard-navigable
- Focus states must be visible (use Gold or Cerulean outline, minimum 2px)
- Font sizes must not go below 14px for any readable text
- Line height for body text must be at least 1.5

---

## Image and Media Guidelines

### Lunar Imagery

The Moon Society frequently uses lunar surface photography. When sourcing imagery:

- NASA imagery is generally public domain but requires attribution: "Image credit: NASA"
- Photography by Andre van der Hoeven is used with permission and must be credited: "Lunar imagery by Andre van der Hoeven. Used with permission."
- Avoid over-processed, heavily colorized, or artificial-looking lunar images
- Prefer high-resolution imagery that conveys the real texture and character of the lunar surface

### Photography Style

When selecting or commissioning photography for events, outreach, or publications:

- Prefer candid, engaged moments over posed group shots
- Show people doing things: presenting, building, observing, discussing
- Ensure diversity of participants is represented authentically
- Avoid stock photography cliches (pointing at screens, shaking hands in front of rockets)

---

## Sub-Brand: Lunarpedia

Lunarpedia (<https://lunarpedia.org>) is the Moon Society's open, collaborative
encyclopedia of lunar settlement — a MediaWiki-based reference covering "everything
we will need to know how to do on Luna to set up self-sustaining bases and colonies,
as well as related efforts, designs, and business models that may eventually lead
there." It is a sub-brand of the Moon Society and inherits this guide's voice and,
where practical, its palette — but as a wiki it lives inside the conventions of its
software. For Lunarpedia, the current state of the live site and the canonical
MediaWiki design system are the same thing, which makes the brand target clear.

> **Platform context.** The live site runs **MediaWiki 1.43.8** with the
> **Vector 2022** skin active (`$wgDefaultSkin = 'vector-2022'`), including the Codex
> client-preference day/night/auto color modes (`skin-theme-clientpref-*`). Vector 2022
> *is* the canonical look — the reading-surface tokens below are simply its defaults.
> (An older local copy still on MediaWiki 1.34/Metrolook exists only as a migration
> backup; ignore it for brand purposes.)

### Identity

- **Name:** Lunarpedia (one word, capital L). Never "Lunar Pedia" or "LunarPedia."
- **Tagline:** *"A resource for reaching our stepping stone to the Solar System."*
- **Mission:** To document the engineering, science, and business of building
  self-sustaining lunar bases and colonies.
- **Relationship to parent:** A Moon Society project. Public pages should carry a
  "Join the Moon Society" link and may use the parent wordmark in the footer, but
  Lunarpedia keeps its own identity mark in the header.

### Logo

Lunarpedia has its own identity mark, distinct from the Moon Society wordmark.

| File | Description | Use |
|------|-------------|-----|
| [`assets/lunarpedia/lunarpedia-mark.png`](assets/lunarpedia/lunarpedia-mark.png) | The primary mark: an **open book** beneath a **full-Moon globe**, with the lowercase wordmark "lunar**pedia**" ("lunar" light, "pedia" bold) below. Grayscale, transparent background. | Site header logo (`$wgLogo` / `$wgLogos`), favicons, avatars. The canonical brand mark. |
| [`assets/lunarpedia/lunarpedia-banner.png`](assets/lunarpedia/lunarpedia-banner.png) | Decorative banner: the serif word "Lunarpedia™" set over a full-disc lunar photograph. | Editorial/title-card use only (e.g. social cards, print headers). **Not** the site logo. |

**Logo guidance:**

- The open-book-and-globe **mark is the canonical logo**. Prefer it wherever a single
  Lunarpedia identifier is needed.
- The mark reads as grayscale by design — the book/globe motif carries the meaning, not
  color. Do not recolor it into the Moon Society gold/blue; if a one-color treatment is
  needed, use a solid neutral (Near-Black `#1D252D` or white) rather than a brand hue.
- The banner image carries a ™; the mark does not. Do not add a ™ to the mark.
- For Vector 2022, supply the logo via `$wgLogos` with `icon`, `wordmark`, and a 1×/1.5×/2×
  `srcset`. The wordmark slot can use the lowercase "lunarpedia" lockup.
- Maintain clear space around the mark equal to the cap-height of the wordmark's "l."

### Color System

Lunarpedia's surface is a **wiki reading environment**, so it adopts the canonical
**Vector 2022 / WikimediaUI (Codex)** content tokens for the reading experience, with the
**Moon Society palette reserved for brand touchpoints** (footer, cross-links, campaign
banners, the parent wordmark). This keeps articles legible and familiar to wiki readers
while still signaling the Moon Society relationship.

#### Vector 2022 reading-surface tokens (canonical)

| Role | Hex | Codex / Vector token |
|------|-----|----------------------|
| Body text | `#202122` | `--color-base` |
| Content background | `#FFFFFF` | `--background-color-base` |
| Page container / chrome background | `#F8F9FA` | `--background-color-neutral-subtle` |
| Link (blue) | `#3366CC` | `--color-progressive` / `color-link` |
| Link — visited | `#795CB2` | `--color-visited` |
| Link — new/red (missing page) | `#D73333` | `--color-destructive` (legacy red link `#BA0000`) |
| Link — hover (progressive) | `#3056A9` | `--color-progressive--hover` |
| Border — base | `#A2A9B1` | `--border-color-base` |
| Border — subtle / dividers | `#C8CCD1` | `--border-color-subtle` |
| Heading underline (h1/h2 rule) | `#A2A9B1` | `--border-color-base` |

> The Vector 2022 link blue (`#3366CC`) is part of the Wikimedia Design Style Guide and
> is intentionally **not** the Moon Society Cerulean (`#00A3E0`). Inside article body
> text, keep wiki-standard link colors — readers rely on them. Reserve Cerulean for
> brand chrome outside the article body.

#### Moon Society accents on Lunarpedia (brand touchpoints)

| Name | Hex | Where |
|------|-----|-------|
| Space Cadet Blue | `#13294B` | Footer band, parent-brand callouts, campaign banners |
| Gold | `#FFCD00` | Calls to action ("Join the Moon Society"), highlight rules |
| Near-Black | `#1D252D` | One-color logo treatment, deep UI surfaces |

**Contrast note:** all Vector 2022 pairings above meet WCAG AA on white. Keep the parent
guide's rules in force for brand accents — never set Gold (`#FFCD00`) as text on white, and
do not use Cerulean (`#00A3E0`) for normal-size text on white.

### Typography

Lunarpedia follows the **Vector 2022 type system**, which differs deliberately from the
parent guide (League Spartan is a display/heading face ill-suited to dense reference reading):

- **Headings (h1 page title, h2 section rules) — serif.** Vector 2022 sets content
  headings in a serif stack: `'Linux Libertine', 'Georgia', 'Times', serif`. This is the
  recognizable "wiki" heading look; keep it. The free TeX Gyre / Linux Libertine family
  satisfies the parent guide's preference for FOSS-redistributable fonts.
- **Body & UI — system sans.** Article text and interface chrome use the Vector 2022
  sans stack (`-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`).
  Noto Sans is an acceptable, on-brand explicit substitute if a webfont is desired.
- **Code / monospace — `monospace`.** Inconsolata may be loaded as the explicit
  monospace face to align with the parent guide.
- **Reading size:** keep Vector 2022 defaults (~0.875rem base, limited content line
  length ≈ 960px). Do not widen body line length for prose — the limited-width reading
  mode is a feature, not a bug.

Do **not** force League Spartan into article body or headings; it belongs to
Moon Society marketing surfaces, not the encyclopedia.

### Application Guidance

**Do:**

- Treat **Vector 2022** (live now on MW 1.43.x) as the canonical skin; mirror its reading tokens above.
- Keep article links wiki-standard blue/purple/red so readers can navigate by color.
- Use the open-book-and-globe **mark** as the site logo.
- Place Moon Society brand color and the parent wordmark in the **footer and
  cross-promotional areas**, not inside article bodies.
- Keep the voice authoritative-not-academic and inclusive-not-insider (see Brand Voice),
  expanding acronyms for newcomers.

**Don't:**

- Don't restyle article body text in League Spartan or in brand gold/blue.
- Don't replace wiki link colors with Cerulean inside content.
- Don't recolor or add a ™ to the open-book mark.
- Don't treat the old local Metrolook/MW 1.34 copy as the brand target — it is a backup.
- Don't widen or override Vector 2022's limited content width for prose.

---

## What This Guide Does Not Cover

This guide addresses the parent Moon Society brand and the Lunarpedia sub-brand (above).
Other sub-brands and affiliated properties (Lunar Development Conference, Moon Miners'
Manifesto, Luna City Press, Mare Cognitum, and chapter/outpost identities) will be
addressed in a future supplement. Until then, those sub-brands should use the parent
color palette and typography system as a baseline while maintaining their own identity
marks.

---

*The Moon Society and the Moon Society logo are trademarks of The Moon Society, Incorporated.*
