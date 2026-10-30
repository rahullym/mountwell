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
];
