const hello = require('@/hello')

describe('hello', () => {
  it('${name} to equal Hello, ${name}', () => {
    expect(hello('taro')).toBe('Hello, taro')
  })
})
