import { binarySearch } from '../lib/binary-search'

describe('binarySearch', function () {
  it('should return an index of the item ' +
     'if the item is present in the array', function () {
    const cases = [
      {
        item: 5,
        array: [1, 3, 5, 8],
        position: 2
      },
      {
        item: 'only',
        array: ['only'],
        position: 0
      },
      {
        item: 3,
        array: [3, 6, 9],
        position: 0
      }
    ]

    cases.forEach(({item, array, position}) =>
      binarySearch(item, array).should.equal(position))
  })

  it('should return -1 if the item is not ' +
     'present in the array', function () {
    const cases = [
      {
        item: 3,
        array: [1, 2, 5]
      },
      {
        item: 0,
        array: [1]
      },
      {
        item: 5,
        array: []
      }
    ]
    cases.forEach(({item, array}) =>
      binarySearch(item, array).should.equal(-1))
  })
})