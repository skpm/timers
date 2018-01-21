const timeout = require('../timeout')

test('should call the callback after a specific time', () => {
  expect.hasAssertions()
  return new Promise(resolve => {
    const start = Date.now()
    timeout.setTimeout(() => {
      expect(Date.now() - start).toBeGreaterThanOrEqual(100)
      resolve()
    }, 100)
  })
})

test('should cancel the timeout', () => {
  const t = timeout.setTimeout(() => {
      expect(true).toBe(false)
    }, 0)

  timeout.clearTimeout(t)

  expect(true).toBe(true)
})
