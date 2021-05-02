const Hello = require('@/hello')
let actual

beforeEach(() => {
  actual = new Hello('taro')
});

describe('hello', () => {
  it('${name} to equal Hello, ${name}', () => {
    expect(actual.hello()).toBe('Hello, taro')
  })
  it('${name} to equal Bye, ${name}', () => {
    expect(actual.bye()).toBe('Bye, taro')
  })
})
