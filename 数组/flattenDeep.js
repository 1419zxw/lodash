/**
* @description 将array递归为一维数组。
* @param {Array} array 需要处理的数组。
* @returns {Array} 返回一个的新一维数组。
* @example 
* _flattenDeep([1, [2, [3, [4]], 5]])
* // => [1, 2, 3, 4, 5]
*/

function recursionToFlatten(array) {
  return array.reduce((arr, item) => {
    if (Array.isArray(item)) {
      arr = [...arr, ...recursionToFlatten(item)]
    } else {
      arr.push(item)
    }
    return arr
  }, [])
}

function _flattenDeep(array) {
  if (!Array.isArray(array)) return []

  const result = array.reduce((arr, item) => {
    if (Array.isArray(item)) {
      arr = [...arr, ...recursionToFlatten(item)]
    } else {
      arr.push(item)
    }
    return arr
  }, [])

  return result
}

const arr = _flattenDeep([1, [2, [3, [4]], 5]])
console.log(arr)