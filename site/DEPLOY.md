# Deploy — Moon Society Brand Guide site

Production target: **Azure Static Web Apps**, custom domain **branding.moonsociety.org**.

> **Tenant note** — these resources belong to **The Moon Society**, not a personal
> Azure tenant. Make sure `az login --tenant <moon-society-tenant>` is the active
> context before running any commands here. Verify with `az account show` and check
> the `tenantId` matches the Moon Society tenant.

## Architecture

- Next.js 15 App Router, React 19, Tailwind v3, shadcn/ui, `next-themes` (dark-mode first).
- Pure static site: `output: 'export'` → every route prerenders to `site/out/` at build time. No Azure Functions.
- Brand assets are synced from the **repo root** into `site/public/` by `../scripts/sync-assets.mjs`, which runs automatically via the `prebuild` npm script.
- SWA routing config is `site/public/staticwebapp.config.json` (Next copies `public/` → `out/`, so it lands at the artifact root).

## One-time setup

```bash
# 1. Provision the SWA resource (Moon Society tenant)
az staticwebapp create \
  --name moonsoc-brand-guide \
  --resource-group moonsoc-web-rg \
  --location westus2 \
  --sku Free

# 2. Get the deployment token
az staticwebapp secrets list \
  --name moonsoc-brand-guide \
  --resource-group moonsoc-web-rg \
  --query 'properties.apiKey' -o tsv
```

Then in the GitHub repo (`MoonSociety/unofficial-brand-guide`):

- **Settings → Secrets and variables → Actions** — add `AZURE_STATIC_WEB_APPS_API_TOKEN` (paste the token from step 2). The workflow `.github/workflows/azure-static-web-apps.yml` references this secret.
- **Custom domain** in the SWA resource — add `branding.moonsociety.org` and configure the suggested CNAME at DNS (`branding` → `<swa-default-host>.azurestaticapps.net`).

Pushes to `master` then build and deploy automatically; PRs get staging environments.

## Local development

```bash
cd site
npm install
npm run dev          # next dev on http://localhost:3000
```

`npm run dev` does **not** run `prebuild`, so run the sync once first (or any time
root brand files change) so `public/` is populated:

```bash
npm run sync         # = node ../scripts/sync-assets.mjs
```

For full SWA-routing parity (short URLs, headers, MIME types):

```bash
npm install -g @azure/static-web-apps-cli
npm run build
swa start out --swa-config-location out   # http://localhost:4280 with SWA rules
```

## Notes

- Short URLs (`/guide`, `/spec`, `/logo`, `/colors`, `/tokens`, `/json`, `/llms`, `/fonts`) are defined in `site/public/staticwebapp.config.json` and only fire under SWA (prod or `swa start`), not under bare `next dev`.
- A full favicon family and an Open Graph image can be added later; the site currently ships a single SVG favicon and uses the white wordmark for OG.
