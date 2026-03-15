import { describe, it, expect } from 'vitest'
import { add, multiply } from '../utils/math'

describe('Math Utils', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('multiplies numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('handles negative integers', () => {
    expect(add(-2, 5)).toBe(3)
  })
})
