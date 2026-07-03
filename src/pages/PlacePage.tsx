import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, MapPin, Car, CalendarDays, TriangleAlert, Utensils, Check, Share2 } from 'lucide-react'
import { getPlace } from '../places'
import { BGAStamp } from '../components/BGAStamp'
import { PhotoSlot } from '../components/PhotoSlot'
import { VERDICT_META } from '../lib/verdict'
import { driveLine, visitLine, kindLabel } from '../lib/format'

function ShareButton() {
  const [copied, setCopied] = useState(false)
  async function share() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard blocked — leave the URL bar as the fallback, no fake success
    }
  }
  return (
    <button
      onClick={share}
      className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
    >
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? 'Link copied' : 'Share this spot'}
    </button>
  )
}

function MetaChip({ icon: Icon, children }: { icon: typeof MapPin; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-stone-500">
      <Icon className="h-4 w-4" /> {children}
    </span>
  )
}

export function PlacePage() {
  const { slug } = useParams<{ slug: string }>()
  const place = slug ? getPlace(slug) : undefined

  if (!place) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-20 text-center">
        <p className="text-lg text-stone-600">That spot isn’t on the map yet.</p>
        <Link to="/" className="mt-4 inline-block text-stamp underline">
          Back to all places
        </Link>
      </main>
    )
  }

  const verdict = VERDICT_META[place.verdict]
  const [hero, ...rest] = place.photos

  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800">
        <ArrowLeft className="h-4 w-4" /> All places
      </Link>

      {hero && (
        <PhotoSlot photo={hero} className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover" />
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-wide text-stone-400">
          {kindLabel(place.kind)}
        </span>
        {place.verdict === 'bga' && <BGAStamp />}
      </div>

      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        {place.name}
      </h1>

      {/* The verdict — a sentence, the product. Never a number. */}
      <p className="mt-4 border-l-4 border-stamp bg-stamp-soft/50 py-3 pl-4 font-display text-xl italic leading-snug text-stone-800">
        “{place.takeaway}”
      </p>
      <p className="mt-2 text-sm font-medium text-stamp">{verdict.label} — {verdict.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        <MetaChip icon={MapPin}>{place.region}</MetaChip>
        <MetaChip icon={Car}>{driveLine(place.driveKm)}</MetaChip>
        <MetaChip icon={CalendarDays}>Visited {visitLine(place.visitedOn)}</MetaChip>
      </div>

      {(place.price || place.getThe) && (
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 rounded-xl bg-stone-50 p-4 ring-1 ring-stone-200">
          {place.getThe && (
            <MetaChip icon={Utensils}>Get the {place.getThe}</MetaChip>
          )}
          {place.price && <span className="text-sm text-stone-500">{place.price}</span>}
        </div>
      )}

      <div className="prose prose-stone mt-6 max-w-none">
        {place.body.split('\n\n').map((para, i) => (
          <p key={i} className="text-[17px] leading-relaxed text-stone-700">
            {para}
          </p>
        ))}
      </div>

      {/* The signature move — the honest caveat no star rating can hold. */}
      {place.theCatch && (
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
          <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-amber-900">
            <TriangleAlert className="h-5 w-5" /> The Catch
          </h2>
          {place.theCatch.split('\n\n').map((para, i) => (
            <p key={i} className="mt-2 text-[15px] leading-relaxed text-amber-900/90">
              {para}
            </p>
          ))}
        </section>
      )}

      {rest.length > 0 && (
        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {rest.map((photo, i) => (
            <PhotoSlot key={i} photo={photo} className="aspect-[4/3] w-full rounded-xl object-cover" />
          ))}
        </section>
      )}

      <div className="mt-10 border-t border-stone-200 pt-6">
        <ShareButton />
      </div>
    </main>
  )
}
