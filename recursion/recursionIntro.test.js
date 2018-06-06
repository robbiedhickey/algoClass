const {
  simpleLoop,
  recursiveLoop,
  exponent,
  recursiveExponent,
  recursiveMultiplier,
  recursiveReverse
} = require('./recursionIntro');

describe('Recursive Intro Exercises', () => {
  test('simple loop', () => {
    let result = simpleLoop(3);
    expect(result).toEqual([3, 2, 1, 0]);
  });

  test('recursive loop', () => {
    let result = recursiveLoop(3);
    expect(result).toEqual([3, 2, 1, 0]);
  });

  test('exponent', () => {
    let result = exponent(2, 10);
    expect(result).toEqual(2048);

    let result1 = exponent(10, 4);
    expect(result1).toEqual(100000);
  });

  test('recursive exponent', () => {
    let result = recursiveExponent(2, 4);
    expect(result).toEqual(16);
  });

  test('recursive multiplier', () => {
    let result = recursiveMultiplier([1, 2, 3, 4], 2);
    expect(result).toEqual([2, 4, 6, 8]);
  });

  test('recursive reverse', () => {
    let result = recursiveReverse([1, 2, 3, 4]);
    expect(result).toEqual([4, 3, 2, 1]);
  });
});
