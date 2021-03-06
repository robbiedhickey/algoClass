/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

//- Implement bubble sort and Identify time complexity 

Optimizations:
// - Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
// - For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
TODO: - Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

function bubbleSort(arr, execCb = () => {}) {
  let executeAgain;

  do {
    executeAgain = false;
    execCb();
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];
      let next = arr[i + 1];
      if (curr > next) {
        arr[i] = next;
        arr[i + 1] = curr;
        executeAgain = true;
      }
    }
  } while (executeAgain);
  return arr;
}
// O(n^2)

module.exports = bubbleSort;
