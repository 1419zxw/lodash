/**
* @description 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
* @param {Array} array 要查询的数组 
* @returns {Array} 返回截取后的数组
* @example 
* _initial([1, 2, 3]);
* // => [1, 2]
*/

function _initial(array) {
  if (!Array.isArray(array)) throw new Error('请传入数组')

  const endIndex = array.length - 1

  return array.slice(0, endIndex)
}

const arr1 = _initial([1, 2, 3])
console.log(arr1)

const arr2 = _initial(['a', 'b', 'c'])
console.log(arr2)