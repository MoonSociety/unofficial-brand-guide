import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mmm, brandColors } from "@/lib/brand-data";
import { Newspaper, Globe, Layers, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Moon Miners' Manifesto",
  description:
    "The Moon Miners' Manifesto (MMM) sub-brand — the Society's lunar settlement journal since 1986, its archive site at moonmanifesto.com, and the Corolis theme.",
  alternates: { canonical: "/mmm" },
};

const surfaceSwatches = [
  { name: "Ink (warm)", hex: mmm.readingSurface.inkWarm },
  { name: "Container", hex: mmm.readingSurface.backgroundContainer },
  { name: "Border (warm)", hex: mmm.readingSurface.borderWarm },
  { name: "Shadow (warm)", hex: mmm.readingSurface.shadowWarm },
  { name: "Highlight", hex: mmm.readingSurface.highlight },
  { name: "Link", hex: mmm.readingSurface.link },
];

const facts = [
  { icon: Newspaper, label: "Publishing since", value: "December 1986" },
  { icon: Globe, label: "Archive", value: "moonmanifesto.com (moonmanifesto.org redirects)" },
  { icon: Layers, label: "Site theme", value: "Corolis (WordPress, CSS Grid)" },
];

export default function MMM() {
  const palette = brandColors.filter((c) =>
    ["Space Cadet Blue", "Gold", "Blue", "Cyan"].includes(c.name)
  );

  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <PageHeader
        title="Moon Miners' Manifesto"
        description="MMM is the Moon Society's lunar settlement journal, publishing since 1986. It is a sub-brand: its archive site carries its own masthead and warm editorial neutrals while inheriting the parent palette and type system."
      />

      {/* Marks on dark + light */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <div className="h-56 flex items-center justify-center p-8 bg-[#13294B]">
            <img
              src={mmm.logoUrl}
              alt="Moon Miners' Manifesto mark on dark background"
              className="max-h-full max-w-full object-contain"
              data-testid="img-mmm-logo-dark"
            />
          </div>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Square mark on Space Cadet Blue</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <div className="h-56 flex items-center justify-center p-8 bg-white">
            <img
              src={mmm.logoBannerUrl}
              alt="Moon Miners' Manifesto horizontal masthead on light background"
              className="max-h-full max-w-full object-contain"
              data-testid="img-mmm-banner-light"
            />
          </div>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Horizontal masthead on white — the archive site&apos;s reading surface
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Publication identity */}
      <section className="mb-12">
        <Card className="bg-muted/30">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-3">
              <CardTitle className="font-display text-2xl">{mmm.fullName}</CardTitle>
              <Badge variant="secondary">MMM</Badge>
            </div>
            <p className="text-muted-foreground font-display">{mmm.tagline}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed">{mmm.description}</p>
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
              <a href={mmm.website} target="_blank" rel="noopener noreferrer" data-testid="link-mmm-site">
                Visit {mmm.website.replace("https://www.", "")}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* The Corolis theme */}
      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-4">The Corolis theme</h2>
        <p className="text-muted-foreground max-w-3xl mb-6">{mmm.platform}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Editorial reading surface</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{mmm.readingSurface.note}</p>
              <div className="grid grid-cols-3 gap-3">
                {surfaceSwatches.map((c) => (
                  <div key={c.name} className="text-center">
                    <div
                      className="h-14 rounded-lg border"
                      style={{ backgroundColor: c.hex }}
                      title={`${c.name} ${c.hex}`}
                    />
                    <p className="mt-1 text-[11px] font-medium leading-tight">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground font-mono">{c.hex}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Typography</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Headings:</strong> {mmm.typography.headings}</li>
                <li><strong className="text-foreground">Body:</strong> {mmm.typography.body}</li>
                <li><strong className="text-foreground">Serif:</strong> {mmm.typography.serif}</li>
                <li><strong className="text-foreground">Monospace:</strong> {mmm.typography.monospace}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inheritance note */}
      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-4">A sub-brand of the Moon Society</h2>
        <p className="text-muted-foreground max-w-3xl mb-6">{mmm.inherits}</p>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Inherited palette</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3 max-w-md">
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
      </section>

      <p className="text-xs text-muted-foreground max-w-3xl">
        MMM branding shown here is for reference. Moon Miners&apos; Manifesto and The Moon Society
        marks are trademarks of The Moon Society, Incorporated.
      </p>
    </div>
  );
}
