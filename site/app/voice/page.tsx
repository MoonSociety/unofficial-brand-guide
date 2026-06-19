import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { voiceTraits, toneKeywords, voiceCoreStatement, writingDos, writingDonts } from "@/lib/brand-data";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice & Tone",
  description:
    "How the Moon Society sounds: credible enthusiasm — authoritative, aspirational, inclusive, and active.",
  alternates: { canonical: "/voice" },
};

export default function Voice() {
  return (
    <div className="p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <PageHeader
        title="Voice & Tone"
        description="The Moon Society's voice conveys credible enthusiasm — technically informed but never exclusionary."
      />

      <section className="mb-12">
        <Card className="bg-muted/30">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg md:text-xl leading-relaxed font-display">
              &ldquo;{voiceCoreStatement}&rdquo;
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {toneKeywords.map((kw) => (
                <Badge key={kw} variant="secondary">{kw}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="font-heading font-semibold text-2xl mb-6">Personality</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {voiceTraits.map((t) => (
            <Card key={t.trait} data-testid={`voice-trait-${t.trait.toLowerCase()}`}>
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-lg text-primary">{t.trait}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading font-semibold text-2xl mb-6">Writing Guidance</h2>
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
                {writingDos.map((rule, index) => (
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
                Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {writingDonts.map((rule, index) => (
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
