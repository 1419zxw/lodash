/**
* @description
* 移除数组array中所有和给定值相等的元素，这个方法会改变数组。使用_.remove 从一个数组中移除元素。
* @param {Array} array 要处理的数组
* @param {Array} values 要删除的值
* @returns {Array} 返回处理后的数组
*/

const remove = require('./remove')

function basePull(array, values) {
  const jsonValues = values.map((val) => JSON.stringify(val))

  console.log('values', values)
  remove(array, (val) => {
    // if (jsonValues.includes(JSON.stringify(val))) return true
    console.log('val', val)
    if (values.includes(val)) return true
  })

  return array
}

module.exports = basePull
// exports.basePull = basePull