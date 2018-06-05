let Stack = require('./stack');

describe('Stack', () => {
  describe('constructor()', () => {
    test('initializes new stack', () => {
      let stack = new Stack();
      expect(stack).toBeTruthy();
    });

    test('initializes new stack with default capacity of 100', () => {
      let stack = new Stack();
      expect(stack._capacity).toBe(100);
    });

    test('initializes new stack with user specified capacity', () => {
      let stack = new Stack(10);
      expect(stack._capacity).toBe(10);
    });
  });

  describe('push()', () => {
    test('adds new element to stack', () => {
      let stack = new Stack();
      let size = stack.push('1');
      expect(size).toBe(1);
    });

    test('adds 3 elements to stack', () => {
      let stack = new Stack();
      stack.push('1');
      stack.push('1');
      let size = stack.push('1');
      expect(size).toBe(3);
    });

    test('respects max capacity', () => {
      let stack = new Stack(1);
      stack.push('1');
      expect(() => stack.push('2')).toThrowError();
    });
  });

  describe('pop()', () => {
    test('returns the last added element', () => {
      let stack = new Stack();
      stack.push('1');
      stack.push('2');
      stack.push('3');
      let popped = stack.pop();

      expect(popped).toBe('3');
    });

    test('removes the last added element from stack', () => {
      let stack = new Stack();
      stack.push('1');
      stack.push('2');
      stack.push('3');
      stack.pop();

      expect(stack.count()).toBe(2);
    });
  });

  describe('peek()', () => {
    test('gets last added element', () => {
      let stack = new Stack();
      stack.push('1');
      stack.push('2');
      stack.push('3');
      let peeked = stack.peek();

      expect(peeked).toBe('3');
    });

    test('does not remove last added element', () => {
      let stack = new Stack();
      stack.push('1');
      stack.push('2');
      stack.push('3');
      stack.peek();

      expect(stack.count()).toBe(3);
    });
  });

  describe('count()', () => {
    test('returns zero when empty', () => {
      let stack = new Stack();
      expect(stack.count()).toBe(0);
    });
    test('returns correct count', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.count()).toBe(2);
    });
  });

  describe('contains()', () => {
    test('returns whether an element exists in the stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.contains(1)).toBe(true);
      expect(stack.contains(100)).toBe(false);
    });
  });

  describe('until()', () => {
    test('returns the number of pops before an element will be retrieved', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.until(1)).toBe(3);
      expect(stack.until(2)).toBe(2);
      expect(stack.until(3)).toBe(1);
    });
  });
});
