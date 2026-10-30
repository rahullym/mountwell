// Blog posts are added in the CMS, so they get their own sitemap, refreshed after each save.
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/content';
import { site } from '../data/site';

export const prerender = false;

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const urls = [`<url><loc>${site.url}/blog/</loc></url>`, ...posts.map((p) =>
    `<url><loc>${site.url}/blog/${p.slug}/</loc><lastmod>${new Date(p.updated_at).toISOString()}</lastmod></url>`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
