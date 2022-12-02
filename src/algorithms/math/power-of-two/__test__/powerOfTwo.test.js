import { powerOfTwo } from '../powerOfTwo'

describe('power of two', () => {
  it('calculate correctly', () => {
    expect(powerOfTwo(-1)).toEqual(false)
    expect(powerOfTwo(-5)).toEqual(false)
    expect(powerOfTwo(0)).toEqual(false)
    expect(powerOfTwo(1)).toEqual(true)
    expect(powerOfTwo(2)).toEqual(true)
    expect(powerOfTwo(3)).toEqual(false)
    expect(powerOfTwo(4)).toEqual(true)
    expect(powerOfTwo(16)).toEqual(true)
    expect(powerOfTwo(32)).toEqual(true)
    expect(powerOfTwo(1200)).toEqual(false)
  })
})
