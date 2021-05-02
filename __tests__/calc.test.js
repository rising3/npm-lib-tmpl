const Calc = require('@/calc')
let actual

beforeEach(() => {
  actual = new Calc()
})

describe('calc', () => {
  it('add 1 + 2 to equal 3', () => {
    expect(actual.add(1, 2)).toBe(3)
  })
  it('sub 3 - 1 to equal 2', () => {
    expect(actual.sub(3, 1)).toBe(2)
  })
})
