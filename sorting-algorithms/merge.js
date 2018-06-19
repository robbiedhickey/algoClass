/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

TODO: - Implement recursive merge sort (you might want to write a helper function to handle the merge step) and identify time complexity
TODO: - Implement iterative merge sort and Identify time complexity

TODO: - Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
TODO: - Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
TODO: - Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

// [34, 83, 10, 9, 1, 4]
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(l, r) {
  let merged = [];
  while (l.length > 0 && r.length > 0)
    merged.push(l[0] < r[0] ? l.shift() : r.shift());
  return merged.concat(l.length ? l : r);
}

module.exports = mergeSort;
