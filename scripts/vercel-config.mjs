// Writes vercel.json from redirects.mjs. Run `npm run vercel-config` after editing redirects.mjs.
import { writeFile } from 'node:fs/promises';
import { moved, gone } from '../redirects.mjs';

const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: 'astro',
  trailingSlash: true,
  redirects: Object.entries(moved).map(([source, destination]) => ({ source, destination, statusCode: 301 })),
  headers: [
    // Keep *.vercel.app copies out of Google; only mountbell.com should be indexed.
    { source: '/(.*)', has: [{ type: 'host', value: '(?<host>.*)\\.vercel\\.app' }], headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] },
  ],
};
await writeFile(new URL('../vercel.json', import.meta.url), JSON.stringify(config, null, 2) + '\n');
console.log(`vercel.json: ${config.redirects.length} redirects (${gone.length} retired URLs fall through to 404)`);
