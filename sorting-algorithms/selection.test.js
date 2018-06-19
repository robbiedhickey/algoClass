let selectionSortAlgos = require('./selection');

selectionSortAlgos.forEach(selectionSort => {
  describe(`${selectionSort.name}()`, () => {
    it('can sort arr of integers', () => {
      let input = [6, 1, 8, 2, 5];
      let output = selectionSort(input);

      expect(output).toEqual([1, 2, 5, 6, 8]);
    });
  });
});
