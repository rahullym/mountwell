// After a save, ask Vercel to rebuild the cached copy of each affected page (on-demand ISR).
// A 404 is fine (a deleted post). Only runs on Vercel, where ISR_BYPASS_TOKEN is set; locally pages are rendered fresh anyway.
export async function revalidate(origin: string, paths: string[]) {
  const token = process.env.ISR_BYPASS_TOKEN;
  if (!token || !process.env.VERCEL) return { ok: true, skipped: true };
  const unique = [...new Set(paths)];
  // In batches, so a site-wide change (every page) does not open dozens of database connections at once.
  const results: PromiseSettledResult<Response>[] = [];
  for (let i = 0; i < unique.length; i += 15) {
    results.push(...await Promise.allSettled(
      unique.slice(i, i + 15).map((p) => fetch(new URL(p, origin), { method: 'HEAD', headers: { 'x-prerender-revalidate': token } })),
    ));
  }
  const failed = unique.filter((_, i) => results[i].status === 'rejected' || (results[i] as PromiseFulfilledResult<Response>).value.status >= 500);
  if (failed.length) console.error('[cms] revalidate failed for', failed);
  return { ok: failed.length === 0, skipped: false };
}
