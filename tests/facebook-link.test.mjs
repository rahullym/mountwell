// Renders real pages with the Astro dev server and checks every Facebook link on them.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const OFFICIAL = 'https://www.facebook.com/mountbell';
const PORT = 4399;
const root = new URL('..', import.meta.url).pathname;
// Home, contact page, and a few inner pages (header, mobile drawer and footer are on all of them).
const paths = ['/', '/contact-us/', '/about-us/', '/overseas-jobs/', '/tools/'];
let server;
const pages = {};

before(async () => {
  server = spawn('npx', ['astro', 'dev', '--port', String(PORT)], { cwd: root, env: { ...process.env, DATABASE_URL: '' }, stdio: 'ignore', detached: true });
  for (let i = 0; i < 120; i++) {
    try { if ((await fetch(`http://localhost:${PORT}/`)).ok) break; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  for (const p of paths) {
    const res = await fetch(`http://localhost:${PORT}${p}`);
    pages[p] = { status: res.status, html: await res.text() };
  }
});
after(() => process.kill(-server.pid));

const anchors = (html) => [...html.matchAll(/<a\b[^>]*facebook\.com[^>]*>/gi)].map((m) => m[0]);

test('every Facebook link on rendered pages is the official page and opens in a new tab', () => {
  for (const p of paths) {
    assert.equal(pages[p].status, 200, p);
    const links = anchors(pages[p].html);
    assert.ok(links.length >= 1, `${p}: no Facebook link found`);
    for (const a of links) {
      assert.match(a, new RegExp(`href="${OFFICIAL}"`), `${p}: ${a}`);
      assert.match(a, /target="_blank"/, `${p}: ${a}`);
      assert.match(a, /rel="noopener noreferrer"/, `${p}: ${a}`);
    }
  }
});

test('no other Facebook address is left in rendered pages or source', () => {
  const src = join(root, 'src');
  const sources = readdirSync(src, { recursive: true }).filter((f) => /\.(astro|ts|mjs|js|md|json)$/.test(f)).map((f) => [join(src, f), readFileSync(join(src, f), 'utf8')]);
  const rendered = Object.entries(pages).map(([p, { html }]) => [p, html]);
  for (const [where, text] of [...rendered, ...sources]) {
    for (const [url] of text.matchAll(/https?:\/\/(?:[\w-]+\.)*(?:facebook\.com|fb\.com|fb\.me)[^"'\s<>)\\]*/gi)) {
      assert.equal(url, OFFICIAL, `${where}: ${url}`);
    }
  }
});
