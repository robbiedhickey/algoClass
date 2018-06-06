const factorial = require('./factorial');

describe('factorial', () => {
  test('should calculate factorial of n', () => {
    let result = factorial(4);
    expect(result).toEqual(24);
  });
});
