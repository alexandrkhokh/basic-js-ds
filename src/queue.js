const { NotImplementedError } = require('../lib');
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
  head = null;
  tail = null;

  getUnderlyingList() {
    const copy = (node) => (node ? { value: node.value, next: copy(node.next) } : null);
    return copy(this.head);
  }

  enqueue(value) {
    const current = new ListNode(value)
    if(!this.head) {
      this.head = current
      this.tail = current
    } else {
      this.tail.next = current
      this.tail = current
    }
  }

  dequeue() {
    if(!this.head) {
      return undefined;
    }

    const current = this.head
    this.head = this.head.next;

    if(!this.head) {
      this.tail = null;
    }

    return current.value;
  }
}

module.exports = {
  Queue
};
