/**
* @description 创建一个新数组，将array与任何数组 或 值连接在一起。
* @param {...*} [values] The values to concatenate.
* @returns {Array} Returns the new concatenated array.
*/

function _concat(...args) {
  if (!args.length) return []

  const result = []
  args.forEach((i1) => {
    if (Array.isArray(i1)) {
      i1.forEach((i2) => {
        result.push(i2)
      })
    } else {
      result.push(i1)
    }
  })

  console.log(result)
}

_concat([1, 2, 3], 4, [5], [[6]], {})
_concat()