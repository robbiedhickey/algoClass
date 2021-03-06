/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

TODO: - Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
TODO: - Implement quicksort and Identify time complexity

TODO: - Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
TODO: - Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // pivot on first elem
  var pivot = arr[0];
  var lesser = [];
  var greater = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

module.exports = quickSort;
