import type { PlacePhoto } from '../types'

// Extracted from PhotoGallery so the wraparound logic is a pure, testable unit
// instead of buried in a setState callback. Walks `dir` from `current`, skipping
// placeholder slots (no `src`), wrapping around the ends. Returns `current`
// unchanged if no other photo qualifies (e.g. it's the only real image).
export function nextPhotoIndex(
  photos: PlacePhoto[],
  current: number,
  dir: 1 | -1,
): number {
  const n = photos.length
  for (let k = 1; k <= n; k++) {
    // clear positive-modulo: ((x % n) + n) % n keeps the index in [0, n)
    const i = (((current + dir * k) % n) + n) % n
    if (photos[i]?.src) return i
  }
  return current
}
