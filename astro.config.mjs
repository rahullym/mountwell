import { readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { pages } from './src/data/pages/index.ts';
import { moved, htaccess } from './redirects.mjs';

// Writes dist/.htaccess so Apache/LiteSpeed hosts (Hostinger) send real 301s for the old URLs.
const apacheRedirects = {
  name: 'apache-redirects',
  hooks: {
    'astro:build:done': async ({ dir }) => writeFile(new URL('.htaccess', dir), htaccess()),
  },
};

// Admin pages and /api/ routes must never be cached. The adapter writes their routes without the trailing slash this
// site uses (^/admin/edit$), so /admin/edit/ would fall through to the cached catch-all route.
// This rewrites them to accept the slash. It fails the build if the routes are not where expected.
const adminRoutesFix = {
  name: 'admin-routes-fix',
  hooks: {
    'astro:build:done': async () => {
      const file = new URL('./.vercel/output/config.json', import.meta.url);
      const config = JSON.parse(await readFile(file, 'utf8'));
      let fixed = 0;
      let api = 0;
      for (const r of config.routes) {
        if (typeof r.src !== 'string' || r.dest !== '_render') continue;
        if (/^\^\/admin(\/[a-z]+)?\$$/.test(r.src)) fixed++;
        else if (/^\^\/api\/[a-z]+\$$/.test(r.src)) api++;
        else continue;
        r.src = r.src.replace(/\$$/, '/?$');
      }
      if (fixed < 5) throw new Error(`admin-routes-fix: expected 5 admin routes in .vercel/output/config.json, found ${fixed}`);
      if (api < 1) throw new Error('admin-routes-fix: expected the /api/lead route in .vercel/output/config.json');
      await writeFile(file, JSON.stringify(config, null, '\t'));
    },
  },
};

// Pages rendered on request are cached on Vercel's edge. With ISR_BYPASS_TOKEN set, the CMS refreshes
// a page the moment it is saved; without it, cached pages refresh at most a minute later.
const bypassToken = process.env.ISR_BYPASS_TOKEN;
const isr = {
  exclude: [/^\/admin(\/.*)?$/, /^\/api(\/.*)?$/],
  ...(bypassToken ? { bypassToken, expiration: false } : { expiration: 60 }),
};

export default defineConfig({
  adapter: vercel({ isr }),
  site: 'https://mountbell.com',
  // BASE_PATH is only set by the GitHub Pages preview build
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  // Fallback redirect pages for hosts that ignore .htaccess
  redirects: Object.fromEntries(Object.entries(moved).map(([from, to]) => [from.replace(/\/$/, ''), to])),
  // Pages marked noindex stay out of the sitemap. Remove /about-us/team/ once adviser profiles are added.
  // Pages rendered on request are not found by the sitemap scan, so they are listed here. Blog posts are in /sitemap-blog.xml.
  integrations: [sitemap({
    customPages: ['/', ...pages.filter((p) => !p.noindex).map((p) => p.path)].map((p) => `https://mountbell.com${p}`),
    filter: (page) => !/\/(image-credits|about-us\/team)\/$/.test(page),
  }), apacheRedirects, adminRoutesFix],
});
