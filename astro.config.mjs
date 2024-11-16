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
      assetsInlineLimit: 10240,
      cssCodeSplit: false,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          manualChunks(id) {
            if (id.includes('node_modules') && id.includes('@material-icons')) {
              return 'material-icons';
            }
          },
          chunkFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'vendor') {
              return 'styles/[name].[hash].js';
            }
            return 'styles/[name].[hash].js';
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.js')) {
              return 'styles/[name].[hash].js';
            }
            return 'assets/[name].[hash][extname]';
          }
        }
      },
      target: 'es2018',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    ssr: {
      noExternal: ['@material-icons/font']
    }
  }
});
