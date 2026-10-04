// Builds the web images in public/img from the originals in assets-src.
// Usage: node scripts/images.mjs
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { basename, extname } from 'node:path';

const attention = sharp.strategy.attention;
// Where the subject sits in panoramas that the automatic crop gets wrong.
const position = { australia: 'left', canada: 'centre' };

// Tall, narrow slices for the arch windows in the homepage banner. `cx` is where the
// subject sits across the photo (0 = left edge, 1 = right edge).
const archFocus = { australia: 0.24, canada: 0.39, germany: 0.5, netherlands: 0.42, malta: 0.71, denmark: 0.66, maldives: 0.5, europe: 0.72, kerala: 0.72 };
for (const [slug, cx] of Object.entries(archFocus)) {
  const src = `assets-src/destinations/${slug}.jpg`;
  const { width, height } = await sharp(src).metadata();
  const sliceW = Math.round(height * (360 / 1000));
  const left = Math.max(0, Math.min(width - sliceW, Math.round(width * cx - sliceW / 2)));
  const slice = await sharp(src).extract({ left, top: 0, width: sliceW, height }).toBuffer();
  await sharp(slice).resize(360, 1000).webp({ quality: 74 }).toFile(`public/img/dest/${slug}-arch.webp`);
}

for (const file of readdirSync('assets-src/destinations')) {
  const slug = basename(file, extname(file));
  const src = `assets-src/destinations/${file}`;
  const pos = position[slug] ?? attention;
  await sharp(src).resize(520, 650, { fit: 'cover', position: pos }).webp({ quality: 76 }).toFile(`public/img/dest/${slug}-card.webp`);
  await sharp(src).resize(192, 192, { fit: 'cover', position: pos }).webp({ quality: 76 }).toFile(`public/img/dest/${slug}-thumb.webp`);
  await sharp(src).resize(1400, 820, { fit: 'cover', position: attention }).webp({ quality: 72 }).toFile(`public/img/dest/${slug}-wide.webp`);
  await sharp(src).resize(640, 440, { fit: 'cover', position: pos }).webp({ quality: 74 }).toFile(`public/img/dest/${slug}-mid.webp`);
  await sharp(src).resize(1100, 1160, { fit: 'cover', position: pos }).webp({ quality: 72 }).toFile(`public/img/dest/${slug}-tall.webp`);
}
// Homepage banner: wide crops at three widths for srcset.
for (const w of [2000, 1400, 900]) {
  await sharp('assets-src/hero/kochi.jpg').resize(w, Math.round(w * 0.56), { fit: 'cover', position: 'bottom' }).webp({ quality: w > 1000 ? 62 : 72 }).toFile(`public/img/hero/kochi-${w}.webp`);
}
for (const file of readdirSync('assets-src/gallery')) {
  const slug = basename(file, extname(file));
  await sharp(`assets-src/gallery/${file}`).resize(400, 400, { fit: 'cover' }).webp({ quality: 84 }).toFile(`public/img/gallery/${slug}.webp`);
}
console.log('images built');
