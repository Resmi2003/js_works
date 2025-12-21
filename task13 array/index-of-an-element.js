// Write a program to find the index of an element without using built-in index methods.

var arr = [10, 20, 30, 40, 50];
var search = 30;
var index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == search) {
    index = i;
    break;
  }
}

console.log(index);