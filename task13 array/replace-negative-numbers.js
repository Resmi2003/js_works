// Given an array of numbers, replace negative numbers with zero.

var arr = [5, -3, 8, -1, 0, -7, 4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = 0;
  }
}

console.log(arr);