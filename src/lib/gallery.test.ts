import { describe, it, expect } from 'vitest'
import { nextPhotoIndex } from './gallery'
import type { PlacePhoto } from '../types'

const p = (src: string): PlacePhoto => ({ src, alt: src || 'placeholder' })

describe('nextPhotoIndex', () => {
  const three = [p('a.jpg'), p('b.jpg'), p('c.jpg')]

  it('steps forward', () => {
    expect(nextPhotoIndex(three, 0, 1)).toBe(1)
    expect(nextPhotoIndex(three, 1, 1)).toBe(2)
  })

  it('steps backward', () => {
    expect(nextPhotoIndex(three, 2, -1)).toBe(1)
    expect(nextPhotoIndex(three, 1, -1)).toBe(0)
  })

  it('wraps around both ends', () => {
    expect(nextPhotoIndex(three, 2, 1)).toBe(0) // last → first
    expect(nextPhotoIndex(three, 0, -1)).toBe(2) // first → last
  })

  it('skips placeholder slots with no src', () => {
    const mixed = [p('a.jpg'), p(''), p('c.jpg')]
    expect(nextPhotoIndex(mixed, 0, 1)).toBe(2) // skips the empty middle
    expect(nextPhotoIndex(mixed, 2, -1)).toBe(0) // skips it backward too
    expect(nextPhotoIndex(mixed, 0, -1)).toBe(2) // wraps past the empty
  })

  it('returns current when no other photo has an image', () => {
    const lonely = [p('a.jpg'), p(''), p('')]
    expect(nextPhotoIndex(lonely, 0, 1)).toBe(0)
    expect(nextPhotoIndex(lonely, 0, -1)).toBe(0)
  })

  it('handles a single photo', () => {
    expect(nextPhotoIndex([p('a.jpg')], 0, 1)).toBe(0)
    expect(nextPhotoIndex([p('a.jpg')], 0, -1)).toBe(0)
  })
})
