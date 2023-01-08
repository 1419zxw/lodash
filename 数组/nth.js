/**
* @description 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
* @param {Array} array 要查询的数组。 
* @param {Number} [n=0] 要返回元素的索引值。
* @returns {*} 返回array数组的第n个元素。
* @example 
*
* const array = ['a', 'b', 'c', 'd']
*
* _nth(array, 1)
* // => 'b'
*
* _nth(array, -2)
* // => 'c'
*/

function _nth(array, n) {
  if (!Array.isArray(array)) return 

  n += n < 0 ? array.length : 0
  
  return array[n]
}

const array = ['a', 'b', 'c', 'd']

const res1 = _nth(array, 1)
console.log(res1) // => 'b'

const res2 = _nth(array, -2)
console.log(res2) // => 'c'