// The BGA Places data model.
//
// The spine of every entry is the same no matter what KIND of place it is:
//   the verdict (a sentence, never a number) · the drive · the catch · the proof.
// Food is just one flavour — a diner adds `price` + `getThe`; a lake doesn't.
// That's the whole reason this is "Places", not "Eats".

/** The verdict tier — but it is ALWAYS rendered as words, never as a score.
 *  `bga` is the top: Brown Guy Approved. The seal, earned, not a star rating. */
export type Verdict = 'bga' | 'worth-it' | 'if-nearby' | 'skip-it'

/** What kind of place this is. Drives which optional fields make sense. */
export type PlaceKind = 'food' | 'nature' | 'roadside' | 'gem'

export interface PlacePhoto {
  /** Path under /public (e.g. "/photos/little-limestone-1.jpg"), or a data URI.
   *  Empty string renders a labelled placeholder slot until the real shot lands. */
  src: string
  alt: string
}

export interface PlaceEntry {
  /** URL slug — the shareable link is /#/place/<slug>. */
  slug: string
  name: string
  /** Generalised region, never a precise address. e.g. "Northern Manitoba". */
  region: string
  kind: PlaceKind

  /** Proof you actually went — ISO date (YYYY-MM-DD). No visit, no entry. */
  visitedOn: string
  /** The drive, rounded to generalise your starting point. e.g. 37 → "drove 37 km". */
  driveKm: number

  /** The tier — see Verdict. Rendered as words. */
  verdict: Verdict
  /** THE sentence. Your honest one-line call. The product. */
  takeaway: string
  /** The fuller take — one or more paragraphs (split on blank lines). */
  body: string

  /** The signature move: the honest caveat a star rating can never hold —
   *  the bug gauntlet, the road that eats oil pans, the cash-only counter. */
  theCatch?: string

  // ── food-flavour optionals (a lake leaves these out) ──
  /** e.g. "~$18 a plate, cash only". */
  price?: string
  /** e.g. "the perogies, skip the coffee". */
  getThe?: string

  photos: PlacePhoto[]
}
