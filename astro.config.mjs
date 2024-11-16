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
          manualChunks: {
            'vendor': [/node_modules/],
            'material-icons': ['@material-icons/font']
          }
        }
      },
      target: 'es2018'
    },
    ssr: {
      noExternal: ['@material-icons/font']
    }
  }
});
