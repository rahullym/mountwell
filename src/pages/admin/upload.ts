// Photo upload from the admin. The browser shrinks big photos before sending (Vercel caps request
// bodies at 4.5 MB); here we fix the rotation, resize to two WebP sizes and store both in Neon.
import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { requireDb } from '../../lib/db';

export const prerender = false;

const MAX_BYTES = 4_400_000;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) return json({ error: 'You are signed out. Sign in again, then retry.' }, 401);

  let file: FormDataEntryValue | null;
  try {
    file = (await request.formData()).get('photo');
  } catch {
    return json({ error: 'That photo is too large. Try a smaller one.' }, 413);
  }
  if (!(file instanceof File) || file.size === 0) return json({ error: 'Choose a photo first.' }, 400);
  if (file.size > MAX_BYTES) return json({ error: 'That photo is too large. Try a smaller one.' }, 413);

  let wide: Buffer, mid: Buffer, width: number, height: number;
  try {
    const input = Buffer.from(await file.arrayBuffer());
    const base = () => sharp(input, { limitInputPixels: 50_000_000 }).rotate();
    const out = await base().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toBuffer({ resolveWithObject: true });
    wide = out.data;
    width = out.info.width;
    height = out.info.height;
    mid = await base().resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
  } catch {
    return json({ error: 'That file could not be read as a photo. Use a JPG or PNG.' }, 415);
  }

  const name = file.name.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ').slice(0, 120);
  const [row] = await requireDb()<{ id: number }[]>`
    insert into media (name, width, height, wide, mid, bytes, uploaded_by)
    values (${name}, ${width}, ${height}, ${wide}, ${mid}, ${wide.length + mid.length}, ${locals.user.id})
    returning id`;
  const value = `/media/${row.id}`;
  return json({ id: row.id, value, wide: `${value}-wide.webp`, mid: `${value}-mid.webp`, width, height });
};
