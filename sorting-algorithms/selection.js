/*
SELECTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

*** Exercises

// - Implement selection sort and Identify time complexity

Stable Variant
TODO: - Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
TODO: - Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
TODO: - Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
TODO: - Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?

*/
// [6,1,8,2,5]
function selectionSortNewArray(arr) {
  let sorted = [];

  do {
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min && !sorted.includes(arr[i])) {
        min = arr[i];
        execAgain = true;
      }
    }

    sorted.push(min);
  } while (sorted.length !== arr.length);
  return sorted;
}

// [6,1,8,2,5]
function selectionSortInPlace(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    // assume current index is new min
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        execAgain = true;
      }
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

module.exports = [selectionSortNewArray, selectionSortInPlace];
