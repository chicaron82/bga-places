import type { PlaceEntry } from '../types'

// ── BGA Places · Entry #001 ──
// The one that proved the name should be "Places", not "Eats". Not food —
// but pure worth-the-drive, and the catch is half the story.
//
// TODO(Aaron): two things only you can fill —
//   1. `driveKm` below is a placeholder round number; set your real, rounded
//      distance (it generalises where you started from — keep it blunt).
//   2. drop your real shots in /public/photos and point `photos[].src` at them.
const entry: PlaceEntry = {
  slug: 'little-limestone-lake',
  name: 'Little Limestone Lake',
  region: 'Northern Manitoba',
  kind: 'nature',

  visitedOn: '2026-07-02',
  driveKm: 450, // placeholder — set your real rounded distance

  verdict: 'bga',
  takeaway:
    'One of the biggest marl lakes on Earth turns turquoise in the sun — worth the drive, bug gauntlet and all.',

  body: `Some days the water goes a blue you don't believe until you're standing in front of it. Little Limestone is a marl lake — dissolved calcite that clouds up as the day warms and throws back this milky Caribbean turquoise you do not expect this far north. When the light's right it stops being a lake you drove to and starts being a photo nobody believes you took in Manitoba.

I'm stamping it BGA. Not because it's easy — because it's worth it anyway. That's what the seal means.`,

  theCatch: `The path in is a bouncer. That little stretch of trail between the trees before the water is a full bug gauntlet — mosquitoes and horse flies working shifts, and they do not miss. Bring the strong stuff, cover up, and don't dawdle.

And the road itself is the other test: it's a "trust your ride" situation. Go slow, read the ruts, and know whether your vehicle can make the path without getting stuck before you commit to it. Worth it — but you earn this one.`,

  photos: [
    { src: '', alt: 'Little Limestone Lake going turquoise in afternoon light' },
    { src: '', alt: 'The tree-lined path in — the bug gauntlet' },
  ],
}

export default entry
