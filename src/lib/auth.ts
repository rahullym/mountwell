// Email + password login for /admin/. Passwords are hashed with scrypt; sessions are random
// tokens kept in an httpOnly cookie, with only their SHA-256 hash stored in the database.
import { randomBytes, createHash } from 'node:crypto';
import type { AstroCookies } from 'astro';
import { requireDb } from './db';
import { checkPassword } from './password';
export { hashPassword, passwordProblem } from './password';

export const SESSION_COOKIE = 'mb_admin';
const SESSION_DAYS = 14;

export interface User { id: number; email: string; name: string }

const sha256 = (s: string) => createHash('sha256').update(s).digest('hex');

// Returns the user, or an error message. Locks an email out after 8 failed tries in 15 minutes.
export async function login(email: string, password: string): Promise<User | string> {
  const sql = requireDb();
  email = email.trim().toLowerCase();
  const [{ count }] = await sql<{ count: number }[]>`select count(*)::int as count from login_attempts where email = ${email} and at > now() - interval '15 minutes'`;
  if (count >= 8) return 'Too many attempts. Wait 15 minutes and try again.';
  const [row] = await sql<(User & { password_hash: string })[]>`select id, email, name, password_hash from users where email = ${email}`;
  if (!row || !(await checkPassword(password, row.password_hash))) {
    await sql`insert into login_attempts (email) values (${email})`;
    return 'That email and password do not match.';
  }
  await sql`delete from login_attempts where email = ${email} or at < now() - interval '1 day'`;
  return { id: row.id, email: row.email, name: row.name };
}

export async function startSession(userId: number, cookies: AstroCookies, secure: boolean) {
  const token = randomBytes(32).toString('base64url');
  const sql = requireDb();
  await sql`delete from sessions where expires_at < now()`;
  await sql`insert into sessions (token_hash, user_id, expires_at) values (${sha256(token)}, ${userId}, now() + ${`${SESSION_DAYS} days`}::interval)`;
  cookies.set(SESSION_COOKIE, token, { path: '/', httpOnly: true, sameSite: 'lax', secure, maxAge: SESSION_DAYS * 86400 });
}

export async function currentUser(cookies: AstroCookies): Promise<User | null> {
  const token = cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const [row] = await requireDb()<User[]>`
    select u.id, u.email, u.name from sessions s join users u on u.id = s.user_id
    where s.token_hash = ${sha256(token)} and s.expires_at > now()`;
  return row ?? null;
}

export async function endSession(cookies: AstroCookies) {
  const token = cookies.get(SESSION_COOKIE)?.value;
  if (token) await requireDb()`delete from sessions where token_hash = ${sha256(token)}`;
  cookies.delete(SESSION_COOKIE, { path: '/' });
}
