// 1. Every /admin/ page except the login page needs a signed-in staff member.
// 2. Public pages get the site details saved on /admin/settings/ swapped in (see lib/settings.ts).
import { defineMiddleware } from 'astro:middleware';
import { currentUser } from './lib/auth';
import { db } from './lib/db';
import { savedSettings, replacements, applyReplacements } from './lib/settings';

export const onRequest = defineMiddleware(async (ctx, next) => {
  const path = ctx.url.pathname;
  if (path.startsWith('/admin/') || path === '/admin') {
    if (ctx.isPrerendered) return next();
    if (!db()) return new Response('The CMS database is not connected. Add the Neon database in Vercel → Storage, then redeploy.', { status: 503 });
    ctx.locals.user = await currentUser(ctx.cookies);
    // The upload endpoint answers in JSON, so it reports "signed out" itself instead of redirecting.
    if (!ctx.locals.user && path !== '/admin/login/' && path !== '/admin/upload/') {
      return ctx.redirect(`/admin/login/?next=${encodeURIComponent(path + ctx.url.search)}`);
    }
    return next();
  }

  if (path.startsWith('/media/') || path.startsWith('/api/') || !db()) return next();
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;
  let pairs: [string, string][];
  try {
    pairs = replacements(await savedSettings());
  } catch (err) {
    console.error('[cms] could not read site details, using built-in ones', err);
    return response;
  }
  if (!pairs.length) return response;
  const html = applyReplacements(await response.text(), pairs);
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(html, { status: response.status, statusText: response.statusText, headers });
});
