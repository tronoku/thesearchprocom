import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tronoku.github.io',
  base: '/thesearchprocom',
  integrations: [tailwind()],
  output: 'static',
});
