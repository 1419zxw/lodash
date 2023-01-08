const { compact } = require('../../数组/compact')

test('compact方法测试', () => {
  expect(compact([0, 1, false, 2, '', 3, undefined, 4, null, NaN])).toEqual([1, 2, 3, 4])
})