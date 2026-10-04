// Makes a reversed logo for dark backgrounds from public/logo.png (which has a transparent
// ground): the two arcs keep their colours, slightly lifted, and the lettering turns white.
// Usage: node scripts/logo-light.mjs
import sharp from 'sharp';

const { data, info } = await sharp('public/logo.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const split = Math.round(info.height * 0.42); // arcs sit above this row, lettering below
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const o = (y * info.width + x) * 4;
    if (y >= split) {
      data[o] = data[o + 1] = data[o + 2] = 255;
    } else {
      for (let c = 0; c < 3; c++) data[o + c] = Math.min(255, data[o + c] * 1.15 + 16);
    }
  }
}
await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png({ compressionLevel: 9 }).toFile('public/logo-light.png');
console.log('logo-light.png written', info.width, info.height);
