import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thesearchpro.com',
  base: '',
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'always',
    inlineScripts: true,
    assets: 'styles',
    format: 'directory'
  },
  vite: {
    build: {
      assetsInlineLimit: 8192,
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('@material-icons')) {
              return 'material-icons';
            }
          }
        }
      }
    },
    ssr: {
      noExternal: ['@material-icons/font']
    }
  }
});
