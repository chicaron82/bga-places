import { PLACES } from '../places'
import { PlaceCard } from '../components/PlaceCard'

export function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          BGA Places
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-stone-600">
          Hidden gems, diners, and roadside finds around Manitoba — each with one
          honest call: <span className="italic">is it worth the drive?</span> No stars.
          Just my take, the catch, and the kilometres it cost me.
        </p>
      </header>

      {PLACES.length === 0 ? (
        <p className="text-stone-500">No spots logged yet. The summer's young.</p>
      ) : (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACES.map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </section>
      )}

      <footer className="mt-16 border-t border-stone-200 pt-6 text-sm text-stone-400">
        Built as I go — every entry is a Saturday I actually spent.
      </footer>
    </main>
  )
}
