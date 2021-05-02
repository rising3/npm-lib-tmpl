const hello = require('@/hello')

describe('hello', () => {
  it('${name} to equal Hell, ${name}', () => {
    expect(hello('taro')).toBe('Hell, taro')
  })
})
