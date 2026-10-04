// Trims the supplied logo artwork and writes the web assets used by the site.
// Usage: node scripts/logo.mjs path/to/logo.png
import sharp from 'sharp';
const src = process.argv[2];
const full = sharp(src).trim({ threshold: 12 });
const { info } = await full.clone().toBuffer({ resolveWithObject: true });
console.log('trimmed', info.width, info.height);
await full.clone().resize({ height: 240 }).png({ compressionLevel: 9 }).toFile('public/logo.png');
await full.clone().resize({ height: 240 }).webp({ quality: 92 }).toFile('public/logo.webp');
// Mark only (the two arcs) for the favicon and small UI uses.
const meta = await sharp(src).metadata();
const region = await sharp(src)
  .extract({ left: Math.round(meta.width * 0.27), top: Math.round(meta.height * 0.19), width: Math.round(meta.width * 0.5), height: Math.round(meta.height * 0.24) })
  .toBuffer();
const mb = await sharp(region).trim({ threshold: 12 }).toBuffer({ resolveWithObject: true });
console.log('mark', mb.info.width, mb.info.height);
await sharp(mb.data).resize({ width: 320 }).png().toFile('public/mark.png');
const side = Math.max(mb.info.width, mb.info.height) + 120;
const tile = await sharp({ create: { width: side, height: side, channels: 4, background: '#ffffff' } })
  .composite([{ input: mb.data, gravity: 'centre' }]).png().toBuffer();
await sharp(tile).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(tile).resize(48, 48).png().toFile('public/favicon.png');
