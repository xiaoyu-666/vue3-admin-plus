import { expect, test } from 'vitest'

test('HelloWorld', () => {
  expect.soft(1 + 1).toBe(2) // mark the test as fail and continue
  expect.soft(1 + 2).toBe(3) // mark the test as fail and continue
})
