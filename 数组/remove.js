/**
* @description 
* 移除数组中predicate（断言）返回为真值的所有元素（改变原数组），并返回移除元素组成的数组。
* predicate（断言） 会传入3个参数： (value, index, array)。
* @param {Array} array 要处理的数组 
* @param {Function} predicate 每次迭代调用的函数
* @returns {Array}  返回移除元素组成的数组
 * @example
 *
 * const array = [1, 2, 3, 4]
 * const evens = remove(array, n => n % 2 == 0)
 *
 * console.log(array)
 * // => [1, 3]
 *
 * console.log(evens)
 * // => [2, 4]
 */
function remove(array, predicate) {
  if (!Array.isArray(array)) return []

  const removeItems = []
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      removeItems.push(array[i])
    } else {
      newArray.push(array[i])
    }
  }
  array = newArray
  console.log('array', array);
  return removeItems
}

const array = [1, 2, 3, 4]
const evens = remove(array, n => n % 2 == 0)
console.log(array)
// => [1, 3]
console.log(evens)
// => [2, 4]

module.exports = remove