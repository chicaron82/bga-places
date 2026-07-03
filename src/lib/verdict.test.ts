import { describe, it, expect } from 'vitest'
import { VERDICT_META, verdictLabel } from './verdict'
import type { Verdict } from '../types'

const ALL: Verdict[] = ['bga', 'worth-it', 'if-nearby', 'skip-it']

describe('verdict', () => {
  it('labels the top verdict as the Brown Guy Approved seal', () => {
    expect(verdictLabel('bga')).toBe('Brown Guy Approved')
  })

  it('has a label and a blurb for every verdict tier', () => {
    for (const v of ALL) {
      expect(VERDICT_META[v].label).toBeTruthy()
      expect(VERDICT_META[v].blurb).toBeTruthy()
    }
  })

  // The Sacred Rule (Belle's Mimic-watch): the verdict is a SENTENCE, never a
  // number. This guards it structurally — if anyone adds a digit to a label or
  // blurb "just for completeness", this test goes red before it ships.
  it('never renders a number anywhere in a verdict (no stars, no X/5)', () => {
    for (const v of ALL) {
      expect(VERDICT_META[v].label).not.toMatch(/\d/)
      expect(VERDICT_META[v].blurb).not.toMatch(/\d/)
    }
  })
})
