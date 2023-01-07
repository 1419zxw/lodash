/**
* @description 创建唯一值的数组，这个数组包含所有给定数组都包含的元素
* @param {Arrays} arrays 待检查的数组
* @returns {Array} 返回一个包含所有传入数组交集元素的新数组。
* @example 
* _intersection([2, 1], [4, 2], [1, 2]);
* // => [2]
*/

// 获取每个item出现次数的记录
function getRecordHash(array) {
  const recordHash = array.reduce((hash, item) => {
    // 如果item是数组/对象 转成JSON字符串再作为key值
    if (item instanceof Object || item instanceof Array) {
      item = JSON.stringify(item)
    }

    // 记录item出现次数
    hash[item] = hash[item] ? hash[item] + 1 : 1
    return hash
  }, {})

  return recordHash
}

function _intersection(...arrays) {
  if (!arrays.length) return []

  const flattenDeep = arrays.reduce((deep, arr) => {
    deep = [...deep, ...arr]
    return deep
  }, [])

  // 获取每个item出现次数的记录hash
  const recordHash = getRecordHash(flattenDeep)
  const result = []
  for (key in recordHash) {
    // 如果item出现次数与arrays长度相等，代表arrays下每个array中都有此item元素
    if (recordHash[key] === arrays.length) result.push(JSON.parse(key))
  }
  return result
}

const result = _intersection([{name: 'zxw'}, [1, 2, 3], 1, 'abc'], [{name: 'zxw'}, [1, 2, 3], 1])
console.log(result)
// => [{naem: 'zxw'}, [1, 2, 3], 1]