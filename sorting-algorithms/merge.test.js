let mergeSort = require('./merge');

describe('mergeSort()', () => {
  it('can sort arr of integers', () => {
    let input = [34, 83, 10, 9, 1, 4];
    let output = mergeSort(input);

    expect(output).toEqual([1, 4, 9, 10, 34, 83]);
  });
});
