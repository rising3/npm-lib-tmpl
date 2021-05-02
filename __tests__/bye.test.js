const bye = require('@/bye')

describe('bye', () => {
  it('${name} to equal Bye, ${name}', () => {
    expect(bye('taro')).toBe('Bye, taro')
  })
})
