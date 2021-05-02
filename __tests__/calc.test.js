const Calc = require('@/calc')
let actual

beforeEach(() => {
  actual = new Calc()
})

describe('calc', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(actual.add(1, 2)).toBe(3)
  })
})
