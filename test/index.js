function test1 (money) {
  return money >= 200 ? '有钱人' : '两百块都不给我'
}

function test2 (money) {
  return money >= 1000 ? '土豪' : '一千块都不给我'
}

module.exports = {
  test1,
  test2
}