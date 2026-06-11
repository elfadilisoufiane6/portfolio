import fs from 'fs';
import path from 'path';

export function listProjectImages(slug) {
  const dir = path.join(process.cwd(), 'public', 'projects', slug);
  try {
    const files = fs.readdirSync(dir).filter((f) =>
      /\.(jpe?g|png|webp|gif|avif|jfif)$/i.test(f)
    );
    files.sort((a, b) => {
      if (/^cover\./i.test(a)) return -1;
      if (/^cover\./i.test(b)) return 1;
      return a.localeCompare(b, undefined, { numeric: true });
    });
    // encode each path segment so URLs with spaces work
    return files.map((f) => '/projects/' + encodeURIComponent(slug) + '/' + encodeURIComponent(f));
  } catch {
    return [];
  }
}
