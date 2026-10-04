import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mountbell.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
