const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this._stack = []
  }
  push(element) {
    this._stack.push(element)

    return this._stack
  }

  pop() {
    return this._stack.pop()
  }

  peek() {
    const lastElement = this._stack.length - 1
    
    return this._stack[lastElement]
  }
}

module.exports = {
  Stack
};
