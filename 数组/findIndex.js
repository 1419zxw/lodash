/**
* @description 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
* @param {Array} array 要搜索的数组 
* @param {Array|Function|Object|string} predicate 条件
* @param {Number} [fromIndex=0] 要从中搜索的开始索引。 
* @returns {Number} 返回找到元素的 索引值（index），否则返回 -1。
*
*/

function _findIndex(array, predicate, fromIndex = 0) {
  if (!Array.isArray(array)) throw new Error('请传入数组')

  let targetIndex = -1

  for (let i = fromIndex; i < array.length; i++) {
    if (targetIndex !== -1) break

    if (predicate instanceof Function && predicate(array[i])) {
      targetIndex = i
    }

    if (predicate instanceof Object && JSON.stringify(array[i]) === JSON.stringify(predicate)) {
      targetIndex = i
    }
    
    if (typeof predicate === 'string' && array[i][predicate] === true) {
      targetIndex = i
    }

    if (predicate instanceof Array) {
      for (let k in array[i]) {
        if (predicate[0] === k && predicate[1] === array[i][k]) {
          targetIndex = i
        }
      }
    }
  }

  return targetIndex
}

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
const i1 = _findIndex(users, function(o) { return o.user == 'pebbles'; });
console.log('i1', i1)
// => 2
 
// The `_.matches` iteratee shorthand.
const i2 = _findIndex(users, { 'user': 'fred', 'active': false });
console.log('i2', i2)
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
const i3 = _findIndex(users, ['active', false], 1);
console.log('i3', i3)
// => 1
 
// The `_.property` iteratee shorthand.
const i4 = _findIndex(users, 'active');
console.log('i4', i4)
// => 2