# BGA Places

**Brown Guy Approved** — honest, worth-the-drive verdicts on Manitoba's hidden
gems, diners, and roadside finds. My palate and my read as the product, not
another star-rating clone.

The signature move: every place gets one honest sentence — *is it worth the
drive?* — plus **The Catch** (the bug gauntlet, the mud road, the cash-only
counter) that a star rating could never hold. Food is just one flavour of entry;
a lake and a diner live side by side.

## Adding a place (build as you go)

Drop a file in `src/places/<slug>.ts` that default-exports a `PlaceEntry`
(see `src/types.ts`). That's it — no registry, no backend. Git is the database.
The home list and its shareable page at `/#/place/<slug>` appear automatically.

Only two things need your hands on each entry:
- `driveKm` — your **rounded** distance (it generalises where you started; keep it blunt)
- real photos in `public/photos/`, pointed at by `photos[].src` (empty `src` renders an honest placeholder)

## Stack

React 19 · Vite 6 · TypeScript (strict) · Tailwind v3 · HashRouter — the same
house stack as MEE by design, so a later fold into MEE's Food Road Trip Mode is
a stack-compatible lift rather than a rewrite. (That fold hasn't been designed
or validated against MEE's actual structure yet — the stack match is the intent,
not a proven no-op.)

```bash
npm install
npm run dev      # local preview
npm run build    # tsc -b && vite build — the real type gate
```

## Deploy

Hosted on **Vercel** (auto-deploys on push to `main`). Vercel serves from the
root domain, so `vite base` is `'/'` and HashRouter needs no rewrite rules — no
`vercel.json` required. Every entry stays shareable at `<domain>/#/place/<slug>`.
