/**
* @description 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
* @param {Object} object 要检索的对象。
* @param {Array|string} path 要获取属性的路径。
* @param {*} [defaultValue] 如果解析值是 undefined ，这值会被返回。
* @returns {*} 返回解析的值。
*/

const object = {
  a: {
    b: {
      c: 3
    },
    data: '1'
  }
}

function _get(object, path, defaultValue) {
  if (!object instanceof Object) return defaultValue

  if (typeof path === 'string') {
    path = path.match(/[^\[\].]+/g)
  }

  path.forEach((key) => {
    if (object === undefined) return defaultValue

    object = object[key] || undefined
  })

  return object === undefined ? defaultValue : object
}

console.log(_get(object, 'a.b')) // => {c: 3}
console.log(_get(object, 'a.d', 'default')) // => 'default'