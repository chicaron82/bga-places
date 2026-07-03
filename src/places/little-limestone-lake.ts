import type { PlaceEntry } from '../types'

// ── BGA Places · Entry #001 ──
// The one that proved the name should be "Places", not "Eats". Not food —
// but pure worth-the-drive, and the catch is half the story.
const entry: PlaceEntry = {
  slug: 'little-limestone-lake',
  name: 'Little Limestone Lake',
  region: 'Northern Manitoba',
  kind: 'nature',

  visitedOn: '2026-06-29',
  driveKm: 500,

  verdict: 'bga',
  takeaway:
    'One of the biggest marl lakes on Earth turns turquoise in the sun — worth the drive, bug gauntlet and all.',

  body: `Some days the water goes a blue you don't believe until you're standing in front of it. Little Limestone is a marl lake — dissolved calcite that clouds up as the day warms and throws back this milky Caribbean turquoise you do not expect this far north. When the light's right it stops being a lake you drove to and starts being a photo nobody believes you took in Manitoba.

Get out on it if you can. I put the kayak in and paddled that milky blue — water shoes, life jacket, the works — and that's when it really got me. Floating on water that colour, this far north, is not something you forget.

I'm stamping it BGA. Not because it's easy — because it's worth it anyway. That's what the seal means.`,

  theCatch: `The path in is a bouncer. That little stretch of trail between the trees before the water is a full bug gauntlet — mosquitoes and horse flies working shifts, and they do not miss. Bring the strong stuff, cover up, and don't dawdle.

And the road itself is the other test: it's a "trust your ride" situation. Go slow, read the ruts, and know whether your vehicle can make the path without getting stuck before you commit to it. Worth it — but you earn this one.`,

  photos: [
    {
      src: '/photos/little-limestone-1.jpg',
      alt: 'That marl-blue you don’t believe until you’re standing in front of it — birch, boulders, and a limestone-pebble beach.',
    },
    {
      src: '/photos/PXL_20260629_190218464.jpg',
      alt: 'Worth the drive: the turquoise caught in the side mirror on the way in.',
    },
    {
      src: '/photos/20260629_130128.jpg',
      alt: 'Down at the white pebble beach, sizing up that impossible blue.',
    },
    {
      src: '/photos/little-limestone-2.jpg',
      alt: 'Got the kayak out on it. Success.',
    },
    {
      src: '/photos/PXL_20260629_184356834.jpg',
      alt: 'Life jacket on, out on the marl water.',
    },
  ],
}

export default entry
