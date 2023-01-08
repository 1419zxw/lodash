/**
* @description
* 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
* 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
* @param {Array} array array The array to process.
* @param {number} [size=1] The length of each chunk
* @returns {Array} Returns the new array of chunks.
* @example 
* _chunk([1, 2, 3, 4, 5, 6, 7], 3)
* // => [[1, 2, 3], [4, 5, 6], [7]]
*/

function _chunk(array, size = 1) {
  if (!Array.isArray(array)) throw new Error('请传入数组')
  if (!Number.isInteger(size)) throw new Error('请传入整数')

  // 块总数
  const total = Math.ceil(array.length / size)

  // 索引
  let index = 0
  // 结果
  const result = []

  for (let i = 0; i < total; i++) {
    // 从记录的索引开始截取，到索引+size停止
    result[i] = array.slice(index, index += size)
  }
  return result
}

_chunk([1, 2, 3, 4, 5, 6, 7], 3)
// => [[1, 2, 3], [4, 5, 6], [7]]
_chunk([1, 2, 3, 4, 5, 6, 7], 2)
// => [[1, 2], [3, 4] [5, 6], [7]]

exports.chunk = _chunk