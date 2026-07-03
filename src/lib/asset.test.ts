import { describe, it, expect } from 'vitest'
import { assetUrl } from './asset'

const BASE = import.meta.env.BASE_URL

describe('assetUrl', () => {
  it('returns empty input untouched', () => {
    expect(assetUrl('')).toBe('')
  })

  it('leaves absolute, data, and blob URLs untouched', () => {
    expect(assetUrl('https://x.com/a.jpg')).toBe('https://x.com/a.jpg')
    expect(assetUrl('http://x.com/a.jpg')).toBe('http://x.com/a.jpg')
    expect(assetUrl('data:image/png;base64,AAAA')).toBe('data:image/png;base64,AAAA')
    expect(assetUrl('blob:abc-123')).toBe('blob:abc-123')
  })

  it('prefixes public paths with BASE_URL, stripping a leading slash', () => {
    expect(assetUrl('/photos/a.jpg')).toBe(BASE + 'photos/a.jpg')
    expect(assetUrl('photos/a.jpg')).toBe(BASE + 'photos/a.jpg')
  })

  it('never produces a double slash from the join', () => {
    expect(assetUrl('/photos/a.jpg')).not.toContain('//photos')
  })
})
