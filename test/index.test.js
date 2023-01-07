const testFn = require('./index')
const { test1, test2 } = testFn

test('test1-300元', () => {
  expect(test1(300)).toBe('有钱人')
})

test('test2-900元', () => {
  expect(test2(900)).toBe('一千块都不给我')
})