import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://branding.moonsociety.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/logo", "/colors", "/typography", "/voice", "/ldc", "/mmm", "/downloads"];
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
