//1. Write a function that loops through the numbers n down to 0.
//    If you haven't done so try using a while loop to do this.
function simpleLoop(num) {
  let result = [num];
  while (num--) {
    result.push(num);
  }
  return result;
}

//2. Next, try looping just like above except using recursion
function recursiveLoop(num) {
  if (num === 0) return num;
  return [num].concat(recursiveLoop(--num));
}

//3.Write a function 'exponent' that takes two arguments base, and expo,
//  uses a while loop to return the exponenet value of the base.
function exponent(base, exp) {
  let ret = base;
  while (exp--) {
    ret = ret * base;
  }
  return ret;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base,
//    and expo, recursively returns exponent value of the base.
function recursiveExponent(base, exp) {
  if (exp === 1) {
    return base;
  }

  return base * recursiveExponent(base, --exp);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num',
//    and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  if (arr.length === 1) {
    return arr * num;
  }

  return [arr.splice(0, 1) * num].concat(recursiveMultiplier(arr, num--));
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to
//    return its contents in reverse
function recursiveReverse(arr) {
  if (arr.length === 1) return arr;

  return [arr.pop()].concat(recursiveReverse(arr));
}

module.exports = {
  simpleLoop,
  recursiveLoop,
  exponent,
  recursiveExponent,
  recursiveMultiplier,
  recursiveReverse
};
