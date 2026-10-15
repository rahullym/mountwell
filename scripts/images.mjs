// Builds the web images in public/img from the originals in assets-src.
// Usage: node scripts/images.mjs
import sharp from 'sharp';
import { mkdirSync, readdirSync } from 'node:fs';
import { basename, extname } from 'node:path';

const attention = sharp.strategy.attention;
// Where the subject sits in panoramas that the automatic crop gets wrong.
const position = { australia: 'left', canada: 'centre' };

// Candidate travel photos for the scrolling columns in the homepage banner, 320px wide.
// `h` sets each tile's height, so the columns have a mix of shapes.
const reel = {
  'departure-gate': ['photos/candidates-departure-gate.jpg', 240],
  london: ['gallery/mount4.png', 400],
  arrivals: ['gallery/mount9.png', 320],
  night: ['photos/candidates-night.jpg', 240],
  seafront: ['photos/candidates-seafront.jpg', 400],
  'luggage-group': ['gallery/mount3.png', 320],
  trolleys: ['photos/candidates-trolleys.jpg', 400],
  terminal: ['photos/candidates-terminal.jpg', 400],
  'travel-group': ['gallery/mount5.png', 320],
  monument: ['gallery/mount7.png', 400],
};
mkdirSync('public/img/stories', { recursive: true });
for (const [slug, [src, h]] of Object.entries(reel)) {
  await sharp(`assets-src/${src}`).rotate().resize(320, h, { fit: 'cover', position: attention }).webp({ quality: 74 }).toFile(`public/img/stories/${slug}.webp`);
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
// Mount Bell's own team, office and candidate photos. Each is cut to the shape of its slot
// on the homepage; `cx` and `cy` are where the subject sits (0 = left or top, 1 = right or bottom).
const photos = {
  'team-kerala-dress': { w: 800, h: 800, cx: 0.5, cy: 0.5 },
  'office-reception': { w: 420, h: 496, cx: 0.5, cy: 0.3 },
  'office-briefing': { w: 600, h: 600, cx: 0.5, cy: 0.6 },
  'team-celebration': { w: 800, h: 600, cx: 0.5, cy: 0.6 },
  'office-consultation': { w: 1000, h: 1120, cx: 0.47, cy: 0.5 },
  'nurse-portrait': { w: 1000, h: 1250, cx: 0.48, cy: 0.5 },
  'candidates-departure-gate': { w: 480, h: 480, cx: 0.5, cy: 0.7 },
  'candidates-trolleys': { w: 480, h: 480, cx: 0.5, cy: 0.5 },
  'candidates-terminal': { w: 480, h: 480, cx: 0.5, cy: 0.5 },
  'candidates-seafront': { w: 480, h: 480, cx: 0.5, cy: 0.5 },
  'candidates-night': { w: 480, h: 480, cx: 0.5, cy: 0.5 },
};
for (const [slug, { w, h, cx, cy }] of Object.entries(photos)) {
  // Phone photos carry their rotation in EXIF, so apply it before measuring.
  const upright = await sharp(`assets-src/photos/${slug}.jpg`).rotate().toBuffer();
  const { width, height } = await sharp(upright).metadata();
  const boxW = Math.min(width, Math.round(height * (w / h)));
  const boxH = Math.min(height, Math.round(width * (h / w)));
  const left = Math.max(0, Math.min(width - boxW, Math.round(width * cx - boxW / 2)));
  const top = Math.max(0, Math.min(height - boxH, Math.round(height * cy - boxH / 2)));
  await sharp(upright).extract({ left, top, width: boxW, height: boxH }).resize(w, h).webp({ quality: 78 }).toFile(`public/img/photos/${slug}.webp`);
}
console.log('images built');
