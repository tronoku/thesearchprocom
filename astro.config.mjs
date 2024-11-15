import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thesearchpro.com',
  base: '',
  integrations: [tailwind()],
  vite: {
    build: {
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'material-icons': ['@material-icons/font']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@material-icons/font']
    }
  },
  headers: {
    '/*.{js,css}': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ],
    '/*.{jpg,jpeg,png,gif,webp}': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ],
    '/images/heroes/*': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ]
  }
});
