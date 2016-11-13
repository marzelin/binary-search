const NOT_FOUND = -1

/**
 * the function returns a position of an item
 * in an array or -1 if not found
 * 
 * @param {*} item item to search for
 * @param {any[]} array array to search in
 * @param {number} lowIndex [0] internal parameter
 * @param {any} highIndex [array.length - 1] internal parameter
 * @returns {number}
 */
function binarySearch(
  item: any,
  array: any[],
  lowIndex = 0,
  highIndex = array.length - 1
): number {

  if (highIndex === -1) { return NOT_FOUND }

  if (lowIndex === highIndex) {
    return item === array[lowIndex] ? lowIndex : NOT_FOUND
  }

  const middleIndex = Math.floor((lowIndex + highIndex) / 2)
  const middleItem = array[middleIndex]

  if (item === middleItem) { return middleIndex }

  return item > middleItem 
    ? binarySearch(item, array, middleIndex + 1, highIndex)
    : binarySearch(item, array, lowIndex, middleIndex - 1)
}

export {
  binarySearch
}
