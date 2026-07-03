import { ImageIcon } from 'lucide-react'
import type { PlacePhoto } from '../types'

// A real photo when there's a src; otherwise a labelled placeholder that says,
// honestly, "a shot goes here" — never a broken image, never a fake stock photo.
export function PhotoSlot({ photo, className }: { photo: PlacePhoto; className?: string }) {
  if (photo.src) {
    return <img src={photo.src} alt={photo.alt} className={className} loading="lazy" />
  }
  return (
    <div
      className={
        'flex flex-col items-center justify-center gap-2 bg-stone-100 text-stone-400 ' +
        (className ?? '')
      }
      role="img"
      aria-label={photo.alt}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      <span className="max-w-[80%] text-center text-xs leading-snug">{photo.alt}</span>
    </div>
  )
}
