/**
* @description
* 移除数组array中所有和给定值相等的元素，这个方法会改变数组。使用_.remove 从一个数组中移除元素。
* @param {Array} array 要处理的数组
* @param {...*} [values] 要删除的值
* @returns {Array} 返回处理后的数组
* @example
*
* const array = ['a', 'b', 'c', 'a', 'b', 'c']
*
* pull(array, 'a', 'c')
* // => ['b', 'b']
*/

const basePull = require('./basePull')

function pull(array, ...values) {
  if (!Array.isArray(array)) return []

  return basePull(array, values)
}

const array = ['a', 'b', 'c', 'a', 'b', 'c']

const arr1 = pull(array, 'a', 'c')
console.log(arr1) // => ['b', 'b']