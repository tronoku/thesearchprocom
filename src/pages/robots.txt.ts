import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Allow Google Tag Manager
Allow: /gtm.js

Sitemap: https://thesearchpro.com/sitemap.xml
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/maps https://www.googletagmanager.com;
        frame-ancestors 'self';
      `.trim().replace(/\s+/g, ' '),
      'X-Frame-Options': 'SAMEORIGIN',
    },
  });
}; 