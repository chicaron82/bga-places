import type { PlaceEntry } from '../types'

// ── BGA Places · Entry #002 ──
// The one where the verdict isn't about the place at all — it's about WHERE YOU PARK.
// A spot he'd written off for crowds, handed back by driving four lots further.
const entry: PlaceEntry = {
  slug: 'grand-beach',
  name: 'Grand Beach',
  region: 'Eastern Manitoba',
  kind: 'nature',

  visitedOn: '2026-07-18',
  driveKm: 90,

  verdict: 'bga',
  takeaway:
    'Worth the drive — then drive further: park at lot 5 and Grand Beach stops being a crowd and starts being a beach.',

  body: `I used to come here all the time, and then I stopped, because the crowding wore me down. You circle lots 1 through 3 hunting a spot, and when you finally squeeze into one you end up setting your towel in the middle of somebody else's afternoon. World-class sand, no room to actually enjoy it.

This trip I just kept driving. Lot 5 is further out than feels reasonable the first time — it's the furthest down I'd ever parked — and holy fak, it changes the entire place. Parking, no circling. Sand with real space on it. And room in the water — that's the part I didn't see coming. You're not wading around in a crowd, you're just swimming.

Same beach, same Saturday, same sunshine as the packed stretch. The only difference is a few extra minutes of driving and being willing to go past the spot where everybody else gives up.

I'm stamping it. Not because it's some big secret — because it handed me back a place I'd written off, and now it's back in the rotation.`,

  theCatch: `The facilities out at 5 are closed for the season. So if you need a washroom, you're walking back toward the exact crowd you just drove past.

That's a real trade, not a footnote — it changes the math depending on who's with you and how long you're staying. Two adults for an afternoon, easy. Little kids, or a full day with a cooler of drinks, think it through first. Further out means further from everything: bring what you need with you.`,

  photos: [
    {
      src: '/photos/PXL_20260718_221319367.jpg',
      alt: 'Lot 5: open sand as far as you can see, a green flag, and one lonely shelter way off in the distance.',
    },
    {
      src: '/photos/PXL_20260718_222717326.jpg',
      alt: 'The same beach, the same afternoon, down by lots 1–3 — a wall of umbrellas and bodies stacked to the waterline.',
    },
    {
      src: '/photos/PXL_20260718_215445101.jpg',
      alt: 'The payoff: chest-deep in Lake Winnipeg with room to float and nobody within shouting distance.',
    },
  ],
}

export default entry
