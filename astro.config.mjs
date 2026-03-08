import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jraftcreative.github.io',
  base: '/Janice-Website',
  output: 'static',
  integrations: [sitemap()],
});
