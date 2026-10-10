import type { Page } from './types';
import { about } from './about';
import { services } from './services';
import { nursing } from './nursing';
import { countries } from './countries';
import { jobs } from './jobs';
import { locations } from './locations';
import { resources } from './resources';
import { toolPages } from './tools';

export { toolPages };

export const pages: Page[] = [...about, ...services, ...nursing, ...countries, ...jobs, ...locations, ...resources];

const index = new Map<string, { path: string; crumb: string; description: string }>([...toolPages, ...pages].map((p) => [p.path, p]));

export function pageAt(path: string) {
  const page = index.get(path);
  if (!page) throw new Error(`No page at ${path}`);
  return page;
}

// Breadcrumb ancestors, nearest last.
export function trail(page: Page) {
  const out: { path: string; crumb: string }[] = [];
  let at: string | undefined = page.parent ?? page.path.replace(/[^/]+\/$/, '');
  while (at && at !== '/') {
    const p = index.get(at) as Page | undefined;
    if (p) out.unshift(p);
    at = p?.parent ?? at.replace(/[^/]+\/$/, '');
  }
  return out;
}
