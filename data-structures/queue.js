/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  this._capacity = capacity || 10;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() >= this._capacity) {
    throw `Max capacity of ${
      this._capacity
    } already reached. Remove element before adding a new one.`;
  }

  this._storage[this._tail] = value;
  this._tail++;
  return this.count();
};
// Time complexity: O(1)

Queue.prototype.dequeue = function() {
  let peeked = this.peek();
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return peeked;
};
// Time complexity: O(1)

Queue.prototype.peek = function() {
  return this._storage[this._head];
};

Queue.prototype.count = function() {
  return this._tail - this._head;
};
// Time complexity: O(1)

Queue.prototype.contains = function(val) {
  let vals = Object.values(this._storage);
  return vals.includes(val);
};
// Time complexity: O(N)

Queue.prototype.until = function(val) {
  let slidingHead = this._head;

  while (slidingHead <= this._tail) {
    if (this._storage[slidingHead++] === val) {
      return slidingHead - this._head;
    }
  }
};
// Time complexity: O(N)

const { Stack } = require('./stack');

function QueueWithStacks(capacity) {
  this._capacity = capacity;
  this._inputStack = new Stack();
  this._outputStack = new Stack();
}

QueueWithStacks.prototype.enqueue = function(val) {
  if (this.count() >= this._capacity) throw 'Capacity reached';
  this._inputStack.push(val);
  return this.count();
};

QueueWithStacks.prototype.peek = function() {
  this._swapStacks();
  return this._outputStack.peek();
};

QueueWithStacks.prototype.dequeue = function(val) {
  this._swapStacks();
  return this._outputStack.pop();
};

QueueWithStacks.prototype._swapStacks = function() {
  while (this._inputStack.count() > 0) {
    this._outputStack.push(this._inputStack.pop());
  }
};

QueueWithStacks.prototype.count = function() {
  return this._inputStack.count() + this._outputStack.count();
};

/*
*** Exercises:

//TODO: 1. Implement a queue using two stacks.

TODO: 2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

TODO: 3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */

module.exports = { Queue, QueueWithStacks };
