/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

// myStack.push(value)
// => count of stack
// add value to collection

// myStack.pop()
// => most recent element added collection
// Remove item so that it is no longer in collection

// myStack.peek()
// => most recent element added collection
// Similiar to pop, but do not remove element from collection

// myStack.count()
// => number of elements in stack


*** Additional Exercises:

// Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
// myStack.push(value)
// => "Max capacity already reached. Remove element before adding a new one."

// Create a contains method to check if a value is in the stack:
// myStack.contains('findme')
// => true/false
// What's the time complexity?

// Create an until method to get the number of pops until you get to a certain value:
// stack values - (first)2-5-7-3-6-9(last)
// myStack.until(7)
// => 4
// What's the time complexity?
 */

function Stack(capacity) {
  this._capacity = capacity || 100;
  this._storage = {};
  this._nextIndex = 0;
}

Stack.prototype.push = function(value) {
  if (this._capacity <= this.count()) {
    throw 'Max capacity already reached. Remove element before adding a new one.';
  }

  this._storage[this._nextIndex] = value;
  this._nextIndex++;
  return this.count();
};
// Time complexity: O(1)

Stack.prototype.pop = function() {
  let peeked = this.peek();
  delete this._storage[this._nextIndex - 1];
  if (this._nextIndex > 0) {
    this._nextIndex--;
  }
  return peeked;
};
// Time complexity: O(1)

Stack.prototype.peek = function() {
  return this._storage[this._nextIndex - 1];
};
// Time complexity: O(1)

Stack.prototype.count = function() {
  return this._nextIndex;
};
// Time complexity: O(1)

Stack.prototype.contains = function(val) {
  let vals = Object.values(this._storage);
  return vals.includes(val);
};
// Time complexity: O(n)

Stack.prototype.until = function(val) {
  let indexToFind = this._nextIndex;

  while (indexToFind >= 0) {
    if (this._storage[indexToFind--] === val) {
      return this._nextIndex - indexToFind - 1;
    }
  }
};
// Time complexity: O(n)

function MinStack(capacity) {
  this._capacity = capacity || 100;
  this._storage = {};
  this._nextIndex = 0;
  this._min = new Stack();
}

MinStack.prototype.push = function(value) {
  if (this._capacity <= this.count()) {
    throw 'Max capacity already reached. Remove element before adding a new one.';
  }

  if (this._min.peek() < value) {
    this._min.push(this._min.peek());
  } else {
    this._min.push(value);
  }

  this._storage[this._nextIndex] = value;
  this._nextIndex++;
  return this.count();
};
// Time complexity: O(1)

MinStack.prototype.pop = function() {
  let peeked = this.peek();
  delete this._storage[this._nextIndex - 1];
  if (this._nextIndex > 0) {
    this._nextIndex--;
  }
  this._min.pop();
  return peeked;
};
// Time complexity: O(1)

MinStack.prototype.peek = Stack.prototype.peek;
// Time complexity: O(1)

MinStack.prototype.count = Stack.prototype.count;
// Time complexity: O(1)

MinStack.prototype.contains = Stack.prototype.contains;
// Time complexity: O(n)

MinStack.prototype.until = Stack.prototype.until;
// Time complexity: O(n)

MinStack.prototype.min = function() {
  return this._min.peek();
};
// Time complexity: O(1)

/*
*** Exercises:

//1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

TODO: 2. Sort a stack so that its elements are in ascending order.

TODO: 3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

TODO: 4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */

module.exports = { Stack, MinStack };
