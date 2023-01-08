const { chunk } = require('../../数组/chunk')

test('chunk方法测试1', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]])
})

// test('chunk方法测试2', () => {
//   expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([[1, 2], [3, 4] [5, 6], [7]])
// })

test('chunk方法测试3', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 1)).toEqual([[1], [2], [3], [4], [5], [6], [7]])
})