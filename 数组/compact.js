/**
* @description
* 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
* @param {Array} array array The array to process. 
* @returns {Array} Returns the new array of compact.
* @example 
* _compact([0, 1, false, 2, '', 3]);
* // => [1, 2, 3]
*/

function _compact(array) {
  if (!Array.isArray(array)) throw new Error('请传入数组')

  const result = array.filter((item) => item)
  console.log(result)
  return result
}

_compact([0, 1, false, 2, '', 3, undefined, 4, null, NaN])
// => [1, 2, 3, 4]