type Route = {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

const pages: Route[] = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.7, changefreq: 'monthly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/services/seo', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/ppc', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/web-design', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/social-media-marketing', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/web-analytics', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/brand-marketing', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/local-search', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/maps-optimization', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/link-building', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/email-design', priority: 0.8, changefreq: 'monthly' }
];

export function generateSitemap(domain: string): string {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
} 