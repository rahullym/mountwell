// What staff can edit in /admin/. Each collection is one database table plus the form fields,
// the list columns and the public pages to refresh after a save.
import { pages } from '../data/pages';
import { openingCategories } from './content';

export type FieldType = 'text' | 'textarea' | 'markdown' | 'select' | 'checkbox' | 'number' | 'datetime' | 'email' | 'password' | 'photo';

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  help?: string;
  options?: [string, string][];
  default?: string | number | boolean;
  rows?: number;
}

export interface Collection {
  key: string;
  table: string;
  label: string;          // plural, for menus
  singular: string;
  intro: string;
  fields: Field[];
  list: { name: string; label: string }[];
  order: string;          // SQL order by
  revalidate: (row: Record<string, any>, before?: Record<string, any>) => string[];
}

const reviewPaths = ['/', ...pages.filter((p) => p.blocks.some((b) => b.type === 'reviews')).map((p) => p.path)];
const openingPaths = ['/overseas-jobs/openings/', ...pages.filter((p) => p.blocks.some((b) => b.type === 'openings')).map((p) => p.path)];

export const collections: Collection[] = [
  {
    key: 'posts', table: 'posts', label: 'Blog posts', singular: 'post',
    intro: 'Guides and news. The three newest published posts appear in "Latest updates" on the home page.',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'excerpt', label: 'Summary', type: 'textarea', required: true, rows: 2, help: 'One or two sentences. Shown on cards and in Google results.' },
      { name: 'img', label: 'Cover photo', type: 'photo', default: 'kerala', help: 'Shown at the top of the article and on its card. Upload your own or pick one of ours. Landscape photos work best.' },
      { name: 'body', label: 'Article', type: 'markdown', required: true, rows: 22, help: 'Use the buttons above the box for headings, bold text, lists, links and photos. Press Preview to see how it will look.' },
      { name: 'tag', label: 'Tag', type: 'text', required: true, default: 'Update', help: 'A short label such as Germany, Nursing or Guide.' },
      { name: 'published', label: 'Published', type: 'checkbox', default: false, help: 'Leave unticked to save a draft that is not on the site.' },
      { name: 'published_at', label: 'Publish date', type: 'datetime', help: 'Filled in automatically the first time you publish. A future date schedules the post, but it only appears after the next save or deploy.' },
      { name: 'slug', label: 'Web address', type: 'text', help: 'Becomes mountbell.com/blog/<this>/. Leave empty to make one from the title. Changing it later breaks old links.' },
    ],
    list: [{ name: 'title', label: 'Title' }, { name: 'tag', label: 'Tag' }, { name: 'published', label: 'Status' }, { name: 'published_at', label: 'Date' }],
    order: 'published_at desc nulls first, id desc',
    revalidate: (row, before) => ['/', '/blog/', '/sitemap-blog.xml', `/blog/${row.slug}/`, ...(before?.slug ? [`/blog/${before.slug}/`] : [])],
  },
  {
    key: 'openings', table: 'openings', label: 'Job openings', singular: 'opening',
    intro: 'Current vacancies, listed on the Current openings page. Nursing openings also appear on the Nursing careers page; the rest appear on Overseas jobs. Close an opening when it is filled.',
    fields: [
      { name: 'title', label: 'Job title', type: 'text', required: true, help: 'For example: Registered Nurse, ICU' },
      { name: 'category', label: 'Category', type: 'select', options: openingCategories, default: 'nursing' },
      { name: 'country', label: 'Country', type: 'text', required: true },
      { name: 'location', label: 'City or region', type: 'text' },
      { name: 'salary', label: 'Salary', type: 'text', help: 'Only if the employer has confirmed it. Leave empty otherwise.' },
      { name: 'summary', label: 'About the job', type: 'textarea', required: true, rows: 4 },
      { name: 'requirements', label: 'Requirements', type: 'textarea', rows: 5, help: 'One requirement per line.' },
      { name: 'status', label: 'Status', type: 'select', options: [['open', 'Open'], ['closed', 'Closed (hidden from the site)']], default: 'open' },
    ],
    list: [{ name: 'title', label: 'Job' }, { name: 'country', label: 'Country' }, { name: 'category', label: 'Category' }, { name: 'status', label: 'Status' }],
    order: "status = 'closed', created_at desc",
    revalidate: () => openingPaths,
  },
  {
    key: 'reviews', table: 'reviews', label: 'Reviews', singular: 'review',
    intro: 'Client reviews. The first three by order appear on the home page; all published reviews appear on Success stories and the city pages.',
    fields: [
      { name: 'name', label: 'Client name', type: 'text', required: true },
      { name: 'role', label: 'Line under the name', type: 'text', default: 'Mount Bell client', help: 'For example: Nurse, now in Malta' },
      { name: 'text', label: 'Review', type: 'textarea', required: true, rows: 5, help: 'Use the client’s own words, with their permission.' },
      { name: 'sort', label: 'Order', type: 'number', default: 0, help: 'Lower numbers come first.' },
      { name: 'published', label: 'Show on the site', type: 'checkbox', default: true },
    ],
    list: [{ name: 'name', label: 'Client' }, { name: 'role', label: 'Line' }, { name: 'sort', label: 'Order' }, { name: 'published', label: 'Status' }],
    order: 'sort, id',
    revalidate: () => reviewPaths,
  },
  {
    key: 'faqs', table: 'faqs', label: 'FAQs', singular: 'question',
    intro: 'Questions in the FAQ section of the home page.',
    fields: [
      { name: 'q', label: 'Question', type: 'text', required: true },
      { name: 'a', label: 'Answer', type: 'textarea', required: true, rows: 5 },
      { name: 'link', label: 'Link text', type: 'text', help: 'Optional, for example: How our fees work' },
      { name: 'href', label: 'Link address', type: 'text', help: 'A page on this site, for example: /fees/' },
      { name: 'sort', label: 'Order', type: 'number', default: 0, help: 'Lower numbers come first.' },
      { name: 'published', label: 'Show on the site', type: 'checkbox', default: true },
    ],
    list: [{ name: 'q', label: 'Question' }, { name: 'sort', label: 'Order' }, { name: 'published', label: 'Status' }],
    order: 'sort, id',
    revalidate: () => ['/'],
  },
  {
    key: 'users', table: 'users', label: 'Staff logins', singular: 'login',
    intro: 'People who can sign in to this admin.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'password', label: 'Password', type: 'password', help: 'At least 10 characters. When editing, leave empty to keep the current password.' },
    ],
    list: [{ name: 'name', label: 'Name' }, { name: 'email', label: 'Email' }, { name: 'created_at', label: 'Added' }],
    order: 'name',
    revalidate: () => [],
  },
];

export const collectionAt = (key: string) => collections.find((c) => c.key === key);

export const slugify = (s: string) =>
  s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
