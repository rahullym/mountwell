// Renders the homepage with the Astro dev server and checks the Google Search Console verification tag is in <head>.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

const TAG = '<meta name="google-site-verification" content="PqeLgs8FmBMAqCGgxd_wlRKi8j6SSmJPMkTBpxvS--M">';
const PORT = 4398;
const root = new URL('..', import.meta.url).pathname;
let server;
let html;

before(async () => {
  server = spawn('npx', ['astro', 'dev', '--port', String(PORT)], { cwd: root, env: { ...process.env, DATABASE_URL: '' }, stdio: 'ignore', detached: true });
  for (let i = 0; i < 120; i++) {
    try { if ((await fetch(`http://localhost:${PORT}/`)).ok) break; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  html = await (await fetch(`http://localhost:${PORT}/`)).text();
});
after(() => process.kill(-server.pid));

test('homepage server HTML has the Google verification meta tag inside <head>, once', () => {
  const head = html.slice(html.indexOf('<head>'), html.indexOf('</head>'));
  assert.ok(head.includes(TAG), 'tag not found in <head>');
  assert.equal(html.split('google-site-verification').length - 1, 1);
  assert.ok(html.indexOf(TAG) < html.indexOf('<body'));
});
