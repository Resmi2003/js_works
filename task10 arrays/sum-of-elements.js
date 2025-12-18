// Sum of Elements
// Write a program to find the sum of all elements in an array without using reduce()

var numbers = [2,3,4,5,6,7,8,9];
var sum = 0;
for(let n of numbers){
    sum += n;
}
console.log("sum =",sum);

