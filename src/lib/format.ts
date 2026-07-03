// Small display helpers. Kept pure and tiny so they're trivially testable.

/** "drove 450 km" — the privacy-safe distance line. */
export function driveLine(km: number): string {
  return `drove ${km.toLocaleString('en-CA')} km`
}

/** ISO date → "Jul 2, 2026". */
export function visitLine(iso: string): string {
  // Parse as local, not UTC, so the date doesn't slip a day.
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })
}

const KIND_LABEL: Record<string, string> = {
  food: 'Food',
  nature: 'Nature',
  roadside: 'Roadside',
  gem: 'Hidden gem',
}

export function kindLabel(kind: string): string {
  return KIND_LABEL[kind] ?? kind
}
