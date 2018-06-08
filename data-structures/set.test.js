const { Set, whitelistFilter, blacklistFilter } = require('./set');

describe('Set', () => {
  describe('constructor()', () => {
    test('can initialize a new Set', () => {
      const set = new Set();
      expect(set).toBeTruthy();
    });
  });

  describe('add()', () => {
    test('can add a single item', () => {
      const set = new Set();
      set.add(1);
      expect(set.has(1)).toEqual(true);
    });

    test('can add items of all primitive types', () => {
      const set = new Set();
      set.add(1);
      set.add('test');
      set.add(true);
      set.add(null);
      set.add(undefined);
      expect(set.has(1)).toEqual(true);
      expect(set.has('test')).toEqual(true);
      expect(set.has(true)).toEqual(true);
      expect(set.has(null)).toEqual(true);
      expect(set.has(undefined)).toEqual(true);
    });

    test('respects capacity', () => {
      let set = new Set(1);
      set.add(1);
      expect(() => set.add(2)).toThrowError();
    });

    test('can add objects', () => {
      let set = new Set();
      let obj1 = { a: 1 };
      let obj2 = { b: 2 };
      set.add(obj1);
      set.add(obj2);
      expect(set.has(obj1)).toEqual(true);
      expect(set.count()).toEqual(2);
    });

    test('can add arrays', () => {
      let set = new Set();
      let arr1 = [1];
      let arr2 = [2];
      set.add(arr1);
      set.add(arr2);
      expect(set.has(arr1)).toEqual(true);
      expect(set.count()).toEqual(2);
    });

    test('can add functions', () => {
      let set = new Set();
      let fn1 = n => 1;
      let fn2 = n => 2;
      set.add(fn1);
      set.add(fn2);
      expect(set.has(fn1)).toEqual(true);
      expect(set.count()).toEqual(2);
    });
  });

  describe('delete()', () => {
    test('can delete a single item', () => {
      const set = new Set();
      set.add(1);
      set.delete(1);
      expect(set.has(1)).toEqual(false);
    });

    test('can delete multiple items', () => {
      const set = new Set();
      set.add(1);
      set.add(2);
      set.delete(1);
      set.delete(2);
      expect(set.has(1)).toEqual(false);
      expect(set.has(2)).toEqual(false);
    });
  });

  describe('count()', () => {
    test('returns correct count for items in set', () => {
      const set = new Set();
      set.add(1);
      expect(set.count()).toEqual(1);
      set.add(2);
      set.add(3);
      expect(set.count()).toEqual(3);
    });
    test('returns only one when adding multiple items of the same value', () => {
      const set = new Set();
      set.add(1);
      set.add(1);
      set.add(1);
      set.add(1);
      expect(set.count()).toEqual(1);
    });
  });

  describe('forEach()', () => {
    test('calls callback for each element in set', () => {
      const set = new Set();
      const cb = jest.fn();
      set.add(1);
      set.add(2);
      set.add(3);
      set.forEach(cb);
      expect(cb.mock.calls.length).toEqual(3);
    });
  });

  describe('union()', () => {
    test('returns union of two sets', () => {
      let set1 = new Set();
      set1.add(1);
      set1.add(2);
      let set2 = new Set();
      set2.add(2);
      set2.add(3);

      let union = set1.union(set2);
      expect(union.has(1)).toEqual(true);
      expect(union.has(2)).toEqual(true);
      expect(union.has(3)).toEqual(true);
    });
  });

  describe('intersection()', () => {
    test('returns intersection of two sets', () => {
      let set1 = new Set();
      set1.add(1);
      set1.add(2);
      let set2 = new Set();
      set2.add(2);
      set2.add(3);

      let intersection = set1.intersection(set2);
      expect(intersection.has(2)).toEqual(true);
      expect(intersection.has(1)).toEqual(false);
    });
  });

  describe('difference()', () => {
    test('returns difference between two sets', () => {
      let set1 = new Set();
      set1.add(1);
      set1.add(2);
      let set2 = new Set();
      set2.add(2);
      set2.add(3);

      let difference = set1.difference(set2);
      expect(difference.has(1)).toEqual(true);
      expect(difference.has(2)).toEqual(false);
    });
  });

  describe('hasSubset()', () => {
    test('returns true when subset exists in original set', () => {
      let set = new Set();
      set.add(1);
      set.add(2);
      set.add(3);
      let subset = new Set();
      subset.add(2);
      subset.add(3);

      let hasSubset = set.hasSubset(subset);
      expect(hasSubset).toEqual(true);
    });

    test('returns false when subset does not in original set', () => {
      let set = new Set();
      set.add(1);
      set.add(2);
      set.add(3);
      let subset = new Set();
      subset.add(3);
      subset.add(4);

      let hasSubset = set.hasSubset(subset);
      expect(hasSubset).toEqual(false);
    });
  });

  describe('from()', () => {
    test('can generate a set from an array', () => {
      let set = Set.from([1, 2]);
      expect(set.has(1)).toEqual(true);
      expect(set.has(2)).toEqual(true);
      expect(set.has(3)).toEqual(false);
    });
  });

  describe('toArray()', () => {
    test('can generate an array from a set', () => {
      let originalArray = [1, 2];
      let set = Set.from(originalArray);
      let resultArray = set.toArray();
      expect(resultArray).toEqual(originalArray);
    });
  });
});

describe('whitelistFilter()', () => {
  test('only returns whitelisted items in result array', () => {
    let collection = [1, 2, 3, 4];
    let whitelist = [2, 3];
    let result = whitelistFilter(collection, whitelist);
    expect(result).toEqual(whitelist);
  });
});

describe('blacklistFilter()', () => {
  test('does not return blacklisted items in result array', () => {
    let collection = [1, 2, 3, 4];
    let blacklist = [2, 3];
    let result = blacklistFilter(collection, blacklist);
    expect(result).toEqual([1, 4]);
  });
});
