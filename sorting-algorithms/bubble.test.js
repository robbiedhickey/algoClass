let bubbleSort = require('./bubble');

describe('bubbleSort()', () => {
  it('can sort arr of integers', () => {
    let input = [5, 4, 3, 2, 1];
    let output = bubbleSort(input);

    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  it('executes in O(n) time in the best case', () => {
    let input = [1, 2, 3];
    let spy = jest.fn();
    let output = bubbleSort(input, spy);

    console.log(output);

    expect(output).toEqual([1, 2, 3]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
