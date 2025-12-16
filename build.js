const fs = require('fs').promises;
const path = require('path');

const IGNORES = new Set(['node_modules', '.git', 'dist']);

async function copyRecursive(src, dest) {
  const stat = await fs.stat(src);
  if (stat.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src);
    for (const entry of entries) {
      if (IGNORES.has(entry)) continue;
      await copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    await fs.copyFile(src, dest);
  }
}

async function build() {
  const root = process.cwd();
  const out = path.join(root, 'dist');
  try {
    await fs.rm(out, { recursive: true, force: true });
  } catch (e) {
    // ignore
  }
  await copyRecursive(root, out);
  console.log('Build completo: carpeta `dist/` creada.');
}

build().catch(err => { console.error(err); process.exit(1); });
