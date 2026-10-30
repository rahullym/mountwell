// Adds a staff login, or resets the password of an existing one.
// Usage: DATABASE_URL=... npm run cms:user -- you@mountbell.com "Your Name"
import postgres from 'postgres';
import { createInterface } from 'node:readline/promises';
import { hashPassword, passwordProblem } from '../src/lib/password.ts';

const [email, ...nameParts] = process.argv.slice(2);
const name = nameParts.join(' ').trim();
if (!email || !email.includes('@')) throw new Error('Usage: npm run cms:user -- email@example.com "Full Name"');
const url = process.env.DATABASE_URL;
if (!url) throw new Error('Set DATABASE_URL first (run `vercel env pull .env.local`).');

const rl = createInterface({ input: process.stdin, output: process.stdout });
const password = process.env.CMS_PASSWORD ?? (await rl.question('Password (at least 10 characters): '));
rl.close();
const problem = passwordProblem(password);
if (problem) throw new Error(problem);

const sql = postgres(url, { max: 1, prepare: false });
const hash = await hashPassword(password);
const [row] = await sql`
  insert into users (email, name, password_hash) values (${email.toLowerCase()}, ${name || email.split('@')[0]}, ${hash})
  on conflict (email) do update set password_hash = excluded.password_hash, name = coalesce(nullif(${name}, ''), users.name)
  returning (xmax = 0) as created`;
console.log(row.created ? `Login created for ${email}.` : `Password reset for ${email}.`);
await sql.end();
