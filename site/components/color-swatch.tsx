"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/copy-button";
import type { BrandColor } from "@/lib/brand-data";

interface ColorSwatchProps {
  color: BrandColor;
}

export function ColorSwatch({ color }: ColorSwatchProps) {
  const isLight = isLightColor(color.hex);

  return (
    <Card className="overflow-visible" data-testid={`color-swatch-${color.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div
        className="h-28 rounded-t-lg flex items-end justify-end p-3"
        style={{ backgroundColor: color.hex }}
      >
        <Badge
          variant="secondary"
          className={`text-xs ${isLight ? 'bg-black/10 text-black' : 'bg-white/20 text-white'}`}
        >
          {color.category}
        </Badge>
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-heading font-semibold text-base">{color.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{color.usage}</p>
        </div>
        
        <div className="space-y-2">
          <ColorValue label="HEX" value={color.hex} />
          <ColorValue label="RGB" value={color.rgb} />
          <ColorValue label="HSL" value={color.hsl} />
        </div>
      </CardContent>
    </Card>
  );
}

function ColorValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1 px-2 rounded bg-muted/50" data-testid={`color-value-${label.toLowerCase()}`}>
      <span className="text-xs font-medium text-muted-foreground w-10">{label}</span>
      <code className="text-xs font-mono flex-1 truncate" data-testid={`text-color-value-${label.toLowerCase()}`}>{value}</code>
      <CopyButton value={value} label={`${label} value`} size="icon" variant="ghost" />
    </div>
  );
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}