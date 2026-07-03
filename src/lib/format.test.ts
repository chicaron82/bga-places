import { describe, it, expect } from 'vitest'
import { driveLine, visitLine, kindLabel } from './format'

describe('driveLine', () => {
  it('formats the rounded distance', () => {
    expect(driveLine(37)).toBe('drove 37 km')
    expect(driveLine(500)).toBe('drove 500 km')
  })
})

describe('visitLine', () => {
  it('parses as local so the day never slips (the UTC-parse bug)', () => {
    const out = visitLine('2026-06-29')
    expect(out).toContain('29')
    expect(out).toContain('2026')
  })

  it('handles a year boundary without slipping', () => {
    expect(visitLine('2026-01-01')).toContain('2026')
  })
})

describe('kindLabel', () => {
  it('maps known kinds', () => {
    expect(kindLabel('food')).toBe('Food')
    expect(kindLabel('nature')).toBe('Nature')
    expect(kindLabel('gem')).toBe('Hidden gem')
  })

  it('falls back to the raw kind when unknown', () => {
    expect(kindLabel('spaceport')).toBe('spaceport')
  })
})
