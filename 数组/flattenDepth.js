/**
* @description 根据 depth 递归减少 array 的嵌套层级
* @param {Array} array 需要减少嵌套层级的数组。
* @param {Number} [depth=1] 最多减少的嵌套层级数。
* @returns {Array} 返回减少嵌套层级后的新数组。
* @example 
* _flattenDepth([1, [2, [3, [4]], 5]], 1)
* // => [1, 2, [3, [4]], 5]
*/

function recursionToFlatten(array, depth) {
  // 递归次数 = 减少嵌套层数
  let total = 0

  return array.reduce((arr, item) => {
    if (total < depth && Array.isArray(item)) {
      arr = [...arr, ...recursionToFlatten(item)]
    } else {
      arr.push(item)
    }
    total++
    return arr
  }, [])
}

function _flattenDepth(array, depth = 1) {
  if (!Array.isArray(array)) return []

  const result = array.reduce((arr, item) => {
    if (Array.isArray(item)) {
      arr = [...arr, ...recursionToFlatten(item, depth)]
    } else {
      arr.push(item)
    }
    return arr
  }, [])

  return result
}

const arr = _flattenDepth([1, [2, [3, [4]], 5]], 2)
console.log(arr) // => [1, 2, [3, [4]], 5]