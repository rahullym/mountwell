// Every /admin/ page except the login page needs a signed-in staff member.
import { defineMiddleware } from 'astro:middleware';
import { currentUser } from './lib/auth';
import { db } from './lib/db';

export const onRequest = defineMiddleware(async (ctx, next) => {
  const path = ctx.url.pathname;
  if (!path.startsWith('/admin') || ctx.isPrerendered) return next();
  if (!db()) return new Response('The CMS database is not connected. Add the Neon database in Vercel → Storage, then redeploy.', { status: 503 });
  ctx.locals.user = await currentUser(ctx.cookies);
  if (!ctx.locals.user && path !== '/admin/login/') {
    return ctx.redirect(`/admin/login/?next=${encodeURIComponent(path + ctx.url.search)}`);
  }
  return next();
});
