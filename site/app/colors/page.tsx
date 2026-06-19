import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ColorSwatch } from "@/components/color-swatch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { brandColors, extendedColors, colorPairings, contrastRatios } from "@/lib/brand-data";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Colors",
  description:
    "The Moon Society color palette: hex, RGB, HSL, and Pantone values, accessibility contrast ratios, and approved pairings.",
  alternates: { canonical: "/colors" },
};

function wcagBadgeClasses(wcag: string): string {
  if (wcag === "AAA")
    return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
  if (wcag === "Fail")
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
}

export default function Colors() {
  const primaryColors = brandColors.filter((c) => c.category === "primary");
  const secondaryColors = brandColors.filter((c) => c.category === "secondary");
  const neutralColors = brandColors.filter((c) => c.category === "neutral");
  const semanticColors = brandColors.filter((c) => c.category === "semantic");

  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <PageHeader
        title="Colors"
        description="Space Cadet Blue and Gold define the Moon Society identity. The palette is dark-mode first — Space Cadet dominates, Gold accents the calls to action."
      />

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Primary Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Secondary Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Neutral Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {neutralColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Semantic Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {semanticColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>

      {extendedColors.length > 0 && (
        <section className="mb-12">
          <h2 className="font-heading font-semibold text-2xl mb-2">Extended Palette</h2>
          <p className="text-muted-foreground mb-6">
            For specific applications — data visualization, event branding, or editorial
            illustration. These should not replace the primary or secondary colors in standard
            layouts.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {extendedColors.map((color) => (
              <div
                key={color.name}
                className="rounded-lg border overflow-hidden"
                data-testid={`extended-color-${color.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="h-14" style={{ backgroundColor: color.hex }} />
                <div className="p-2">
                  <p className="text-xs font-medium leading-tight">{color.name}</p>
                  <code className="text-[10px] font-mono text-muted-foreground">{color.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Color Pairings</h2>
        <p className="text-muted-foreground mb-6">
          These combinations ensure readability and visual harmony.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorPairings.map((pairing, index) => {
            const primaryColor = brandColors.find((c) => c.name === pairing.primary);
            const secondaryColor = brandColors.find((c) => c.name === pairing.secondary);
            return (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex gap-2 mb-3">
                    <div
                      className="h-12 flex-1 rounded-lg flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: primaryColor?.hex, color: secondaryColor?.hex }}
                    >
                      Aa
                    </div>
                    <div
                      className="h-12 flex-1 rounded-lg border flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: secondaryColor?.hex, color: primaryColor?.hex }}
                    >
                      Aa
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{pairing.usage}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-heading font-semibold text-2xl mb-6">Accessibility</h2>
        <p className="text-muted-foreground mb-6">
          Verified against WCAG 2.1. Use AA-passing combinations for body text; rows marked Fail are
          shown so they are never used for text.
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contrast Ratios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Foreground</th>
                    <th className="text-left py-3 px-4 font-medium">Background</th>
                    <th className="text-left py-3 px-4 font-medium">Preview</th>
                    <th className="text-left py-3 px-4 font-medium">Ratio</th>
                    <th className="text-left py-3 px-4 font-medium">WCAG</th>
                  </tr>
                </thead>
                <tbody>
                  {contrastRatios.map((item, index) => (
                    <tr key={index} className="border-b last:border-0" data-testid={`row-contrast-${index}`}>
                      <td className="py-3 px-4">
                        <code className="text-xs font-mono bg-muted px-2 py-1 rounded">{item.foreground}</code>
                      </td>
                      <td className="py-3 px-4">
                        <code className="text-xs font-mono bg-muted px-2 py-1 rounded">{item.background}</code>
                      </td>
                      <td className="py-3 px-4">
                        <div
                          className="px-3 py-1.5 rounded text-xs font-medium inline-block"
                          style={{ backgroundColor: item.background, color: item.foreground }}
                        >
                          Sample Text
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-xs">{item.ratio}</td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className={wcagBadgeClasses(item.wcag)}>
                          {item.wcag === "Fail" ? (
                            <X className="h-3 w-3 mr-1" />
                          ) : (
                            <Check className="h-3 w-3 mr-1" />
                          )}
                          {item.wcag}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
