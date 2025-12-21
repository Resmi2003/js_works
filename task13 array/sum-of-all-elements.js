// Given an array of numbers, display the sum of all elements using a loop.

var numbers = [1,2,3,4,5,6];
var sum = 0;

for(let n of numbers){
    sum = sum + n;
}

console.log("Sum =",sum);
