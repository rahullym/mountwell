// Serves photos uploaded in the admin: /media/12-wide.webp or /media/12-mid.webp.
// A photo never changes once uploaded (a new upload gets a new number), so browsers and
// Vercel's edge can keep it for a year and the database is rarely touched.
import type { APIRoute } from 'astro';
import { db } from '../../lib/db';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { id, size } = params;
  const sql = db();
  if (!sql || !/^\d{1,9}$/.test(id ?? '') || (size !== 'wide' && size !== 'mid')) return new Response(null, { status: 404 });
  const [row] = await sql<{ data: Buffer }[]>`select ${sql(size)} as data from media where id = ${Number(id)}`;
  if (!row) return new Response(null, { status: 404, headers: { 'Cache-Control': 'no-store' } });
  return new Response(new Uint8Array(row.data), {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'CDN-Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
