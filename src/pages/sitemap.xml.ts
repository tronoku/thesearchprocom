import type { APIRoute } from 'astro';
import { generateSitemap } from '../utils/generateSitemap';

export const GET: APIRoute = async () => {
  const site = import.meta.env.PUBLIC_SITE_URL || 'https://thesearchpro.com';
  const sitemap = generateSitemap(site);
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 