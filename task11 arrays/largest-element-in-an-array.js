// Write a javascript program to find the largest element in an array.

var numbers = [1,2,3,4,5,6,7,8];
var largestNumber = 0;

for(let n of numbers){
    if(n>largestNumber){
        largestNumber = n;
    }
}

console.log("largest element=",largestNumber);






