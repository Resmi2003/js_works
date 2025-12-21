// Write a program to rotate an array to the right by 1 position.

var arr = [10, 20, 30, 40, 50];

var last = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = last;

console.log(arr);