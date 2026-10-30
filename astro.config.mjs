import { writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { moved, htaccess } from './redirects.mjs';

// Writes dist/.htaccess so Apache/LiteSpeed hosts (Hostinger) send real 301s for the old URLs.
const apacheRedirects = {
  name: 'apache-redirects',
  hooks: {
    'astro:build:done': async ({ dir }) => writeFile(new URL('.htaccess', dir), htaccess()),
  },
};

export default defineConfig({
  site: 'https://mountbell.com',
  // BASE_PATH is only set by the GitHub Pages preview build
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  // Fallback redirect pages for hosts that ignore .htaccess
  redirects: Object.fromEntries(Object.entries(moved).map(([from, to]) => [from.replace(/\/$/, ''), to])),
  // Pages marked noindex stay out of the sitemap. Remove /about-us/team/ once adviser profiles are added.
  integrations: [sitemap({ filter: (page) => !/\/(image-credits|about-us\/team)\/$/.test(page) }), apacheRedirects],
});
