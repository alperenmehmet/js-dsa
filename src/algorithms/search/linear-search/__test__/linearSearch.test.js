import { linearSearch } from '../linearSearch'

describe('linearSearch', () => {
  it('search the array and find the target', () => {
    const numArr = [2, 5, 9, 16, 20]
    const strArr = ['a', 'c', 'd', 'x', 'm']

    expect(linearSearch(numArr, 5)).toEqual(1)
    expect(linearSearch(numArr, 16)).toEqual(3)
    expect(linearSearch(numArr, 30)).toEqual(-1)

    expect(linearSearch(strArr, 'a')).toEqual(0)
    expect(linearSearch(strArr, 'x')).toEqual(3)
    expect(linearSearch(strArr, 'b')).toEqual(-1)
  })
})
