// Non-destructive photo squeeze for BGA Places.
//
// Reads full-res originals from photos-src/ (gitignored — your archive stays
// local and untouched) and writes web-optimized JPEGs into public/photos/
// (committed + served). sharp strips metadata by default, so this ALSO removes
// EXIF GPS — the "check/strip EXIF before publishing" rule, automated. We
// .rotate() first so the EXIF orientation is baked into pixels before the
// metadata (and the rotation tag) is dropped, or portrait shots would flip.
//
// Run locally after adding photos, then commit the public/photos/ output:
//   npm run optimize:photos
import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

const SRC = 'photos-src'
const OUT = 'public/photos'
const MAX_EDGE = 2000 // cap the long edge — plenty for retina, kills the MBs
const QUALITY = 78

const isImage = (f) => /\.(jpe?g|png|webp|heic|heif)$/i.test(f)

await mkdir(OUT, { recursive: true })

let files = []
try {
  files = (await readdir(SRC)).filter(isImage)
} catch {
  console.error(`No ${SRC}/ directory — drop your full-res originals there first.`)
  process.exit(1)
}

if (files.length === 0) {
  console.log(`No images in ${SRC}/ — nothing to optimize.`)
  process.exit(0)
}

let before = 0
let after = 0
for (const f of files) {
  const inPath = path.join(SRC, f)
  const outName = f.replace(/\.[^.]+$/, '.jpg')
  const outPath = path.join(OUT, outName)
  const srcSize = (await stat(inPath)).size

  await sharp(inPath)
    .rotate() // bake EXIF orientation into pixels before metadata is stripped
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(outPath)

  const outSize = (await stat(outPath)).size
  before += srcSize
  after += outSize
  console.log(
    `${f}  ${(srcSize / 1e6).toFixed(1)}MB → ${(outSize / 1e6).toFixed(2)}MB  (${outName})`,
  )
}
const pct = Math.round((1 - after / before) * 100)
console.log(
  `\nTotal: ${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(2)}MB  (−${pct}%)  · EXIF stripped`,
)
