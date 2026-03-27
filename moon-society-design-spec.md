# The Moon Society Design Specification

**Version 1.0 | March 2026**
**For use as LLM prompt context and developer reference**

---

## System Overview

This document is a technical design specification for The Moon Society's digital properties. It is structured to serve as prompt context for AI coding agents (Replit Agent, Claude Code, Cursor, or similar) and as a reference for human developers.

**How to use this document:**

- When building a new page or component, include this file in your prompt context or project root
- All color, typography, spacing, and layout values are defined as CSS custom properties in the section below
- Component patterns describe semantic structure and behavior rather than prescribing a specific framework
- This spec is framework-agnostic and works with Astro, Next.js, plain HTML/CSS, or any other stack

**Companion document:** The Moon Society Brand Guide provides the rationale, voice guidelines, and non-technical brand rules. This spec provides the implementation values.

---

## CSS Custom Properties

Include these at the `:root` level of your stylesheet. The system is dark-mode-first; the light mode override follows.

```css
:root {
  /* ========================================
     PRIMARY COLORS
     ======================================== */
  --color-space-cadet: #13294B;
  --color-gold: #FFCD00;

  /* ========================================
     SECONDARY COLORS
     ======================================== */
  --color-cerulean: #00A3E0;
  --color-blue: #006298;
  --color-cyan: #6AD1E3;
  --color-emerald: #009775;

  /* ========================================
     NEUTRAL COLORS
     ======================================== */
  --color-white: #FFFFFF;
  --color-gray-100: #D0D0CE;   /* Cool Gray 2 */
  --color-gray-200: #B1B3B3;   /* Cool Gray 5 */
  --color-gray-300: #888B8D;   /* Cool Gray 8 */
  --color-gray-400: #53565A;   /* Cool Gray 11 */
  --color-near-black: #1D252D; /* 433 C */
  --color-black: #000000;

  /* ========================================
     EXTENDED PALETTE
     ======================================== */
  --color-gold-light: #FAE053;
  --color-gold-dark: #D29F13;
  --color-gold-brown: #967126;
  --color-warm-gray-1: #D7D2CB;
  --color-warm-gray-7: #968C83;
  --color-gray-brown: #5E514D;
  --color-brown: #382F2D;
  --color-off-white-pink: #E5E1E6;
  --color-mauve: #C1B2B6;
  --color-lavender: #7B6469;
  --color-dark-cherry: #453536;

  /* ========================================
     SEMANTIC TOKENS (Dark Mode — Default)
     ======================================== */
  --bg-primary: var(--color-space-cadet);
  --bg-secondary: var(--color-near-black);
  --bg-surface: #1a3159;       /* Space Cadet lightened for card surfaces */
  --bg-elevated: #213a62;      /* Slightly lighter for modals, dropdowns */

  --text-primary: var(--color-white);
  --text-secondary: var(--color-gray-100);
  --text-muted: var(--color-gray-200);
  --text-disabled: var(--color-gray-300);

  --accent-primary: var(--color-gold);
  --accent-secondary: var(--color-cerulean);
  --accent-hover: var(--color-gold-light);

  --link-color: var(--color-cerulean);
  --link-hover: var(--color-cyan);
  --link-visited: var(--color-blue);

  --border-color: rgba(255, 255, 255, 0.12);
  --border-color-strong: rgba(255, 255, 255, 0.24);

  --focus-ring: var(--color-gold);
  --success: var(--color-emerald);
  --error: #E84855;
  --warning: var(--color-gold-dark);

  /* ========================================
     TYPOGRAPHY
     ======================================== */
  --font-display: 'Syne', sans-serif;
  --font-heading: 'Spartan', 'League Spartan', 'Century Gothic', 'Avenir Next', 'Futura', sans-serif;
  --font-body: 'Noto Sans', 'Verdana', 'DejaVu Sans', sans-serif;
  --font-serif: 'Palatino', 'Palatino Linotype', 'TeX Gyre Pagella', 'Book Antiqua', 'Garamond', serif;
  --font-mono: 'Inconsolata', 'Consolas', 'Menlo', 'Monaco', monospace;

  /* Font Sizes — fluid scale */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);
  --text-sm: clamp(0.8125rem, 0.775rem + 0.25vw, 0.875rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.4rem + 2.4vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.5rem + 3.75vw, 3.5rem);
  --text-5xl: clamp(3rem, 2rem + 5vw, 5rem);

  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;

  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.04em;
  --tracking-wider: 0.08em;

  /* Font Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;

  /* ========================================
     SPACING SCALE (8px base)
     ======================================== */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.5rem;    /* 24px */
  --space-6: 2rem;      /* 32px */
  --space-7: 3rem;      /* 48px */
  --space-8: 4rem;      /* 64px */
  --space-9: 6rem;      /* 96px */
  --space-10: 8rem;     /* 128px */

  /* ========================================
     LAYOUT
     ======================================== */
  --container-max: 1200px;
  --container-narrow: 768px;
  --container-wide: 1440px;
  --content-max-width: 65ch;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ========================================
     BREAKPOINTS (for reference; use in @media)
     ======================================== */
  /* --bp-sm: 640px   */
  /* --bp-md: 768px   */
  /* --bp-lg: 1024px  */
  /* --bp-xl: 1280px  */
  /* --bp-2xl: 1536px */

  /* ========================================
     TRANSITIONS
     ======================================== */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Light Mode Override

Light mode is the secondary mode. Apply this class to `<html>` or `<body>` when needed.

```css
.light-mode,
[data-theme="light"] {
  --bg-primary: var(--color-white);
  --bg-secondary: #F5F5F4;
  --bg-surface: var(--color-white);
  --bg-elevated: var(--color-white);

  --text-primary: var(--color-near-black);
  --text-secondary: var(--color-gray-400);
  --text-muted: var(--color-gray-300);
  --text-disabled: var(--color-gray-200);

  --accent-primary: var(--color-space-cadet);
  --accent-secondary: var(--color-blue);
  --accent-hover: var(--color-cerulean);

  --link-color: var(--color-blue);
  --link-hover: var(--color-cerulean);
  --link-visited: var(--color-space-cadet);

  --border-color: rgba(0, 0, 0, 0.1);
  --border-color-strong: rgba(0, 0, 0, 0.2);

  --focus-ring: var(--color-blue);
}
```

---

## Font Loading Strategy

### Google Fonts CDN (Recommended for quick setup)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Noto+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Inconsolata:wght@400;700&display=swap" rel="stylesheet">
```

