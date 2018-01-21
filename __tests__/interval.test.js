const interval = require('../interval')

test('should call the callback multiple times after a specific time', () => {
  expect.assertions(2)
  return new Promise(resolve => {
    const start = Date.now()
    let count = 0
    const i = interval.setInterval(() => {
      count += 1
      expect(Date.now() - start).toBeGreaterThanOrEqual(10 * count)
      if (count == 2) {
        interval.clearInterval(i)
        resolve()
      }
    }, 10)
  })
})
