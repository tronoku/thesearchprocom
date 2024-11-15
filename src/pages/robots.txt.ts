import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  
  const robotsTxt = `
# www.robotstxt.org

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Directories
Disallow: /api/
Disallow: /admin/
Disallow: /private/

# Files
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Query strings
Disallow: /*?*
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}; 