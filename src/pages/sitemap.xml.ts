import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.SITE_URL || 'https://thesearchpro.com';

// List of all service pages
const servicePages = [
  'seo',
  'ppc',
  'web-design',
  'local-search',
  'link-building',
  'email-design',
  'brand-marketing',
  'maps-optimization',
  'web-analytics',
  'social-media-marketing'
];

function generateSitemapItem(path: string, priority: number = 0.5, changefreq: string = 'monthly') {
  return `
    <url>
      <loc>${SITE_URL}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
}

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${generateSitemapItem('/', 1.0, 'weekly')}
      ${generateSitemapItem('/about/', 0.8, 'monthly')}
      ${generateSitemapItem('/contact/', 0.8, 'monthly')}
      ${generateSitemapItem('/services/', 0.9, 'weekly')}
      ${servicePages.map(service => 
        generateSitemapItem(`/services/${service}/`, 0.7, 'monthly')
      ).join('')}
      ${generateSitemapItem('/privacy/', 0.3, 'yearly')}
      ${generateSitemapItem('/terms/', 0.3, 'yearly')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}; 