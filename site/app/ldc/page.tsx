import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ldc, brandColors, typographySpecs } from "@/lib/brand-data";
import { Calendar, MonitorPlay, Mountain, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "LDC 2026",
  description:
    "The Lunar Development Conference (LDC) sub-brand — identity mark, conference details, and how it inherits the Moon Society palette and typography.",
  alternates: { canonical: "/ldc" },
};

const facts = [
  { icon: Calendar, label: "Dates", value: ldc.dates },
  { icon: MonitorPlay, label: "Format", value: ldc.format },
  { icon: Mountain, label: "Theme", value: ldc.theme },
];

export default function LDC() {
  const palette = brandColors.filter((c) =>
    ["Space Cadet Blue", "Gold", "Cerulean", "Cyan"].includes(c.name)
  );

  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <PageHeader
        title="Lunar Development Conference"
        description="LDC is the Moon Society's annual conference series. It is a sub-brand: it carries its own identity mark while inheriting the parent palette and typography."
      />

      {/* Hero mark on dark + light */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <div className="h-56 flex items-center justify-center p-8 bg-[#13294B]">
            <img
              src={ldc.logoUrl}
              alt="LDC 2026 logo on dark background"
              className="max-h-full max-w-full object-contain"
              data-testid="img-ldc-logo-dark"
            />
          </div>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">On Space Cadet Blue (preferred)</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <div className="h-56 flex items-center justify-center p-8 bg-white">
            <img
              src={ldc.logoUrl}
              alt="LDC 2026 logo on light background"
              className="max-h-full max-w-full object-contain"
              data-testid="img-ldc-logo-light"
            />
          </div>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">On white</p>
          </CardContent>
        </Card>
      </section>

      {/* Conference identity */}
      <section className="mb-12">
        <Card className="bg-muted/30">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-3">
              <CardTitle className="font-display text-2xl">{ldc.fullName}</CardTitle>
              <Badge variant="secondary">{ldc.name}</Badge>
            </div>
            <p className="text-muted-foreground font-display">{ldc.tagline}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed">{ldc.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</p>
                    <p className="text-sm font-medium">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild>
              <a href={ldc.website} target="_blank" rel="noopener noreferrer" data-testid="link-ldc-site">
                Visit {ldc.website.replace("https://", "")}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Inheritance note */}
      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-4">A sub-brand of the Moon Society</h2>
        <p className="text-muted-foreground max-w-3xl mb-6">{ldc.inherits}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Inherited palette</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {palette.map((c) => (
                  <div key={c.name} className="text-center">
                    <div
                      className="h-14 rounded-lg border"
                      style={{ backgroundColor: c.hex }}
                      title={`${c.name} ${c.hex}`}
                    />
                    <p className="mt-1 text-[11px] font-medium leading-tight">{c.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Inherited typography</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {typographySpecs.map((t) => (
                  <li key={t.name}>
                    <strong className="text-foreground">{t.name}:</strong> {t.fontFamily}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                The conference site (ldc.moonsociety.org) builds on these tokens — see the Colors and
                Typography pages for the full system.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <p className="text-xs text-muted-foreground max-w-3xl">
        LDC branding shown here is for reference. The Lunar Development Conference and The Moon
        Society marks are trademarks of The Moon Society, Incorporated.
      </p>
    </div>
  );
}
