/**
* @description 这个方法返回一个由键值对pairs构成的对象。
* @param {Array} pairs 键值对pairs。 
* @returns {Object} 返回一个新对象。
* @example 
* _fromPairs([['fred', 30], ['barney', 40]]);
* // => { 'fred': 30, 'barney': 40 }
*/

function _fromPairs(pairs) {
  if (!Array.isArray(pairs)) return {}

  try {
    return pairs.reduce((o, pair) => {
      o[pair[0]] = pair[1]
      return o
    }, {})
  } catch (error) {
    return {}
  }
}

const obj1 = _fromPairs([['fred', 30], ['barney', 40]])
console.log(obj1) // => { 'fred': 30, 'barney': 40 }

const obj2 = _fromPairs([null, ['barney', 40]])
console.log(obj2) // => {}