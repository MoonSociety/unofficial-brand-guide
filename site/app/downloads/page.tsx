"use client";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Image as ImageIcon, FileJson, Type, Palette, FileText, Archive, Rocket } from "lucide-react";

const downloadCategories = [
  {
    title: "Logo Files",
    icon: ImageIcon,
    description: "Moon Society wordmark variants",
    items: [
      { name: "Canonical Logo 2026 (PNG)", format: "PNG", size: "~35 KB", url: "/assets/logos/MoonSocietyLogo2026_larger.png", preview: "/assets/logos/MoonSocietyLogo2026_larger.png", previewBg: "dark" as const },
      { name: "Primary (White, PNG)", format: "PNG", size: "~99 KB", url: "/assets/logos/MoonSoc_TransWhite_Print.png", preview: "/assets/logos/MoonSoc_TransWhite_Print.png", previewBg: "dark" as const },
      { name: "Primary (Black, PNG)", format: "PNG", size: "~23 KB", url: "/assets/logos/MoonSocLogo-Trans-440x190.png", preview: "/assets/logos/MoonSocLogo-Trans-440x190.png" },
      { name: "Black Print (PNG)", format: "PNG", size: "~100 KB", url: "/assets/logos/MoonSoc_TransBlack_Print.png", preview: "/assets/logos/MoonSoc_TransBlack_Print.png" },
      { name: "Icon / Thumbnail (PNG)", format: "PNG", size: "~10 KB", url: "/assets/logos/MoonSoc_Logo.png", preview: "/assets/logos/MoonSoc_Logo.png", previewBg: "dark" as const },
      { name: "Vector Source (SVG)", format: "SVG", size: "~41 KB", url: "/assets/logos/MoonSocietyLogo2014.svg" },
      { name: "Logo Bundle (ZIP)", format: "ZIP", size: "All variants", url: "/logo" },
    ],
  },
  {
    title: "LDC Sub-brand",
    icon: Rocket,
    description: "Lunar Development Conference 2026 mark",
    items: [
      { name: "LDC 2026 Logo (SVG)", format: "SVG", size: "~23 KB", url: "/assets/ldc/ldc-2026-logo.svg", preview: "/assets/ldc/ldc-2026-logo.svg", previewBg: "dark" as const },
    ],
  },
  {
    title: "MMM Sub-brand",
    icon: ImageIcon,
    description: "Moon Miners' Manifesto marks",
    items: [
      { name: "MMM Moon Mark (PNG)", format: "PNG", size: "~1080px", url: "/assets/mmm/MoonLogo_MMM_3811_01_1080px.png", preview: "/assets/mmm/MoonLogo_MMM_3811_01_1080px.png", previewBg: "dark" as const },
      { name: "MMM Masthead Horizontal (PNG)", format: "PNG", size: "400×133", url: "/assets/mmm/MMM_Scape_0914_02_400px.png", preview: "/assets/mmm/MMM_Scape_0914_02_400px.png" },
      { name: "MMM Masthead Vertical (PNG)", format: "PNG", size: "400×233", url: "/assets/mmm/MMM_Vert_0914_02_400px.png", preview: "/assets/mmm/MMM_Vert_0914_02_400px.png" },
    ],
  },
  {
    title: "Brand Data",
    icon: FileJson,
    description: "Machine-readable brand specifications",
    items: [
      { name: "Brand Manifest", format: "JSON", size: "~7 KB", url: "/brand.json" },
      { name: "LLM Guidelines", format: "TXT", size: "~4 KB", url: "/llms.txt" },
      { name: "Design Tokens (W3C)", format: "JSON", size: "~2 KB", url: "/tokens.json" },
    ],
  },
  {
    title: "Color Resources",
    icon: Palette,
    description: "Color palettes for design tools",
    items: [
      { name: "Color Palette (CSS)", format: "CSS", size: "~2 KB", url: "/colors.css" },
      { name: "Color Palette (JSON)", format: "JSON", size: "~1 KB", url: "/colors.json" },
    ],
  },
  {
    title: "Typography",
    icon: Type,
    description: "Font sources",
    items: [
      { name: "Google Fonts Link", format: "URL", size: "External", url: "/fonts", external: true as const },
    ],
  },
  {
    title: "Documentation",
    icon: FileText,
    description: "Long-form brand guide and design specification",
    items: [
      { name: "Brand Guide", format: "MD", size: "~18 KB", url: "/guide" },
      { name: "Design Specification", format: "MD", size: "~21 KB", url: "/spec" },
      { name: "Sitemap", format: "XML", size: "~1 KB", url: "/sitemap.xml" },
      { name: "Robots.txt", format: "TXT", size: "~100 B", url: "/robots.txt" },
    ],
  },
  {
    title: "Short URLs",
    icon: Archive,
    description: "Memorable URLs that redirect to the canonical assets — easy to share, embed, or cite.",
    items: [
      { name: "/guide", format: "URL", size: "Brand Guide MD", url: "/guide" },
      { name: "/spec", format: "URL", size: "Design Spec MD", url: "/spec" },
      { name: "/logo", format: "URL", size: "Logo Bundle ZIP", url: "/logo" },
      { name: "/colors", format: "URL", size: "Colors CSS", url: "/colors" },
      { name: "/tokens", format: "URL", size: "Design Tokens", url: "/tokens" },
      { name: "/fonts", format: "URL", size: "Google Fonts", url: "/fonts", external: true as const },
      { name: "/json", format: "URL", size: "Brand JSON", url: "/json" },
      { name: "/llms", format: "URL", size: "LLM Brief", url: "/llms" },
    ],
  },
];

export default function Downloads() {
  const handleDownload = (url: string, filename?: string, external?: boolean) => {
    if (external) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    if (filename) link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <PageHeader
        title="Downloads"
        description="All brand assets organized by category. Download individual files or use the machine-readable manifest for automated integration."
      />

      <div className="space-y-12">
        {downloadCategories.map((category) => (
          <section key={category.title}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <category.icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl">{category.title}</h2>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => {
                const preview = "preview" in item ? item.preview : undefined;
                const previewBg = "previewBg" in item && item.previewBg === "dark" ? "dark" : "light";
                return (
                  <Card
                    key={item.name}
                    className="overflow-hidden flex flex-col"
                    data-testid={`download-card-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {preview && (
                      <div
                        className={`h-32 flex items-center justify-center p-4 border-b ${
                          previewBg === "dark" ? "bg-[#13294B]" : "bg-white"
                        }`}
                      >
                        <img
                          src={preview}
                          alt={`${item.name} preview`}
                          className="max-h-full max-w-full object-contain"
                          data-testid={`preview-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        />
                      </div>
                    )}
                    <CardContent className="p-4 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm truncate">{item.name}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">{item.format}</Badge>
                            <span className="text-xs text-muted-foreground">{item.size}</span>
                          </div>
                        </div>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() =>
                            handleDownload(item.url, item.url.split("/").pop() || item.name, "external" in item && item.external)
                          }
                          data-testid={`button-download-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          aria-label={`Download ${item.name}`}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16">
        <Card className="bg-muted/30">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="font-heading font-semibold text-xl mb-2">Official assets</h2>
                <p className="text-sm text-muted-foreground max-w-xl">
                  This is an unofficial reference. For official use, membership, or asset requests,
                  visit the Moon Society directly.
                </p>
              </div>
              <Button asChild variant="default" data-testid="button-contact-us">
                <a href="https://www.moonsociety.org" target="_blank" rel="noopener noreferrer">
                  moonsociety.org
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
