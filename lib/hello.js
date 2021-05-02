class Hello {
  constructor(name) {
    this.name = name
  }

  hello() {
    return `Hello, ${this.name}`
  }

  bye() {
    return `Bye, ${this.name}`
  }
}

module.exports = Hello
