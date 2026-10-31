// Receives consultation requests from LeadForm and emails them to the office through Resend.
// Needs RESEND_API_KEY. LEAD_TO and LEAD_FROM are optional; the From address must be on a
// domain verified in Resend (resend.com/domains).
import type { APIRoute } from 'astro';
import { site } from '../../data/site';

export const prerender = false;

const fields = ['name', 'phone', 'profession', 'country', 'experience', 'page'] as const;

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const json = (body: object, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const key = process.env.RESEND_API_KEY;
  if (!key) return json({ error: 'Email is not set up.' }, 503);

  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return json({ error: 'Bad request.' }, 400);
  }

  const data = Object.fromEntries(fields.map((f) => [f, String(input[f] ?? '').trim().slice(0, 200)]));
  if (data.name.length < 2 || !/^\+91[6-9]\d{9}$/.test(data.phone) || !data.profession) {
    return json({ error: 'Missing details.' }, 400);
  }

  const rows: [string, string][] = [
    ['Name', data.name],
    ['Phone', data.phone],
    ['Profession', data.profession],
    ['Preferred country', data.country || 'Not given'],
    ['Experience', data.experience ? `${data.experience} years` : 'Not given'],
    ['Sent from', `${site.url}${data.page}`],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<p>New consultation request from the website.</p><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#666">${k}</td><td><strong>${escape(v)}</strong></td></tr>`)
    .join('')}</table>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.LEAD_FROM || 'Mount Bell Website <website@mountbell.com>',
      to: (process.env.LEAD_TO || site.email).split(',').map((s) => s.trim()),
      subject: `New consultation request: ${data.name} (${data.profession})`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return json({ error: 'Could not send.' }, 502);
  }
  return json({ ok: true }, 200);
};