Note: League Spartan is available on Google Fonts as "League Spartan." For the full Spartan MB weight range, self-host the webfont files.

```html
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Full Font Stacks (for maximum fallback coverage)

These stacks are designed to degrade gracefully across operating systems and devices. Use them in production CSS.

```css
/* Display — Syne */
.font-display {
  font-family: 'Syne', sans-serif;
}

/* Headings — Spartan with geometric fallback chain */
.font-heading {
  font-family: 'Webfont-Spartan', 'Spartan', 'Spartan MB',
    'League Spartan', 'Century Gothic', 'CenturyGothic',
    'Avenir', 'Avenir Next', 'AvenirNext',
    'Tw Cen MT', 'Futura', 'Futura PT',
    'URW Gothic L', 'Avant Garde', 'AvantGarde',
    'TeX Gyre Adventor', 'Insignia', 'Plate Gothic',
    sans-serif;
}

/* Body — Noto Sans with humanist fallback chain */
.font-body {
  font-family: 'Noto Sans', 'Verdana', 'DejaVu Sans',
    'Bitstream Vera Sans', 'Open Sans', 'Source Sans Pro',
    'Carlito', sans-serif;
}

/* Serif — Palatino/Palladio with serif fallback chain */
.font-serif {
  font-family: 'Palatino', 'Palatino Linotype', 'Palatino LT STD',
    'Palladio', 'URW Palladio L', 'Palatino Novo',
    'TeX Gyre Pagella', 'Palazzo Original', 'Marathon Serial',
    'Book Antiqua', 'FPL Neu', 'Perpetua', 'Tinos',
    'Linux Libertine', 'Libertine', 'Garamond', serif;
}

