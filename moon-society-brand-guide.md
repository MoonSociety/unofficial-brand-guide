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
- Remove the ™ symbol

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

### Display / Decorative Headlines — Syne

**Use for:** Hero headlines, event titles, large promotional text, and display-size content where visual impact matters most.

**Source:** [Google Fonts — Syne](https://fonts.google.com/specimen/Syne)

**Weights available:** 400 (Regular) through 800 (Extra Bold). Prefer 700 or 800 at display sizes.

**Guidance:** Syne works best at 32px and above. It has strong personality at large sizes but loses clarity at body text sizes. Do not use Syne for body text or UI labels.

### Headings — Spartan

**Use for:** Section headings (H1 through H6), navigation labels, button text, and any structural heading that is not a display/hero headline.

**Source:** [Google Fonts — Spartan](https://fonts.google.com/specimen/League+Spartan) (League Spartan is the single-weight FOSS implementation; Spartan MB provides seven weights)

**Weights:** Prefer 600 (Semibold) or 700 (Bold) for headings. 400 (Regular) may be used for navigation and smaller UI headings.

**Guidance:** Spartan is a geometric sans-serif with clean, modern proportions. It pairs well with Noto Sans at body sizes. All-caps settings work well for short labels but should be avoided for headings longer than a few words.

### Body Text — Noto Sans

**Use for:** Paragraph text, list items, form labels, captions, and all general-purpose reading text.

**Source:** [Google Fonts — Noto Sans](https://fonts.google.com/specimen/Noto+Sans)

**Weights:** 400 (Regular) for body text, 600 or 700 (Bold) for inline emphasis. Italic styles are available for citations and titles of works.

**Guidance:** Set body text between 16px and 18px with a line height of 1.5 to 1.6. Noto Sans has a distinguishing capital "I" with serifs, which aids readability and accessibility.

### Serif / Editorial — Palatino / Palladio

**Use for:** Long-form editorial content, pull quotes, formal documents, and print publications where a serif typeface is appropriate.

**Source:** System font stack (see Design Specification for full stack). TeX Gyre Pagella is the FOSS redistributable implementation.

**Guidance:** This typeface connects to the Moon Society's publishing heritage. Use it for the newsletter, whitepapers, and formal correspondence. It is not the default for web body text; Noto Sans is preferred for screens.

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

## What This Guide Does Not Cover

This guide addresses the parent Moon Society brand only. Sub-brands and affiliated properties (Lunar Development Conference, Moon Miners' Manifesto, Lunarpedia, Luna City Press, Mare Cognitum, and chapter/outpost identities) will be addressed in a future supplement. Until then, sub-brands should use the parent color palette and typography system as a baseline while maintaining their own identity marks.

---

*The Moon Society and the Moon Society logo are trademarks of The Moon Society, Incorporated.*
