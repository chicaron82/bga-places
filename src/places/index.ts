import type { PlaceEntry } from '../types'

// Every entry is a file in this folder that default-exports a PlaceEntry.
// "Build as you go" = drop a new <slug>.ts here and it's live — no registry,
// no backend, git is the database. (The chicharons blog pattern.)
//
// Corollary trap (same as chicharons): the glob ingests EVERY .ts here, so this
// folder holds entry files only — no helpers, no tests beside them.
const modules = import.meta.glob<{ default: PlaceEntry }>('./*.ts', { eager: true })

export const PLACES: PlaceEntry[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith('/index.ts'))
  .map(([, mod]) => mod.default)
  // Newest visit first — the freshest Saturday sits on top.
  .sort((a, b) => b.visitedOn.localeCompare(a.visitedOn))

export function getPlace(slug: string): PlaceEntry | undefined {
  return PLACES.find((p) => p.slug === slug)
}
