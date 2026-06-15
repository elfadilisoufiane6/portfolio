/**
 * One-off image optimizer.
 * Converts heavy PNG/JPEG source images to resized WebP, then deletes the
 * original raster file. Run with: node scripts/optimize-images.mjs
 *
 * - Project gallery images: max 1600px wide, WebP q78
 * - logo.png: kept as PNG name (referenced by code) but resized + compressed
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = path.join(process.cwd(), 'public');
const RASTER = /\.(png|jpe?g|jfif)$/i;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

async function convertToWebp(file, maxWidth) {
  const webpPath = file.replace(RASTER, '.webp');
  const before = fs.statSync(file).size;
  await sharp(file)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(webpPath + '.tmp');
  fs.renameSync(webpPath + '.tmp', webpPath);
  if (path.resolve(webpPath) !== path.resolve(file)) fs.unlinkSync(file);
  const after = fs.statSync(webpPath).size;
  return { before, after, webpPath };
}

async function compressLogo(file) {
  const before = fs.statSync(file).size;
  const buf = await sharp(file)
    .resize({ width: 512, withoutEnlargement: true })
    .png({ quality: 80, compressionLevel: 9, palette: true })
    .toBuffer();
  fs.writeFileSync(file, buf);
  return { before, after: fs.statSync(file).size };
}

const kb = (n) => (n / 1024).toFixed(0) + 'KB';

async function main() {
  let savedTotal = 0;

  // 1) Project gallery images -> webp
  const projDir = path.join(ROOT, 'projects');
  if (fs.existsSync(projDir)) {
    for (const file of walk(projDir)) {
      if (!RASTER.test(file)) continue;
      const r = await convertToWebp(file, 1600);
      savedTotal += r.before - r.after;
      console.log(`webp  ${path.relative(ROOT, file)}  ${kb(r.before)} -> ${kb(r.after)}`);
    }
  }

  // 2) logo.png (kept as .png because code references /logo.png)
  for (const name of ['logo.png']) {
    const f = path.join(ROOT, name);
    if (fs.existsSync(f)) {
      const r = await compressLogo(f);
      savedTotal += r.before - r.after;
      console.log(`logo  ${name}  ${kb(r.before)} -> ${kb(r.after)}`);
    }
  }

  console.log(`\nTotal saved: ${kb(savedTotal)} (${(savedTotal / 1048576).toFixed(1)}MB)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
