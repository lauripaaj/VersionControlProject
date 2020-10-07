class Hello {
  
  static sayHello () {
    return 'Hey mates! Let\'s rock this boat!'
  }

  static sayGoodbye () {
    return 'Goodbye!'
  }
  
  static upTheIrons () {
    return 'Up The Irons!'
  }

  static sayCheese () {
    return 'Cheese!'
  }

  static sayGoodNightInGreek () {
    return 'Kalinihta!'
  }

  static yell(method) {
    return method.toUpperCase()
  }

  static getGreeting (option) {
    const value = (!isNaN(option) && Number.isInteger(option)) ? option : -1

    const result = value === 1 ? this.sayCheese()
      : value === 2 ? this.sayHello()
        : value === 3 ? this.sayGoodNightInGreek()
          : value === 4 ? this.sayGoodbye()
            : value === 666 ? this.upTheIrons()
              : value === 42 ? this.yellGoodbye()
                : 'Could not compute given value.'

    return result
  }
}

module.exports = Hello
