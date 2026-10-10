// Content model for the inner pages rendered by components/Page.astro.
// Paragraph and cell strings may contain inline HTML links.

export interface LinkItem { title: string; text: string; href?: string; id?: string; meta?: string; tags?: string[] }

export type Block =
  | { type: 'prose'; h2?: string; h3?: string; body: string[]; list?: string[]; after?: string[] }
  | { type: 'facts'; h2?: string; intro?: string; rows: [string, string][] }
  | { type: 'steps'; h2: string; intro?: string; items: { title: string; text: string }[]; after?: string[] }
  | { type: 'checks'; h2: string; intro?: string; items: { title: string; text: string }[] }
  | { type: 'links'; h2?: string; intro?: string; items: LinkItem[] }
  | { type: 'table'; h2?: string; intro?: string; head: string[]; rows: string[][]; note?: string }
  | { type: 'faq'; h2?: string; items: { q: string; a: string }[] }
  | { type: 'note'; text: string }
  | { type: 'cert'; h2?: string }
  | { type: 'offices'; h2?: string; city?: string }
  | { type: 'reviews'; h2?: string }
  | { type: 'gallery'; h2?: string; caption?: string }
  | { type: 'team'; h2?: string }
  | { type: 'form'; h2?: string };

export interface Page {
  path: string;          // '/services/pr-visa/'
  parent?: string;       // breadcrumb parent when it is not the folder above
  crumb: string;         // short name in breadcrumbs and related links
  title: string;         // <title>
  description: string;
  label?: string;
  h1: string;
  tagline?: string;      // short line under the h1
  lede: string;
  acts?: { check: string; wa: string };  // button labels in the page head; adds a call button
  img?: string;          // destination photo slug in /public/img/dest
  photo?: { src: string; alt: string; w: number; h: number };
  accent?: string;       // CSS colour for the photo edge and label
  wide?: boolean;        // hubs: full-width body, no adviser card
  noindex?: boolean;
  wa?: string;           // WhatsApp opening message
  blocks: Block[];
  related?: string[];    // paths of other pages
  cta?: { heading: string; text?: string } | false;
}
