"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/copy-button";
import type { TypographySpec } from "@/lib/brand-data";

interface TypographySpecimenProps {
  spec: TypographySpec;
}

// Fonts sourced from Google Fonts get a ready-to-paste @import; others (e.g.
// the system serif stack) show only the font-family declaration.
function googleImport(spec: TypographySpec): string | null {
  if (!/fonts\.google\.com/.test(spec.source)) return null;
  return `@import url('https://fonts.googleapis.com/css2?family=${spec.fontFamily.replace(
    / /g,
    "+"
  )}:wght@${spec.weights.join(";")}&display=swap');`;
}

export function TypographySpecimen({ spec }: TypographySpecimenProps) {
  const cssImport = googleImport(spec);
  const cssFontFamily = `font-family: "${spec.fontFamily}", ${spec.fallback.join(", ")};`;
  const fontStack = `"${spec.fontFamily}", ${spec.fallback.join(", ")}`;

  return (
    <Card className="overflow-visible" data-testid={`typography-specimen-${spec.name.toLowerCase()}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <CardTitle className="font-heading text-lg">
            {spec.name} — {spec.fontFamily}
          </CardTitle>
          <div className="flex gap-1 flex-wrap">
            {spec.weights.map((weight) => (
              <Badge key={weight} variant="secondary" className="text-xs">
                {weight}
              </Badge>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{spec.usage}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 rounded-lg bg-muted/30" style={{ fontFamily: fontStack }}>
          {spec.name === "Display" ? (
            <div className="space-y-2">
              <p className="text-4xl font-extrabold tracking-tight">To the Moon</p>
              <p className="text-2xl font-bold">Lunar Development Conference</p>
              <p className="text-base">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
            </div>
          ) : spec.name === "Headings" ? (
            <div className="space-y-2">
              <p className="text-4xl font-bold">A permanent presence</p>
              <p className="text-2xl font-semibold">on the surface of the Moon</p>
              <p className="text-lg font-semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-base">abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
          ) : spec.name === "Monospace" ? (
            <div className="space-y-2">
              <p className="text-base">{`--ms-space-cadet: #13294B;`}</p>
              <p className="text-sm">{`--ms-gold: #FFCD00;`}</p>
              <p className="text-xs text-muted-foreground">{`// Technical specifications and code`}</p>
            </div>
          ) : spec.name === "Serif" ? (
            <div className="space-y-2">
              <p className="text-lg">
                The Moon Society advances the development and settlement of the Moon.
              </p>
              <p className="text-base text-muted-foreground">
                Sphinx of black quartz, judge my vow. 0123456789
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-lg">The quick brown fox jumps over the lazy dog.</p>
              <p className="text-base">Sphinx of black quartz, judge my vow.</p>
              <p className="text-sm text-muted-foreground">
                A knowledgeable colleague who is genuinely excited about what they do and wants you
                to be part of it. 0123456789
              </p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 p-2 rounded bg-muted/50">
            <code className="text-xs font-mono flex-1 truncate">{cssFontFamily}</code>
            <CopyButton value={cssFontFamily} label="CSS font-family" />
          </div>
          {cssImport && (
            <div className="flex items-center justify-between gap-2 p-2 rounded bg-muted/50">
              <code className="text-xs font-mono flex-1 truncate overflow-hidden">{cssImport}</code>
              <CopyButton value={cssImport} label="CSS import" />
            </div>
          )}
        </div>

        <a
          href={spec.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          data-testid={`link-font-source-${spec.name.toLowerCase()}`}
        >
          View source
        </a>
      </CardContent>
    </Card>
  );
}