/* Monospace — Inconsolata */
.font-mono {
  font-family: 'Web_Inconsolata', 'Inconsolata', 'InconsolataMedium',
    'Consolas', 'Menlo', 'Monaco', monospace;
}
```

### Self-Hosted @font-face Declarations

When self-hosting Spartan MB (recommended for full weight support):

```css
@font-face {
  font-family: 'Webfont-Spartan';
  src: url('/fonts/spartan-mb.black-webfont.woff2') format('woff2'),
       url('/fonts/spartan-mb.black-webfont.woff') format('woff');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Webfont-Spartan';
  src: url('/fonts/spartan-mb.extrabold-webfont.woff2') format('woff2'),
       url('/fonts/spartan-mb.extrabold-webfont.woff') format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Webfont-Spartan';
  src: url('/fonts/spartan-mb.bold-webfont.woff2') format('woff2'),
       url('/fonts/spartan-mb.bold-webfont.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Webfont-Spartan';
  src: url('/fonts/spartan-mb.semibold-webfont.woff2') format('woff2'),
       url('/fonts/spartan-mb.semibold-webfont.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Webfont-Spartan';
  src: url('/fonts/spartan-mb.regular-webfont.woff2') format('woff2'),
       url('/fonts/spartan-mb.regular-webfont.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Webfont-Spartan';
  src: url('/fonts/spartan-mb.light-webfont.woff2') format('woff2'),
       url('/fonts/spartan-mb.light-webfont.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Webfont-Spartan';
  src: url('/fonts/spartan-mb.thin-webfont.woff2') format('woff2'),
       url('/fonts/spartan-mb.thin-webfont.woff') format('woff');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
```

When self-hosting Inconsolata:

```css
@font-face {
  font-family: 'Web_Inconsolata';
  src: url('/fonts/inconsolata.bold-webfont.woff2') format('woff2'),
       url('/fonts/inconsolata.bold-webfont.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Web_Inconsolata';
  src: url('/fonts/inconsolata-webfont.woff2') format('woff2'),
       url('/fonts/inconsolata-webfont.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

## Typography Scale Application

```css
/* Display headlines — Syne */
.display-1 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-extrabold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.display-2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

/* Section headings — Spartan */
h1, .h1 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

h2, .h2 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
}

h3, .h3 {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-normal);
}

h4, .h4 {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-normal);
}

h5, .h5, h6, .h6 {
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* Body text — Noto Sans */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

/* Small / caption text */
.text-sm {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

.text-xs {
  font-size: var(--text-xs);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
}

/* Code */
code, pre, .font-mono {
  font-family: var(--font-mono);
  font-size: 0.9em;
}
```

---

## Component Patterns

These are semantic descriptions of common UI components. Implementations should use the CSS custom properties defined above.

### Navigation Bar

- Fixed position at top of viewport
- Background: `var(--bg-secondary)` with slight transparency and backdrop blur
- Logo: primary wordmark, left-aligned, links to homepage
- Nav links: `var(--font-heading)` at `var(--text-sm)`, weight 600, `var(--tracking-wide)`, uppercase
- Active link: underline using `var(--accent-primary)` (Gold), 2px solid, offset 4px below text
- Mobile: hamburger menu, slide-in panel from right, same background treatment
- CTA button (Join Us): Gold background, Space Cadet Blue text, rounded with `var(--radius-full)`

### Hero Section

- Full viewport width, minimum 70vh height
- Background: `var(--bg-primary)` (Space Cadet Blue) or a darkened lunar photograph
- If using a photograph, overlay with `rgba(19, 41, 75, 0.75)` to maintain text contrast
- Headline: `.display-1` or `.display-2` using Syne
- Subheadline: `var(--text-xl)` in Noto Sans, `var(--text-secondary)` color
- Primary CTA: Gold background, Space Cadet Blue text
- Secondary CTA: transparent with Gold border and Gold text

### Buttons

**Primary:**
- Background: `var(--accent-primary)` (Gold)
- Text: `var(--color-space-cadet)`
- Font: `var(--font-heading)`, weight 600, `var(--text-sm)`, `var(--tracking-wide)`
- Padding: `var(--space-3) var(--space-6)`
- Border radius: `var(--radius-full)`
- Hover: background shifts to `var(--accent-hover)` (Light Gold)
- Focus: 2px outline using `var(--focus-ring)`, offset 2px

**Secondary:**
- Background: transparent
- Border: 2px solid `var(--accent-primary)`
- Text: `var(--accent-primary)`
- Hover: background fills with `rgba(255, 205, 0, 0.1)`

**Ghost / Tertiary:**
- Background: transparent
- Text: `var(--link-color)` (Cerulean)
- Underline on hover
- No border

### Cards

- Background: `var(--bg-surface)`
- Border: 1px solid `var(--border-color)`
- Border radius: `var(--radius-lg)`
- Padding: `var(--space-5)` or `var(--space-6)`
- Hover: border transitions to `var(--border-color-strong)`, optional subtle lift with `box-shadow`
- Card title: `h3` or `h4` style
- Card body text: standard body text styles
- Optional image: top-aligned, border-radius matches card top corners

### Footer

- Background: `var(--bg-secondary)` (Near-Black)
- Organization name and legal text: `var(--text-xs)`, `var(--text-muted)`
- Link columns: `var(--font-body)` at `var(--text-sm)`
- Social icons: 24px, `var(--text-secondary)` color, Gold on hover
- Required legal text: "The Moon Society and the Moon Society logo are trademarks of The Moon Society, Incorporated."
- Lunar imagery attribution if applicable

---

## Layout System

### Container

```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-5);
}

.container-narrow {
  max-width: var(--container-narrow);
}

.container-wide {
  max-width: var(--container-wide);
}
```

### Section Spacing

Vertical spacing between major page sections should use `var(--space-9)` (96px) at desktop and scale down to `var(--space-7)` (48px) at mobile breakpoints.

### Grid

Use CSS Grid for page layouts. A 12-column grid is recommended:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-5);
}
```

For card grids and repeating content, use auto-fill:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-5);
}
```

### Responsive Breakpoints

```css
/* Mobile first. These are min-width breakpoints. */
@media (min-width: 640px)  { /* sm  — large phones, small tablets */ }
@media (min-width: 768px)  { /* md  — tablets */ }
@media (min-width: 1024px) { /* lg  — small desktops, landscape tablets */ }
@media (min-width: 1280px) { /* xl  — standard desktops */ }
@media (min-width: 1536px) { /* 2xl — large desktops */ }
```

---

## Approved Color Pairings Matrix

This matrix shows WCAG 2.1 compliance for text on background combinations. Use only AA-passing combinations for body text, and AA-Large-passing combinations only for text 18px+ or 14px+ bold.

| Background | Text Color | Contrast Ratio | WCAG AA | WCAG AAA |
|---|---|---|---|---|
| Space Cadet (#13294B) | White (#FFFFFF) | 14.5:1 | Pass | Pass |
| Space Cadet (#13294B) | Gold (#FFCD00) | 9.7:1 | Pass | Pass |
| Space Cadet (#13294B) | Cool Gray 2 (#D0D0CE) | 9.4:1 | Pass | Pass |
| Space Cadet (#13294B) | Cyan (#6AD1E3) | 8.2:1 | Pass | Pass |
| Space Cadet (#13294B) | Cerulean (#00A3E0) | 5.1:1 | Pass | Fail |
| Near-Black (#1D252D) | White (#FFFFFF) | 15.5:1 | Pass | Pass |
| Near-Black (#1D252D) | Gold (#FFCD00) | 10.3:1 | Pass | Pass |
| Near-Black (#1D252D) | Cerulean (#00A3E0) | 5.4:1 | Pass | Fail |
| White (#FFFFFF) | Space Cadet (#13294B) | 14.5:1 | Pass | Pass |
| White (#FFFFFF) | Near-Black (#1D252D) | 15.5:1 | Pass | Pass |
| White (#FFFFFF) | Cool Gray 11 (#53565A) | 7.4:1 | Pass | Pass |
| White (#FFFFFF) | Blue (#006298) | 6.6:1 | Pass | Fail |
| White (#FFFFFF) | Emerald (#009775) | 3.7:1 | Large only | Fail |
| White (#FFFFFF) | Cerulean (#00A3E0) | 2.9:1 | Fail | Fail |
| White (#FFFFFF) | Dark Gold (#D29F13) | 2.4:1 | Fail | Fail |
| White (#FFFFFF) | Gold (#FFCD00) | 1.5:1 | Fail | Fail |

---

## Image and Media Treatment

### Lunar Photography Overlays

When using lunar surface photography as a background, always apply a color overlay to maintain text contrast:

```css
.hero-lunar {
  background-image:
    linear-gradient(rgba(19, 41, 75, 0.75), rgba(19, 41, 75, 0.85)),
    url('/images/lunar-surface.jpg');
  background-size: cover;
  background-position: center;
}
```

### Image Aspect Ratios

- Hero images: 16:9 or wider
- Card thumbnails: 3:2
- Blog post featured images: 16:9
- Square format (social, avatars): 1:1

### Attribution

NASA imagery: include `alt` text ending with "Credit: NASA" or a visible caption.

Andre van der Hoeven imagery: include visible caption "Lunar imagery by Andre van der Hoeven. Used with permission."

---

## Implementation Notes

### Framework Recommendations

This spec does not mandate a framework. However, when starting a new Moon Society web property:

- **Static content sites** (informational, landing pages): Astro is preferred for its performance and flexibility
- **Interactive applications** (membership portals, event registration): React or Next.js are reasonable choices
- **Simple single-page needs**: Plain HTML/CSS with the custom properties above

### Performance Targets

- Largest Contentful Paint (LCP): under 2.5 seconds
- Cumulative Layout Shift (CLS): under 0.1
- First Input Delay (FID): under 100ms
- Total page weight: under 1MB for initial load (excluding images)
- Font loading should use `font-display: swap` to prevent invisible text during load

### Accessibility Checklist

Before shipping any page:

- [ ] All text meets WCAG AA contrast requirements (verify against the pairings matrix above)
- [ ] All images have descriptive `alt` attributes
- [ ] All interactive elements are keyboard-accessible
- [ ] Focus states are visible using `var(--focus-ring)` styling
- [ ] Page has a logical heading hierarchy (no skipped levels)
- [ ] Forms have associated `<label>` elements
- [ ] Skip-to-content link is present
- [ ] Page is navigable with a screen reader
- [ ] No text is smaller than 14px
- [ ] Color is not the only means of conveying information

---

*This specification is maintained alongside the Moon Society Brand Guide. Both documents should be updated together when brand decisions change.*
