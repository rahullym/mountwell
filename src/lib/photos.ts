// A photo is either one of the built-in destination photos (a name such as "kerala", served from
// /public/img/dest) or a photo uploaded in the admin ("/media/12", served from the database).
import { photoAlt } from '../data/site';

export type PhotoSize = 'wide' | 'mid' | 'thumb';

export const presetPhotos = Object.keys(photoAlt);

export const isUpload = (img: string) => /^\/media\/\d+$/.test(img);
export const isValidPhoto = (img: string) => isUpload(img) || presetPhotos.includes(img);

export function photoSrc(img: string, size: PhotoSize) {
  // Uploads have no thumb size; mid is small enough.
  if (isUpload(img)) return `${img}-${size === 'wide' ? 'wide' : 'mid'}.webp`;
  return `/img/dest/${img}-${size}.webp`;
}

export const photoAltFor = (img: string) => photoAlt[img] ?? '';
