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
        .replaceAll('/_next/', '/achal-portfolio/_next/')
        .replace(/(?<!\/achal-portfolio)\/case-studies/g, '/achal-portfolio/case-studies')
        .replace(/(?<!\/achal-portfolio)\/experience/g, '/achal-portfolio/experience')
        .replace(/(?<!\/achal-portfolio)\/leadership/g, '/achal-portfolio/leadership')
        .replace(/(?<!\/achal-portfolio)\/writing/g, '/achal-portfolio/writing')
        .replace(/(?<!\/achal-portfolio)\/resume/g, '/achal-portfolio/resume')
        .replace(/(?<!\/achal-portfolio)\/achal-gupta-executive-resume\.pdf/g, '/achal-portfolio/achal-gupta-executive-resume.pdf')
        .replaceAll('href="/"', 'href="/achal-portfolio/"')
        .replaceAll('href="/#', 'href="/achal-portfolio/#')
        .replaceAll('"/#', '"/achal-portfolio/#');
      await writeFile(file, text);
    }
  }
}
await walk(root);
await writeFile(join(root, '.nojekyll'), '');
