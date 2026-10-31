// Browser side of the admin edit form: photo upload and picker, the article formatting buttons,
// preview, and a warning before leaving with unsaved changes.
import { marked } from 'marked';

// Vercel rejects request bodies over 4.5 MB, so large phone photos are shrunk here first.
// The server makes the final WebP sizes, so this only needs to be "big enough".
async function shrink(file: File): Promise<Blob> {
  const small = file.size <= 3_000_000 && /^image\/(jpeg|png|webp)$/.test(file.type);
  if (small) return file;
  try {
    const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
    const scale = Math.min(1, 2400 / Math.max(bmp.width, bmp.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((ok) => canvas.toBlob(ok, 'image/jpeg', 0.88));
    return blob ?? file;
  } catch {
    return file; // The browser cannot read it (e.g. HEIC in Chrome); let the server try.
  }
}

interface Uploaded { value: string; wide: string; mid: string }

async function upload(file: File, status: HTMLElement): Promise<Uploaded | null> {
  if (!file.type.startsWith('image/') && !/\.(heic|heif)$/i.test(file.name)) {
    status.textContent = 'That is not a photo. Choose a JPG or PNG file.';
    status.dataset.state = 'err';
    return null;
  }
  status.textContent = 'Uploading photo…';
  status.dataset.state = 'busy';
  try {
    const body = new FormData();
    body.append('photo', await shrink(file), file.name.replace(/\.[^.]+$/, '') + '.jpg');
    const res = await fetch('/admin/upload/', { method: 'POST', body });
    const data = await res.json().catch(() => ({ error: 'The upload failed. Check your internet connection and try again.' }));
    if (!res.ok) throw new Error(data.error);
    status.textContent = 'Photo uploaded.';
    status.dataset.state = 'ok';
    return data;
  } catch (err: any) {
    status.textContent = err?.message || 'The upload failed. Try again.';
    status.dataset.state = 'err';
    return null;
  }
}

const form = document.querySelector<HTMLFormElement>('form[data-edit]');
let dirty = false;

// Cover photo: upload or pick from the library.
document.querySelectorAll<HTMLElement>('[data-photo]').forEach((box) => {
  const input = box.querySelector<HTMLInputElement>('input[type=hidden]')!;
  const preview = box.querySelector<HTMLImageElement>('.photo-now')!;
  const grid = box.querySelector<HTMLElement>('[data-photo-grid]')!;
  const status = box.querySelector<HTMLElement>('.up-status')!;
  const choose = (value: string, src: string) => {
    input.value = value;
    preview.src = src;
    grid.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.value === value)));
    dirty = true;
  };
  const picker = box.querySelector<HTMLInputElement>('[data-photo-file]')!;
  box.querySelector('[data-photo-pick]')!.addEventListener('click', () => picker.click());
  box.querySelector('[data-photo-browse]')!.addEventListener('click', () => { grid.hidden = !grid.hidden; });
  grid.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-value]');
    if (!btn) return;
    choose(btn.dataset.value!, btn.querySelector('img')!.src);
    status.textContent = '';
    grid.hidden = true;
  });
  picker.addEventListener('change', async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    (e.target as HTMLInputElement).value = '';
    if (!file) return;
    const up = await upload(file, status);
    if (up) choose(up.value, up.mid);
  });
});

