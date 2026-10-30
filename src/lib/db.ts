// Neon Postgres connection. DATABASE_URL is added by the Neon integration in Vercel.
// When it is missing (local builds, previews without a database), `db()` returns null and
// the public pages fall back to the content in src/data/site.ts.
import postgres from 'postgres';

let client: postgres.Sql | null | undefined;

export function db() {
  if (client !== undefined) return client;
  const url = process.env.DATABASE_URL;
  // `prepare: false` is needed for Neon's pooled (pgbouncer) connection string.
  client = url ? postgres(url, { max: 1, prepare: false, idle_timeout: 20, connect_timeout: 10 }) : null;
  return client;
}

export function requireDb() {
  const sql = db();
  if (!sql) throw new Error('DATABASE_URL is not set. Connect the Neon database in Vercel → Storage.');
  return sql;
}
