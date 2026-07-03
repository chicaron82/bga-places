# BGA Places — Claude Code Instructions

## What this is

Aaron's personal atlas of Manitoba spots worth the drive — **Brown Guy Approved**.
Born from a Council of Z roundtable (2026-07-02). The product is his honest
verdict, not a metric. Keep that sacred.

## The Sacred Rule — no numbers, ever

**The verdict is a sentence, never a score.** No stars, no X/5, no "4.2 avg",
no numeric rating anywhere — not even "just for completeness." The moment a
number sneaks in, this becomes a Yelp clone and the whole point dies (this was
Belle's Mimic-watch at the founding council). `Verdict` is a word-tier enum
(`src/lib/verdict.ts`); if you're tempted to add a number, don't.

## The design contract

Every entry's spine, no matter the `kind`:
1. **The verdict** — one honest sentence (`takeaway`) + its word-tier (`verdict`).
2. **The drive** — `driveKm`, always **rounded** to generalise Aaron's starting
   point. Privacy first: "drove 450 km", never a from-home map or exact address.
3. **The Catch** (`theCatch`) — the signature move. The honest caveat a rating
   can't hold. This is the feature; treat it as first-class, not an afterthought.
4. **The proof** — photos (`public/photos/`), or an honest placeholder slot.

Food is **one flavour** (`kind: 'food'` adds `price` / `getThe`). Never rebuild
the model around food — a lake is a first-class entry.

## Build as you go

Entries are files: `src/places/<slug>.ts`, default-exporting a `PlaceEntry`.
The `import.meta.glob` loader (`src/places/index.ts`) picks them up — no registry.
**Corollary trap:** the glob ingests every `.ts` in that folder, so it holds
entry files ONLY. No helpers, no tests beside them (helpers → `src/lib/`).

There is deliberately **no backlog** loaded as "unvisited debt" — Aaron's call at
the founding council. Every entry is born from a real visit. Don't add a
someday/wishlist feature that pre-loads places he hasn't been to; that
reintroduces the exact backlog-rot the design avoids.

## House rules (shared with the other kitchens)

- Files stay under ~330 lines; split before they sprawl.
- New pure function in `src/lib/` → a test comes with it (or an explicit note).
- **Type gate is `npm run build` (`tsc -b`), NOT bare `tsc --noEmit`** — the root
  tsconfig is a solution file (`files: []` + references), so `--noEmit` checks
  zero files and lies green. Same trap as roadtrip-planner / FG.

## Stack

React 19 · Vite 6 · TypeScript strict · Tailwind v3 · react-router-dom (HashRouter,
so static hosting needs no rewrite). Same stack as MEE — this can fold into MEE's
Food Road Trip Mode with no migration.

**Deploy: Vercel** (auto-deploys on push to `main`, serves from the root domain →
`vite base '/'`). GitHub Pages was the first target but got dropped — its project
subpath needed `base '/bga-places/'` and re-running its workflow collided on
duplicate `github-pages` artifacts. Vercel sidesteps both. `assetUrl()` in
`src/lib/asset.ts` resolves public photos against `BASE_URL`, so it follows the
base automatically if the deploy target ever changes again.
