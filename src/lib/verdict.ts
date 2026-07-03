import type { Verdict } from '../types'

// The verdict rendered as WORDS — Belle's Mimic guard lives here. There is
// deliberately no number, no star count, no 4.2/5 anywhere in this map. If a
// numeric rating ever tries to sneak in "just for completeness", it starts here,
// so here is where it stays out.
export const VERDICT_META: Record<Verdict, { label: string; blurb: string }> = {
  'bga': {
    label: 'Brown Guy Approved',
    blurb: 'Worth the drive. Catch and all. Go.',
  },
  'worth-it': {
    label: 'Worth the drive',
    blurb: 'Would point a friend at it without a second thought.',
  },
  'if-nearby': {
    label: 'Worth it if you’re already out that way',
    blurb: 'Not a special trip, but don’t drive past it.',
  },
  'skip-it': {
    label: 'Skip it',
    blurb: 'Not worth the gas. Saved you the drive.',
  },
}

export function verdictLabel(v: Verdict): string {
  return VERDICT_META[v].label
}
