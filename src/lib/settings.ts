// Site details staff can change on /admin/settings/. The built-in values live in src/data/site.ts and
// appear in many pages, the footer and Google's structured data. Rather than rewrite every page,
// each rendered page has the built-in values swapped for the saved ones (see middleware.ts).
import { site } from '../data/site';
import { db } from './db';

export interface Setting {
  key: string;
  label: string;
  help?: string;
  kind: 'phone' | 'whatsapp' | 'email' | 'url';
  builtIn: string;
}

const kochi = site.offices.find((o) => o.city === 'Kochi')!;
const thrissur = site.offices.find((o) => o.city === 'Thrissur')!;

export const settings: Setting[] = [
  { key: 'phone', label: 'Main phone number', kind: 'phone', builtIn: site.phone.display, help: 'Shown in the header, footer and contact pages. Include +91.' },
  { key: 'whatsapp', label: 'WhatsApp number', kind: 'whatsapp', builtIn: site.whatsapp, help: 'Where the WhatsApp buttons and the enquiry form send people. Country code first, digits only, for example 919207014777.' },
  { key: 'email', label: 'Office email', kind: 'email', builtIn: site.email, help: 'Shown on the contact pages. Website enquiries are emailed separately (set in Vercel).' },
  { key: 'kochi_phone2', label: 'Kochi office, second phone', kind: 'phone', builtIn: kochi.phones[1]?.display ?? '' },
  { key: 'thrissur_phone', label: 'Thrissur office phone', kind: 'phone', builtIn: thrissur.phones[0]?.display ?? '' },
  { key: 'facebook', label: 'Facebook page', kind: 'url', builtIn: site.social.facebook },
  { key: 'instagram', label: 'Instagram', kind: 'url', builtIn: site.social.instagram },
  { key: 'linkedin', label: 'LinkedIn', kind: 'url', builtIn: site.social.linkedin },
  { key: 'youtube', label: 'YouTube channel', kind: 'url', builtIn: site.social.youtube },
];

export const telOf = (display: string) => '+' + display.replace(/\D/g, '');

// Checks a value typed by staff. Returns the cleaned value, or throws a message they can act on.
export function clean(s: Setting, raw: string): string {
  const v = raw.trim();
  if (!v) throw new Error(`${s.label} cannot be empty.`);
  if (s.kind === 'phone' && !/^\+\d[\d ]{7,18}$/.test(v)) throw new Error(`${s.label}: start with + and the country code, then digits and spaces only (for example +91 92070 14777).`);
  if (s.kind === 'whatsapp' && !/^\d{8,15}$/.test(v.replace(/\D/g, ''))) throw new Error(`${s.label}: use the full number with country code, for example 919207014777.`);
  if (s.kind === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) throw new Error(`${s.label} does not look like an email address.`);
  if (s.kind === 'url' && !/^https:\/\/\S+$/.test(v)) throw new Error(`${s.label} should be a full address starting with https://`);
  return s.kind === 'whatsapp' ? v.replace(/\D/g, '') : v;
}

export async function savedSettings(): Promise<Record<string, string>> {
  const sql = db();
  if (!sql) return {};
  const rows = await sql<{ key: string; value: string }[]>`select key, value from settings`;
  return Object.fromEntries(rows.map((r) => [r.key, r.value]));
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Pairs of [built-in text, saved text] to swap in rendered HTML. Longest first, so a tel: number
// is replaced before the WhatsApp digits it contains.
export function replacements(saved: Record<string, string>): [string, string][] {
  const pairs: [string, string][] = [];
  for (const s of settings) {
    const v = saved[s.key];
    if (!v || v === s.builtIn || !s.builtIn) continue;
    if (s.kind === 'phone') {
      pairs.push([s.builtIn, escapeHtml(v)], [telOf(s.builtIn), telOf(v)]);
    } else if (s.kind === 'whatsapp') {
      pairs.push([`wa.me/${s.builtIn}`, `wa.me/${v}`], [`data-wa="${s.builtIn}"`, `data-wa="${v}"`]);
    } else {
      pairs.push([s.builtIn, escapeHtml(v)]);
    }
  }
  return pairs.sort((a, b) => b[0].length - a[0].length);
}

export function applyReplacements(html: string, pairs: [string, string][]) {
  for (const [from, to] of pairs) html = html.split(from).join(to);
  return html;
}
