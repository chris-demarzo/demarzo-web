// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// CANONICAL URL BOUNDARY
// This is the only place the production URL is defined. Canonical links,
// Open Graph URLs, the sitemap, and robots.txt all derive from it.
// Update it once when a custom domain is purchased.
export default defineConfig({
  site: 'https://demarzo-web.pages.dev',
  integrations: [sitemap()],
  build: {
    // Keep all CSS in external files so the strict Content-Security-Policy
    // in public/_headers (style-src 'self') is never violated by inlining.
    inlineStylesheets: 'never',
  },
});
