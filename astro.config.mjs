import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mountbell.com',
  // BASE_PATH is only set by the GitHub Pages preview build
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  // Pages marked noindex stay out of the sitemap. Remove /about/team/ once adviser profiles are added.
  integrations: [sitemap({ filter: (page) => !/\/(image-credits|about\/team)\/$/.test(page) })],
});
