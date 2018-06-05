const Queue = require('./queue');

describe('Queue', () => {
  describe('constructor()', () => {
    test('initializes a queue', () => {
      let queue = new Queue();
      expect(queue).toBeTruthy();
    });
  });

  describe('enqueue()', () => {
    test('adds element to queue', () => {
      let queue = new Queue();
      let size = queue.enqueue(1);
      expect(size).toBe(1);
    });

    test('respects capacity', () => {
      let queue = new Queue(1);
      queue.enqueue(1);
      expect(() => queue.enqueue(2)).toThrowError();
    });
  });

  describe('dequeue()', () => {
    test('removes first element from queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.dequeue()).toBe(1);
    });

    test('returns correct count after dequeuing', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      expect(queue.count()).toBe(2);
    });

    test('can dequeue empty queue without error', () => {
      let queue = new Queue();
      let val = queue.dequeue();
      expect(queue.count()).toBe(0);
      expect(val).toBeFalsy();

      queue.enqueue(1);
      queue.dequeue();
      queue.dequeue();
      expect(queue.count()).toBe(0);
    });
  });

  describe('peek()', () => {
    test('returns first element without removing it', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toBe(1);
    });
  });

  describe('count()', () => {
    test('returns number of elements in queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.count()).toBe(2);
    });

    test('returns zero when queue is empty', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      queue.dequeue();
      expect(queue.count()).toBe(0);
    });
  });

  describe('contains()', () => {
    test('returns true when queue contains value', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.contains(1)).toBe(true);
    });

    test('returns false when queue does not contain value', () => {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.contains(2)).toBe(false);
    });
  });

  describe('until()', () => {
    test('returns number of dequeues until elem in queue is found', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.until(1)).toBe(1);
      expect(queue.until(2)).toBe(2);
      expect(queue.until(3)).toBe(3);
    });
  });
});
