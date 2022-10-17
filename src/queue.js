const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstElement = null
    this.lastElement = null
  }
  
  getUnderlyingList() {
    if (!this.firstElement) return null
    
    return this.firstElement
  }
  
  enqueue(value) {
    const listNode = new ListNode(value)
    
    if (!this.firstElement) {
      this.firstElement = listNode
      this.lastElement = listNode
    } else {
      this.lastElement.next = listNode
      this.lastElement = listNode
    }
  }

  dequeue() {
    if (!this.firstElement) {
      return null;
    }

    const temp = this.firstElement;

    if (this.firstElement === this.lastElement) {
      this.lastElement == null;
    }

    this.firstElement = this.firstElement.next;

    return temp.value;
  }
}

module.exports = {
  Queue
};
