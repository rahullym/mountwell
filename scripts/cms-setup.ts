// Creates the CMS tables and copies the current reviews, FAQs and home update cards from src/data/site.ts into them.
// Safe to run again: tables are only created if missing, and content is only copied into empty tables.
// Usage: DATABASE_URL=... npm run cms:setup
import postgres from 'postgres';
import { schema } from '../src/lib/schema.ts';
import { reviews, faqs, updates } from '../src/data/site.ts';

const url = process.env.DATABASE_URL;
if (!url) throw new Error('Set DATABASE_URL first (run `vercel env pull .env.local`, then `npm run cms:setup`).');
const sql = postgres(url, { max: 1, prepare: false, onnotice: () => {} });

for (const statement of schema) await sql.unsafe(statement);
console.log('Tables ready.');

const [{ n: reviewCount }] = await sql`select count(*)::int as n from reviews`;
if (reviewCount === 0) {
  for (const [i, r] of reviews.entries()) await sql`insert into reviews (name, text, sort) values (${r.name}, ${r.text}, ${(i + 1) * 10})`;
  console.log(`Copied ${reviews.length} reviews.`);
}
const [{ n: faqCount }] = await sql`select count(*)::int as n from faqs`;
if (faqCount === 0) {
  for (const [i, f] of faqs.entries()) await sql`insert into faqs (q, a, href, link, sort) values (${f.q}, ${f.a}, ${f.href ?? ''}, ${f.link ?? ''}, ${(i + 1) * 10})`;
  console.log(`Copied ${faqs.length} FAQs.`);
}
const [{ n: cardCount }] = await sql`select count(*)::int as n from cards`;
if (cardCount === 0) {
  for (const [i, u] of updates.entries()) await sql`insert into cards (tag, title, excerpt, img, href, sort) values (${u.tag}, ${u.title}, ${u.excerpt}, ${u.img}, ${u.href}, ${(i + 1) * 10})`;
  console.log(`Copied ${updates.length} home update cards.`);
}
await sql.end();
