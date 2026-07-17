import type { APIRoute } from 'astro';

// robots.txt is generated at build time so the sitemap URL always matches
// the canonical `site` value in astro.config.mjs — one less thing to keep
// in sync when the domain changes.
export const GET: APIRoute = ({ site }) => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', site)}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
