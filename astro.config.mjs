import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thesearchpro.com',
  base: '',
  integrations: [tailwind()],
  server: {
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "X-XSS-Protection": "1; mode=block",
      "Content-Security-Policy": `
        default-src 'self';
        img-src 'self' data: https: http:;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
      `.replace(/\s+/g, ' ').trim()
    }
  }
});
