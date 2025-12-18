// Write a program to find the smallest element in an array.

var numbers = [1,2,3,4,5];
var smallestNumber = numbers[0];

for(let n of numbers){
    if(n<smallestNumber){
        smallestNumber = n;
    }
}

console.log("smallest element=",smallestNumber);
