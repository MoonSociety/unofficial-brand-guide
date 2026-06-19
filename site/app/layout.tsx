import type { Metadata, Viewport } from "next";
import { Syne, League_Spartan, Noto_Sans, Inconsolata } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { organizationInfo } from "@/lib/brand-data";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inconsolata",
  display: "swap",
});

const SITE_URL = "https://branding.moonsociety.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${organizationInfo.name} — Brand Guide`,
    template: `%s — ${organizationInfo.name} Brand Guide`,
  },
  description: organizationInfo.mission,
  applicationName: "Moon Society Brand Guide",
  authors: [{ name: organizationInfo.name, url: organizationInfo.website }],
  keywords: [
    "Moon Society",
    "brand guidelines",
    "lunar settlement",
    "Lunar Development Conference",
    "LDC",
    "brand identity",
    "style guide",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${organizationInfo.name} Brand Guide`,
    title: `${organizationInfo.name} — Brand Guide`,
    description: organizationInfo.mission,
    url: SITE_URL,
    images: [{ url: "/assets/logos/MoonSoc_TransWhite_Print.png", alt: `${organizationInfo.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${organizationInfo.name} — Brand Guide`,
    description: organizationInfo.mission,
    images: ["/assets/logos/MoonSoc_TransWhite_Print.png"],
  },
  robots: { index: true, follow: true },
  other: {
    "trademark-notice":
      "The Moon Society and the Moon Society logo are trademarks of The Moon Society, Incorporated. This is an unofficial, community-maintained reference.",
  },
};

export const viewport: Viewport = {
  themeColor: "#13294B",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: organizationInfo.name,
  url: organizationInfo.website,
  foundingDate: String(organizationInfo.founded),
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/logos/MoonSoc_TransWhite_Print.png`,
  },
  description: organizationInfo.mission,
  sameAs: [organizationInfo.website, "https://ldc.moonsociety.org"],
  brand: {
    "@type": "Brand",
    name: organizationInfo.name,
    slogan: organizationInfo.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${leagueSpartan.variable} ${notoSans.variable} ${inconsolata.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="moonsoc-brand-theme"
        >
          <TooltipProvider>
            <SidebarProvider
              style={{ "--sidebar-width": "16rem", "--sidebar-width-icon": "4rem" } as React.CSSProperties}
            >
              <div className="flex min-h-screen w-full">
                <AppSidebar />
                <SidebarInset className="flex flex-col flex-1">
                  <header className="flex items-center justify-between gap-4 p-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                    <div className="flex items-center gap-2">
                      <SidebarTrigger data-testid="button-sidebar-toggle" />
                      <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
                        The Moon Society Brand Guide
                      </span>
                    </div>
                    <ThemeToggle />
                  </header>
                  <main className="flex-1 overflow-auto">{children}</main>
                </SidebarInset>
              </div>
            </SidebarProvider>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
