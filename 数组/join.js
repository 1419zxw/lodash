/**
* @description 将 array 中的所有元素转换为由 separator 分隔的字符串。
* @param {Array} array 要分割的数组 
* @param {String} [separator=','] 分隔符，默认',' 
* @returns {String} 返回分割后的字符串
* @example 
* _join(['a', 'b', 'c'], '~');
* // => 'a~b~c'
*/

function _join(array, separator) {
  if (!Array.isArray(array)) return ''

  separator = typeof separator === 'string' ? separator : ','

  return array.join(separator)
}

const str1 = _join(['a', 'b', 'c'], '~')
console.log(str1) // => 'a~b~c'

const str2 = _join(['a', 'b', 'c'])
console.log(str2) // => 'a,b,c'