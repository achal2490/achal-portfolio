import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const root = 'dist/client';
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (['.html', '.css', '.js'].includes(extname(file))) {
      let text = await readFile(file, 'utf8');
      for (const [from, to] of [
        ['/_next/', '/achal-portfolio/_next/'],
        ['/case-studies', '/achal-portfolio/case-studies'],
        ['/experience', '/achal-portfolio/experience'],
        ['/leadership', '/achal-portfolio/leadership'],
        ['/writing', '/achal-portfolio/writing'],
        ['/resume', '/achal-portfolio/resume'],
        ['/achal-gupta-executive-resume.pdf', '/achal-portfolio/achal-gupta-executive-resume.pdf'],
      ]) {
        text = text.replaceAll(from, to);
      }
      text = text.replaceAll('href="/"', 'href="/achal-portfolio/"');
      text = text.replaceAll('href="/#', 'href="/achal-portfolio/#');
      text = text.replaceAll('"/#', '"/achal-portfolio/#');
      text = text.replaceAll('":"/', '":"/achal-portfolio/');
      await writeFile(file, text);
    }
  }
}
await walk(root);
await writeFile(join(root, '.nojekyll'), '');
