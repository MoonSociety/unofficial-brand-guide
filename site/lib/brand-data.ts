// brand-data.ts — single import surface for brand values inside the site.
//
// SOURCE OF TRUTH: public/brand.json (v2.0.0 manifest synced from the repo
// root by scripts/sync-assets.mjs). This file IMPORTS that JSON and projects
// it into the flat shapes the components consume (brandColors[], logoVariants[],
// etc.). Edit the ROOT brand.json — never public/brand.json directly.

import brandJson from "@/public/brand.json";

// ─────────────────────────────────────────────────────────────────────
// v2 shape (re-export the manifest as-is for new code)
// ─────────────────────────────────────────────────────────────────────

export type BrandManifestV2 = typeof brandJson;
export const brand: BrandManifestV2 = brandJson;
export const brandManifest = brand;

// ─────────────────────────────────────────────────────────────────────
// Legacy/flat types consumed by components
// ─────────────────────────────────────────────────────────────────────

export interface BrandColor {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  usage: string;
  category: "primary" | "secondary" | "neutral" | "semantic" | "extended";
  token?: string;
  pantone?: string;
}

export interface LogoVariant {
  name: string;
  description: string;
  url: string;
  formats: string[];
  background: "light" | "dark" | "any";
}

export interface TypographySpec {
  name: string;
  fontFamily: string;
  weights: number[];
  source: string;
  fallback: string[];
  usage: string;
  lineHeight?: number;
}

export interface VoiceTrait {
  trait: string;
  description: string;
}

// ─────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────

const formatRgb = (c: { rgb?: { r: number; g: number; b: number } }) =>
  c.rgb ? `rgb(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b})` : "";

const formatHsl = (hex: string) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let H = 0;
  let S = 0;
  if (max !== min) {
    const d = max - min;
    S = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: H = (g - b) / d + (g < b ? 6 : 0); break;
      case g: H = (b - r) / d + 2; break;
      case b: H = (r - g) / d + 4; break;
    }
    H *= 60;
  }
  return `hsl(${Math.round(H)}, ${Math.round(S * 100)}%, ${Math.round(l * 100)}%)`;
};

type RawColor = {
  name: string;
  hex: string;
  token?: string;
  pantone?: string;
  usage?: string;
  rgb?: { r: number; g: number; b: number };
};

const liftColor = (c: RawColor, category: BrandColor["category"]): BrandColor => ({
  name: c.name,
  hex: c.hex,
  rgb: formatRgb(c),
  hsl: formatHsl(c.hex),
  usage: c.usage ?? "",
  category,
  token: c.token,
  pantone: c.pantone,
});

// ─────────────────────────────────────────────────────────────────────
// Projections
// ─────────────────────────────────────────────────────────────────────

export const brandColors: BrandColor[] = [
  ...brand.colors.primary.map((c) => liftColor(c, "primary")),
  ...brand.colors.secondary.map((c) => liftColor(c, "secondary")),
  ...brand.colors.neutral.map((c) => liftColor(c, "neutral")),
  ...brand.colors.semantic.map((c) => liftColor(c, "semantic")),
];

export const extendedColors: BrandColor[] = (brand.colors.extended ?? []).map((c) =>
  liftColor(c, "extended")
);

export const organizationInfo = {
  name: brand.organization.name,
  tagline: brand.organization.tagline,
  mission: brand.organization.mission,
  website: brand.organization.website,
  brandGuideUrl: brand.organization.brandGuide,
  contact: brand.organization.contact,
  location: brand.organization.location,
  founded: brand.organization.founded,
};

const logoEntries = Object.entries(brand.logos).filter(([k]) => k !== "rules") as [
  string,
  { file: string; format?: string; background: "light" | "dark" | "any"; description: string },
][];

const logoDisplayName = (id: string) =>
  ({
    "primary-white": "Primary (White, on dark)",
    "primary-black": "Primary (Black, on light)",
    "primary-black-print": "Primary Black (Print)",
    "icon": "Icon / Thumbnail",
    "email-black": "Email (White on black)",
    "vector-2014": "Vector Source (2014)",
    "vector-source": "Vector Artwork (Original)",
  } as Record<string, string>)[id] ?? id;

export const logoVariants: LogoVariant[] = logoEntries.map(([id, l]) => ({
  name: logoDisplayName(id),
  description: l.description,
  url: "/" + l.file, // brand.json paths are repo-relative ("assets/..."); make root-relative
  formats: [l.format ?? (l.file.endsWith(".jpg") ? "JPG" : l.file.endsWith(".svg") ? "SVG" : "PNG")],
  background: l.background,
}));

export const logoUsageRules = {
  clearSpace: brand.logos.rules.clearSpace,
  minimumSize: `Never display the logo smaller than ${brand.logos.rules.minimumSize.digital} for digital or ${brand.logos.rules.minimumSize.print} for print.`,
  prohibitions: brand.logos.rules.prohibitions,
};

const typeDisplayName = (role: string) =>
  ({
    display: "Display",
    headings: "Headings",
    body: "Body",
    serif: "Serif",
    monospace: "Monospace",
  } as Record<string, string>)[role] ?? role;

export const typographySpecs: TypographySpec[] = brand.typography.fonts.map((f) => ({
  name: typeDisplayName(f.role),
  fontFamily: f.family,
  weights: f.weights,
  source: f.source,
  fallback: f.fallbacks,
  usage: f.usage ?? "",
  lineHeight: f.lineHeight,
}));

const traitDescription = (trait: string): string => {
  const map: Record<string, string> = {
    Authoritative: "Precise language without unnecessary jargon — informed, never academic.",
    Aspirational: "Advocate for real missions, technology, and timelines — not science fiction.",
    Inclusive: "Welcome people who discovered us yesterday. Explain acronyms; avoid insider shorthand.",
    Active: "Use language that reflects agency and momentum. We are building something.",
  };
  return map[trait] ?? "";
};

export const voiceTraits: VoiceTrait[] = brand.voice.traits.map((t) => ({
  trait: t,
  description: traitDescription(t),
}));

export const toneKeywords = brand.voice.toneKeywords;
export const voiceCoreStatement = brand.voice.coreStatement;
export const writingDos = brand.voice.do;
export const writingDonts = brand.voice.dont;

export const contrastRatios = brand.colors.accessibility.map((a) => ({
  foreground: a.foreground,
  background: a.background,
  ratio: a.ratio,
  wcag: a.wcag,
}));

// ─────────────────────────────────────────────────────────────────────
// LDC sub-brand projection
// ─────────────────────────────────────────────────────────────────────

export const ldc = {
  ...brand.subBrands.ldc,
  logoUrl: "/" + brand.subBrands.ldc.logo,
};

// ─────────────────────────────────────────────────────────────────────
// UI-specific data (presentation config, not part of the brand definition)
// ─────────────────────────────────────────────────────────────────────

export const colorPairings = [
  { primary: "Space Cadet Blue", secondary: "White", usage: "Primary surfaces, body text on the brand background" },
  { primary: "Space Cadet Blue", secondary: "Gold", usage: "Headlines, calls to action, key highlights on dark" },
  { primary: "Near-Black", secondary: "Gold", usage: "Deep backgrounds with gold accents" },
  { primary: "White", secondary: "Space Cadet Blue", usage: "Light-mode surfaces, headings on white" },
  { primary: "Space Cadet Blue", secondary: "Cyan", usage: "Secondary accents, tags, data on dark" },
];
