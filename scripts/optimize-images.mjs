import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, basename } from 'node:path';

const directory = 'public/images';
const widths = [160, 320, 480, 640, 768, 960, 1280, 1600, 1920, 2400];
await mkdir(join(directory, 'responsive'), { recursive: true });
for (const file of await readdir(directory)) {
  if (!file.endsWith('.webp')) continue;
  const source = join(directory, file);
  const sourceStat = await stat(source);
  for (const width of widths) {
    const destination = join(directory, 'responsive', `${basename(file, '.webp')}-${width}.webp`);
    const existing = await stat(destination).catch(() => null);
    if (existing && existing.mtimeMs >= sourceStat.mtimeMs) continue;
    await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(destination);
  }
}
console.log('Responsive images ready.');
