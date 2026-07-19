import type { PlaceEntry } from '../types'

// ── BGA Places · Entry #003 ──
// The first entry that does NOT get the seal — and that's the point. Delicious
// food, no stamp: "deliciously cooked" and "worth the kilometres" are two
// different claims, and the atlas is worthless if it can't say so.
const entry: PlaceEntry = {
  slug: 'stead-ranch-steakhouse',
  name: 'Stead Ranch Steakhouse',
  region: 'Eastern Manitoba',
  kind: 'food',

  visitedOn: '2026-07-18',
  driveKm: 90,

  verdict: 'if-nearby',
  takeaway:
    'The steak is genuinely well cooked and the old barn is a room worth sitting in — but it wasn’t enough of a whoa to justify the drive on its own.',

  body: `This one sat on my food bucket list for a solid year before I finally crossed it off. It's a small place — an old barn with "Manitoba's Authentic Old West Style" printed on the menu and the aesthetic to back it up. I liked the room a lot. That part delivers.

I ran a little experiment on the order. I normally go ribeye whenever I see one, but I asked Jake what he was having first, he said ribeye, so I took the 10oz New York instead just so we could compare the two. Both of us landed in the same place: the ribeye tasted noticeably better, the New York was easier to cut. If you're only ordering one, order the ribeye.

The food came out deliciously cooked, no complaints there at all. Price ran higher than I walked in expecting — but context matters: mine came to about $75 all in after tip, and that's roughly what the same plate would have cost me at the Keg before tip.

Here's my honest call though. Deliciously cooked isn't the same thing as worth the kilometres. There wasn't a whoa moment that makes me want to drive out here just for dinner. Pair it with a beach day out this way and it's a good stop — that's how I'd do it again, and that's exactly what this tier means.`,

  theCatch: `You can't just show up. It's open a four-hour window and reservations are essentially mandatory — small room, very popular. I booked mine from the beach while I was lounging on the shore, which worked out fine; rolling up on spec would have meant driving home hungry.

Set your price expectation before you sit down, too. The Certified Angus steaks run in the forties to fifty before you add a single thing to the plate.`,

  price: '~$75 all in — 10oz New York, mushrooms, a pop, after tip. Steaks start in the forties.',
  // NB: the card renders "Get the " + this string — so it starts lowercase and
  // without an article, or you get "Get the The ribeye." (caught in render-verify).
  getThe:
    'ribeye — we ordered one of each head-to-head, and it out-tasted the New York, which only won on being easier to cut.',

  photos: [
    {
      src: '/photos/PXL_20260718_232145333.jpg',
      alt: 'The barn itself — weathered board, tin roof, and a longhorn-and-horseshoe sign reading Stead Ranch Steak House Bar and Grill.',
    },
    {
      src: '/photos/PXL_20260718_234339081.jpg',
      alt: 'The 10oz New York: proper char lines, onion rings on top, loaded baked potato and slaw alongside.',
    },
    {
      src: '/photos/PXL_20260718_232327770.jpg',
      alt: 'The menu cover — "Manitoba’s Authentic Old West Style Bar & Grill."',
    },
    {
      src: '/photos/PXL_20260718_232412166.jpg',
      alt: 'The steak page, and the house motto at the bottom: "You Aint Done It Until You Done It In The Barn."',
    },
  ],
}

export default entry
