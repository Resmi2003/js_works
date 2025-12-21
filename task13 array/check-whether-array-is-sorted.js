// Given an array of numbers, check whether the array is sorted in ascending order.

var arr = [2, 5, 8, 10, 15];
var isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted ? "Array is sorted" : "Array is not sorted");