// Article formatting buttons. They insert simple Markdown so staff never need to type it.
document.querySelectorAll<HTMLElement>('.md-tools').forEach((bar) => {
  const box = bar.closest('.md-field')!;
  const ta = box.querySelector<HTMLTextAreaElement>('textarea')!;
  const pv = box.querySelector<HTMLElement>('.md-preview')!;
  const file = bar.querySelector<HTMLInputElement>('[data-md-file]')!;
  const status = document.createElement('p');
  status.className = 'up-status';
  status.setAttribute('role', 'status');
  bar.after(status);

  // Replace the selection, then select `select` inside the inserted text (so staff can type over it).
  const insert = (text: string, select?: string) => {
    const { selectionStart: a, selectionEnd: b } = ta;
    ta.focus();
    ta.setRangeText(text, a, b, 'end');
    if (select) {
      const at = a + text.indexOf(select);
      ta.setSelectionRange(at, at + select.length);
    }
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  };
  const selected = () => ta.value.slice(ta.selectionStart, ta.selectionEnd);
  // Headings and lists need an empty line around them, or Markdown merges them into the paragraph.
  const blankBefore = () => {
    const before = ta.value.slice(0, ta.selectionStart);
    return before === '' || before.endsWith('\n\n') ? '' : before.endsWith('\n') ? '\n' : '\n\n';
  };
  const blankAfter = () => {
    const after = ta.value.slice(ta.selectionEnd);
    return after.startsWith('\n\n') ? '' : after.startsWith('\n') ? '\n' : '\n\n';
  };
  const prefixLines = (make: (i: number) => string, placeholder: string) => {
    const sel = selected() || placeholder;
    const text = sel.split('\n').map((l, i) => make(i) + l.replace(/^(#+ |[-*] |\d+\. )/, '')).join('\n');
    insert(blankBefore() + text + blankAfter(), selected() ? undefined : placeholder);
  };

  // Enter inside a list starts the next item; Enter on an empty item ends the list.
  ta.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.shiftKey || e.isComposing || ta.selectionStart !== ta.selectionEnd) return;
    const a = ta.selectionStart;
    const start = ta.value.lastIndexOf('\n', a - 1) + 1;
    const m = ta.value.slice(start, a).match(/^(\s*)([-*]|(\d+)\.) (.*)$/);
    if (!m) return;
    e.preventDefault();
    if (!m[4].trim()) {
      ta.setRangeText('\n', start, a, 'end'); // leave an empty line so the next paragraph is not part of the list
    } else {
      const marker = m[3] ? `${Number(m[3]) + 1}.` : m[2];
      ta.setRangeText(`\n${m[1]}${marker} `, a, a, 'end');
    }
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  });

  bar.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-md]');
    if (!btn) return;
    e.preventDefault();
    const kind = btn.dataset.md;
    if (kind === 'preview') {
      const on = pv.hidden;
      if (on) pv.innerHTML = marked.parse(ta.value || '*Nothing written yet.*', { async: false }) as string;
      pv.hidden = !on;
      ta.hidden = on;
      btn.setAttribute('aria-pressed', String(on));
      btn.textContent = on ? 'Back to editing' : 'Preview';
      bar.querySelectorAll<HTMLButtonElement>('button:not(.md-preview-btn)').forEach((b) => (b.disabled = on));
      return;
    }
    if (kind === 'h2') return prefixLines(() => '## ', 'Heading');
    if (kind === 'ul') return prefixLines(() => '- ', 'List item');
    if (kind === 'ol') return prefixLines((i) => `${i + 1}. `, 'List item');
    if (kind === 'bold') {
      const sel = selected() || 'bold text';
      return insert(`**${sel}**`, selected() ? undefined : sel);
    }
    if (kind === 'link') {
      const url = prompt('Paste the web address the link should go to (for example https://mountbell.com/fees/ or /fees/):');
      if (!url) return;
      const sel = selected() || 'link text';
      return insert(`[${sel}](${url.trim()})`, selected() ? undefined : sel);
    }
    if (kind === 'photo') file.click();
  });

  file.addEventListener('change', async () => {
    const f = file.files?.[0];
    file.value = '';
    if (!f) return;
    const up = await upload(f, status);
    if (up) insert(`${blankBefore()}![Describe the photo](${up.wide})${blankAfter()}`, 'Describe the photo');
    if (up) status.textContent = 'Photo added. Replace "Describe the photo" with a few words about it.';
  });
});

// Warn before leaving the page with unsaved changes.
if (form) {
  form.addEventListener('input', () => { dirty = true; });
  document.addEventListener('submit', () => { dirty = false; });
  window.addEventListener('beforeunload', (e) => { if (dirty) e.preventDefault(); });
}
