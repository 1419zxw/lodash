/**
* @description 减少一级array嵌套深度。
* @param {Array} array 需要减少嵌套层级的数组。 
* @returns {Array} 返回减少嵌套层级后的新数组。
* @example 
* _flatten([1, [2, [3, [4]], 5]]);
* // => [1, 2, [3, [4]], 5]
*/

function _flatten(array) {
  if (!Array.isArray(array)) return []

  let result = []

  array.forEach((item) => {
    if (Array.isArray(item)) {
      result = [...result, ...item]
    } else {
      result.push(item)
    }
  })

  return result
}

const arr = _flatten([1, [2, [3, [4]], 5]])
console.log(arr)