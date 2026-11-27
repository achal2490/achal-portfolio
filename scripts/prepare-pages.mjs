import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const root = 'dist/client';
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (['.html', '.css', '.js'].includes(extname(file))) {
      let text = await readFile(file, 'utf8');
      text = text
        .replaceAll('="/_next/', '="/achal-portfolio/_next/')
        .replaceAll("='/_next/", "'/achal-portfolio/_next/")
        .replaceAll('url(/_next/', 'url(/achal-portfolio/_next/')
        .replaceAll('href="/case-studies', 'href="/achal-portfolio/case-studies')
        .replaceAll('href="/experience', 'href="/achal-portfolio/experience')
        .replaceAll('href="/leadership', 'href="/achal-portfolio/leadership')
        .replaceAll('href="/writing', 'href="/achal-portfolio/writing')
        .replaceAll('href="/resume', 'href="/achal-portfolio/resume')
        .replaceAll('href="/#', 'href="/achal-portfolio/#');
      await writeFile(file, text);
    }
  }
}
await walk(root);
await writeFile(join(root, '.nojekyll'), '');
