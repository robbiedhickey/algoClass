/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/
module.exports = function reverse(str) {
  if (str.length === 1) return str;
  let lastChar = str.charAt(str.length - 1);
  let allButLast = str.slice(0, str.length - 1);
  return lastChar.concat(reverse(allButLast));
};
