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
  it('mul 3 * 3 to equal 9', () => {
    expect(actual.mul(3, 3)).toBe(9)
  })
  it('div 10 * 2 to equal 5', () => {
    expect(actual.div(10, 2)).toBe(5)
  })
})
