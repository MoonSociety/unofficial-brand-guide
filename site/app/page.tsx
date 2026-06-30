import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { organizationInfo } from "@/lib/brand-data";
import { Image as ImageIcon, Palette, Type, MessageSquare, Rocket, Download, FileJson } from "lucide-react";

const quickLinks = [
  { title: "Logo", description: "Logo variants, clear space, and download options", icon: ImageIcon, href: "/logo", color: "text-cyan-400" },
  { title: "Colors", description: "Full palette with one-click copy and WCAG contrast", icon: Palette, href: "/colors", color: "text-[#FFCD00]" },
  { title: "Typography", description: "League Spartan, Noto Sans, Spectral, Inconsolata", icon: Type, href: "/typography", color: "text-emerald-400" },
  { title: "Voice & Tone", description: "Credible enthusiasm — how we sound", icon: MessageSquare, href: "/voice", color: "text-sky-400" },
  { title: "LDC 2026", description: "Lunar Development Conference sub-brand", icon: Rocket, href: "/ldc", color: "text-[#FFCD00]" },
  { title: "Downloads", description: "All brand assets organized for easy access", icon: Download, href: "/downloads", color: "text-rose-400" },
];

export default function Home() {
  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-xl rounded-2xl bg-[#13294B] border border-white/10 px-8 py-10 flex items-center justify-center">
            <img
              src="/assets/logos/MoonSoc_TransWhite_Print.png"
              alt="The Moon Society logo"
              className="max-h-24 w-auto object-contain"
              data-testid="img-logo-hero"
            />
          </div>
        </div>
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          data-testid="text-org-name"
        >
          {organizationInfo.name}
        </h1>
        <p
          className="mt-4 text-xl md:text-2xl text-muted-foreground font-display"
          data-testid="text-tagline"
        >
          {organizationInfo.tagline}
        </p>
        <div className="mt-6 max-w-2xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-mission">
            {organizationInfo.mission}
          </p>
        </div>
      </div>

      <PageHeader
        title="Brand Guidelines"
        description="A community-maintained reference for the Moon Society visual identity — colors, typography, logos, voice, and the Lunar Development Conference sub-brand. Use it to keep Moon Society materials consistent and on-brand."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="block group"
            data-testid={`card-link-${link.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <Card className="h-full hover-elevate transition-all duration-200 overflow-visible">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${link.color}`}>
                    <link.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-heading text-lg">{link.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{link.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-muted/40 border">
        <h2 className="font-heading font-semibold text-lg mb-3">Machine-Readable Resources</h2>
        <p className="text-sm text-muted-foreground mb-4">
          This brand guide is optimized for both human visitors and machine/LLM consumption.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/brand.json"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border text-sm font-medium hover-elevate transition-colors"
            data-testid="link-download-brand-json"
          >
            <FileJson className="h-4 w-4" />
            brand.json
          </a>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border text-sm font-medium hover-elevate transition-colors"
            data-testid="link-download-llms-txt"
          >
            <FileJson className="h-4 w-4" />
            llms.txt
          </a>
          <a
            href="/colors.css"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border text-sm font-medium hover-elevate transition-colors"
            data-testid="link-download-colors-css"
          >
            <Palette className="h-4 w-4" />
            colors.css
          </a>
        </div>
      </div>

      <p className="mt-10 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
        Unofficial, community-maintained reference. The Moon Society and the Moon Society logo are
        trademarks of The Moon Society, Incorporated.
      </p>
    </div>
  );
}
