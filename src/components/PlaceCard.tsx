import { Link } from 'react-router-dom'
import { MapPin, Car } from 'lucide-react'
import type { PlaceEntry } from '../types'
import { BGAStamp } from './BGAStamp'
import { PhotoSlot } from './PhotoSlot'
import { verdictLabel } from '../lib/verdict'
import { driveLine, kindLabel } from '../lib/format'

// A place on the home list — the hook is the takeaway sentence, not a score.
export function PlaceCard({ place }: { place: PlaceEntry }) {
  return (
    <Link
      to={`/place/${place.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <PhotoSlot
        photo={place.photos[0] ?? { src: '', alt: place.name }}
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-stone-400">
            {kindLabel(place.kind)}
          </span>
          {place.verdict === 'bga' ? (
            <BGAStamp size="sm" />
          ) : (
            <span className="text-xs font-medium text-stone-500">{verdictLabel(place.verdict)}</span>
          )}
        </div>
        <h3 className="font-display text-lg font-semibold text-stone-900">{place.name}</h3>
        <p className="flex-1 text-sm leading-snug text-stone-600">{place.takeaway}</p>
        <div className="mt-1 flex items-center gap-4 text-xs text-stone-400">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {place.region}
          </span>
          <span className="inline-flex items-center gap-1">
            <Car className="h-3.5 w-3.5" /> {driveLine(place.driveKm)}
          </span>
        </div>
      </div>
    </Link>
  )
}
