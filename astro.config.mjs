import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thesearchpro.com',
  base: '',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'styles',
    format: 'directory'
  },
  vite: {
    build: {
      assetsInlineLimit: 4096,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: 'styles/[name][extname]',
          manualChunks: {
            'material-icons': ['@material-icons/font']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@material-icons/font']
    }
  }
});
