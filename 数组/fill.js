/**
* @description 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
* Note: 这个方法会改变 array（注：不是创建新数组）。
* @param {Array} array 要填充改变的数组。 
* @param {*} value 填充给 array 的值。
* @param {Number} [start=0] 开始位置（默认0）。
* @param {Number} [end=array.length] 结束位置（默认array.length）。
* @returns {Array} 填充后的数组（改变原数组） 
* @example 
* _fill(array, 'a');
* // => ['a', 'a', 'a']
* _fill([4, 6, 8, 10], '*', 1, 3);
* // => [4, '*', '*', 10]
*/

function _fill(array, value, start, end) {
  // 必要参数校验
  if (!Array.isArray(array)) return array = []
  if (value === undefined) throw new Error('请在第二个参数传入要替换成的值')

  // 可选参数校验
  start = typeof start !== 'number' ? 0 : start
  end = typeof end !== 'number' ? array.length : end
  if (end < start) throw new Error('结束位置不能小于开始位置')

  // 开始填充
  for (let i = start; i < end; i++) {
    array[i] = value
  }
}

const array = [1, 2, 3]
_fill(array, 'a')
console.log(array)
// => ['a', 'a', 'a']

const array1 = [1, 2, 3, 4, 5]
_fill(array1, 'a', 2)
console.log(array1)
// => [1, 2, 'a', 'a', 'a']

const array2 = [1, 2, 3, 4, 5]
_fill(array2, 'a', 2, 3)
console.log(array2)
// => [1, 2, 'a', 4, 5]

