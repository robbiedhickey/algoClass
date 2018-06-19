let insertionSort = require('./insertion');

describe('insertionSort()', () => {
  it('can sort arr of integers', () => {
    let input = [5, 4, 3, 2, 1];
    let output = insertionSort(input);

    expect(output).toEqual([1, 2, 3, 4, 5]);
  });
});
