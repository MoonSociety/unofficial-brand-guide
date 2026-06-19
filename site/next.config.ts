import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Static export — every route prerenders to HTML in out/, no Node runtime
  // needed at deploy time. Azure SWA serves the out/ directory directly.
  output: "export",
  reactStrictMode: true,
  // Pin the workspace root so Next.js doesn't pick up an unrelated lockfile
  // higher in the tree (this site lives in a subdirectory of the brand archive).
  outputFileTracingRoot: __dirname,
  // Required when output: 'export' (Next image optimizer needs a runtime).
  images: { unoptimized: true },
  // Add a trailing slash so static hosts (including SWA) resolve /colors/
  // and /colors identically.
  trailingSlash: true,
};

// NOTE: short-URL redirects are configured in staticwebapp.config.json — they
// run at the SWA edge in production. With output: 'export', Next.js
// redirects() / rewrites() are not honored at runtime (there is no runtime).
// To preview redirects locally, use `swa start out --swa-config-location .`
// after a build instead of `next dev`.

export default nextConfig;
