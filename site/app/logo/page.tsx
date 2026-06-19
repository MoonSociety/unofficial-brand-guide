import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LogoPreview } from "@/components/logo-preview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { logoUsageRules, logoVariants } from "@/lib/brand-data";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Logo",
  description:
    "The Moon Society logo variants, clear space requirements, minimum sizing, and usage rules.",
  alternates: { canonical: "/logo" },
};

const dos = [
  "Use the primary white wordmark on dark backgrounds (Space Cadet, Near-Black, Black)",
  "Use the black wordmark on light backgrounds",
  "Maintain the minimum clear space around the logo",
  "Reproduce the logo only from the official files",
];

export default function Logo() {
  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <PageHeader
        title="Logo"
        description="The wordmark — 'THE MOON SOCIETY' with a lunar disc behind 'MOON' — is the most recognizable element of the brand. Use it consistently and only from the official files."
      />

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Logo Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logoVariants.map((variant) => (
            <LogoPreview
              key={variant.name}
              name={variant.name}
              description={variant.description}
              imageUrl={variant.url}
              formats={variant.formats}
              downloadUrl={variant.url}
              defaultBackground={variant.background === "dark" ? "dark" : "light"}
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Clear Space</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 w-full">
                <div className="relative inline-block p-10 rounded-lg bg-[#13294B] border-2 border-dashed border-[#FFCD00]/40">
                  <div className="absolute inset-0 m-5 border border-[#FFCD00]/40 rounded" />
                  <img
                    src="/assets/logos/MoonSoc_TransWhite_Print.png"
                    alt="Moon Society logo with clear space"
                    className="h-20 w-auto relative z-10"
                    data-testid="img-logo-clearspace"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="font-heading font-semibold text-lg">Minimum Clear Space</h3>
                <p className="text-muted-foreground">{logoUsageRules.clearSpace}</p>
                <Badge variant="secondary">Equal spacing on all sides</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Minimum Size</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex items-end gap-6">
                <div className="text-center">
                  <div className="bg-[#13294B] rounded p-3 mb-2 flex items-center justify-center">
                    <img
                      src="/assets/logos/MoonSoc_TransWhite_Print.png"
                      alt="Wordmark at minimum digital size"
                      style={{ width: "200px" }}
                      className="h-auto"
                      data-testid="img-logo-size-min"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">200px — minimum digital width</span>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="font-heading font-semibold text-lg">Size Requirements</h3>
                <p className="text-muted-foreground">{logoUsageRules.minimumSize}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="font-heading font-semibold text-2xl mb-6">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-500/20 bg-green-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Check className="h-5 w-5" />
                Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dos.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-500/20 bg-red-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <X className="h-5 w-5" />
                Don&apos;t
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {logoUsageRules.prohibitions.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
