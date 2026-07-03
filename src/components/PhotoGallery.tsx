import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import type { PlacePhoto } from '../types'
import { PhotoSlot } from './PhotoSlot'
import { assetUrl } from '../lib/asset'
import { nextPhotoIndex } from '../lib/gallery'

// Bougie or bust: a hero shot + a thumb grid, both opening a full-screen
// lightbox with caption, keyboard nav, and next/prev. Self-contained — no
// lightbox library, matching the house "own your dependencies" habit.
export function PhotoGallery({ photos }: { photos: PlacePhoto[] }) {
  const [openAt, setOpenAt] = useState<number | null>(null)
  if (photos.length === 0) return null

  const openable = (i: number) => Boolean(photos[i]?.src)
  const open = (i: number) => openable(i) && setOpenAt(i)
  const close = useCallback(() => setOpenAt(null), [])

  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenAt((cur) => (cur === null ? cur : nextPhotoIndex(photos, cur, dir))),
    [photos],
  )

  useEffect(() => {
    if (openAt === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openAt, close, step])

  const [hero, ...thumbs] = photos

  return (
    <>
      <button
        type="button"
        onClick={() => open(0)}
        className="group relative block w-full overflow-hidden rounded-2xl"
        aria-label={`Open photo: ${hero.alt}`}
      >
        <PhotoSlot photo={hero} className="aspect-[16/9] w-full object-cover transition group-hover:scale-[1.02]" />
        {hero.src && (
          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
            <Expand className="h-3.5 w-3.5" /> View
          </span>
        )}
      </button>

      {thumbs.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {thumbs.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => open(i + 1)}
              className="group overflow-hidden rounded-xl"
              aria-label={`Open photo: ${photo.alt}`}
            >
              <PhotoSlot photo={photo} className="aspect-square w-full object-cover transition group-hover:scale-105" />
            </button>
          ))}
        </div>
      )}

      {openAt !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="absolute left-4 top-5 text-sm text-white/60">
            {openAt + 1} / {photos.length}
          </span>

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); step(-1) }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); step(1) }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <img
            src={assetUrl(photos[openAt].src)}
            alt={photos[openAt].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
          />
          <p className="mt-4 max-w-xl px-4 text-center text-sm leading-snug text-white/80">
            {photos[openAt].alt}
          </p>
        </div>
      )}
    </>
  )
}
