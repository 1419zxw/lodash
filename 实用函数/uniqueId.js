/**
* @description 生成唯一ID。 如果提供了prefix，会被添加到ID前缀上。
* @param {String} prefix 要添加到ID前缀的值。 
* @returns {String} 返回唯一ID。
* @example 
* _uniqueId('contact_') // => 'contact_1'
* _uniqueId('') // => '1'
*/

const idCounter = {}

function _uniqueId(prefix = '$define$') {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0
  }

  const id = ++idCounter[prefix]

  if (prefix === '$define$') return id
  return `${prefix}${id}`
}

const id1 = _uniqueId() // => 1
const id2 = _uniqueId() // => 2
const id3 = _uniqueId('detail') // => detail_1
const id4 = _uniqueId('detail') // => detail_2