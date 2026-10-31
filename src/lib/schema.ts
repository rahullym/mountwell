// Database tables for the CMS. Every statement is safe to run more than once.
export const schema = [
  `create table if not exists users (
    id serial primary key,
    email text not null unique,
    name text not null,
    password_hash text not null,
    created_at timestamptz not null default now()
  )`,
  `create table if not exists sessions (
    token_hash text primary key,
    user_id integer not null references users(id) on delete cascade,
    expires_at timestamptz not null
  )`,
  `create table if not exists login_attempts (
    email text not null,
    at timestamptz not null default now()
  )`,
  `create index if not exists login_attempts_email_at on login_attempts (email, at)`,
  `create table if not exists posts (
    id serial primary key,
    slug text not null unique,
    title text not null,
    tag text not null default 'Update',
    img text not null default 'kerala',
    excerpt text not null,
    body text not null,
    published boolean not null default false,
    published_at timestamptz,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  )`,
  `create table if not exists openings (
    id serial primary key,
    title text not null,
    category text not null default 'nursing',
    country text not null,
    location text not null default '',
    salary text not null default '',
    summary text not null,
    requirements text not null default '',
    status text not null default 'open',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  )`,
  `create table if not exists reviews (
    id serial primary key,
    name text not null,
    role text not null default 'Mount Bell client',
    text text not null,
    sort integer not null default 0,
    published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  )`,
  `create table if not exists faqs (
    id serial primary key,
    q text not null,
    a text not null,
    href text not null default '',
    link text not null default '',
    sort integer not null default 0,
    published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  )`,
  // The "Latest updates" cards on the home page that link to guide pages (blog posts are added in front of them).
  `create table if not exists cards (
    id serial primary key,
    tag text not null default 'Guide',
    title text not null,
    excerpt text not null,
    img text not null default 'kerala',
    href text not null,
    sort integer not null default 0,
    published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  )`,
  // Site details edited on /admin/settings/ (phone, email, social links…). Missing keys use src/data/site.ts.
  `create table if not exists settings (
    key text primary key,
    value text not null,
    updated_at timestamptz not null default now()
  )`,
  // Photos uploaded in the admin, stored as WebP in two sizes: wide (up to 1600px) and mid (up to 800px).
  `create table if not exists media (
    id serial primary key,
    name text not null default '',
    width integer not null,
    height integer not null,
    wide bytea not null,
    mid bytea not null,
    bytes integer not null,
    uploaded_by integer references users(id) on delete set null,
    created_at timestamptz not null default now()
  )`,
];
