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
    this.firstElement = null;
  }
  getUnderlyingList() {
    return this.firstElement;
  }

  enqueue(value) {
    if (this.firstElement == null) {
      this.firstElement = new ListNode(value);
    } else {
      let element = this.firstElement;
      while (element.next != null) {
        element = element.next;
      }
      let _value = new ListNode(value);
      element.next = _value;
    }
  }

  dequeue() {
    let element = this.firstElement;
    this.firstElement = element.next;
    return element.value;
  }
}

module.exports = {
  Queue
};
