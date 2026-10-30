// Content that staff edit in /admin/. Each getter falls back to the built-in content in
// src/data/site.ts if the database is not connected or a query fails, so a public page never breaks.
import { db } from './db';
import { reviews as staticReviews, faqs as staticFaqs, updates as staticUpdates } from '../data/site';

export interface Review { name: string; role: string; text: string }
export interface Faq { q: string; a: string; href?: string; link?: string }
export interface Post { slug: string; title: string; tag: string; img: string; excerpt: string; body: string; published_at: Date; updated_at: Date }
export interface Opening { id: number; title: string; category: string; country: string; location: string; salary: string; summary: string; requirements: string; created_at: Date }
export interface UpdateCard { tag: string; img: string; title: string; excerpt: string; href: string }

export const openingCategories: [string, string][] = [
  ['nursing', 'Nursing'],
  ['healthcare', 'Healthcare and allied health'],
  ['trades', 'Skilled trades and technical'],
  ['drivers', 'Drivers, delivery and general'],
  ['it-teachers', 'IT and teaching'],
  ['other', 'Other'],
];

async function safe<T>(label: string, query: () => Promise<T>, fallback: T): Promise<T> {
  if (!db()) return fallback;
  try {
    return await query();
  } catch (err) {
    console.error(`[cms] ${label} failed, using built-in content`, err);
    return fallback;
  }
}

export function getReviews(): Promise<Review[]> {
  return safe('reviews', async () => {
    const rows = await db()!<Review[]>`select name, role, text from reviews where published order by sort, id`;
    return rows.length ? [...rows] : fallbackReviews();
  }, fallbackReviews());
}
const fallbackReviews = () => staticReviews.map((r) => ({ ...r, role: 'Mountbell client' }));

export function getFaqs(): Promise<Faq[]> {
  return safe('faqs', async () => {
    const rows = await db()!<{ q: string; a: string; href: string; link: string }[]>`select q, a, href, link from faqs where published order by sort, id`;
    return rows.length ? rows.map((f) => ({ q: f.q, a: f.a, href: f.href || undefined, link: f.link || undefined })) : staticFaqs;
  }, staticFaqs);
}

export function getPosts(limit = 200): Promise<Post[]> {
  return safe('posts', async () => [...await db()!<Post[]>`
    select slug, title, tag, img, excerpt, body, published_at, updated_at from posts
    where published and published_at <= now() order by published_at desc limit ${limit}`], []);
}

export function getPost(slug: string): Promise<Post | null> {
  return safe('post', async () => {
    const [row] = await db()!<Post[]>`
      select slug, title, tag, img, excerpt, body, published_at, updated_at from posts
      where slug = ${slug} and published and published_at <= now()`;
    return row ?? null;
  }, null);
}

export function getOpenings(category?: 'nursing' | 'jobs'): Promise<Opening[]> {
  return safe('openings', async () => {
    const sql = db()!;
    const filter = category === 'nursing' ? sql`and category = 'nursing'` : category === 'jobs' ? sql`and category <> 'nursing'` : sql``;
    return [...await sql<Opening[]>`
      select id, title, category, country, location, salary, summary, requirements, created_at from openings
      where status = 'open' ${filter} order by created_at desc`];
  }, []);
}

// Home page "Latest updates": newest blog posts first, topped up with the built-in guides.
export async function getUpdateCards(): Promise<UpdateCard[]> {
  const posts = await getPosts(3);
  const cards = posts.map((p) => ({ tag: p.tag, img: p.img, title: p.title, excerpt: p.excerpt, href: `/blog/${p.slug}/` }));
  return [...cards, ...staticUpdates].slice(0, 3);
}

export const formatDate = (d: Date) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
