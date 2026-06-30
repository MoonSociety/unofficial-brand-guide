import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TypographySpecimen } from "@/components/typography-specimen";
import { Card, CardContent } from "@/components/ui/card";
import { typographySpecs } from "@/lib/brand-data";

export const metadata: Metadata = {
  title: "Typography",
  description:
    "The Moon Society type system: League Spartan (display + headings), Noto Sans (body), Spectral (serif), and Inconsolata (monospace).",
  alternates: { canonical: "/typography" },
};

export default function Typography() {
  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <PageHeader
        title="Typography"
        description="Five typeface roles, each with a distinct purpose. They should not be used interchangeably."
      />

      <Card className="mb-10 bg-muted/30">
        <CardContent className="p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Display — League Spartan:</strong> hero headlines, 32px and above (weight 800)</li>
            <li><strong className="text-foreground">Headings — League Spartan:</strong> H1–H6, nav, buttons</li>
            <li><strong className="text-foreground">Body — Noto Sans:</strong> paragraphs, UI, captions</li>
            <li><strong className="text-foreground">Serif — Spectral:</strong> editorial, print, pull quotes</li>
            <li><strong className="text-foreground">Monospace — Inconsolata:</strong> code, technical values</li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {typographySpecs.map((spec) => (
          <TypographySpecimen key={spec.name} spec={spec} />
        ))}
      </div>
    </div>
  );
}
