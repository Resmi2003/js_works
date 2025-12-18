// Largest and smallest element
// Find the largest and smallest number in an array using a loop.

var numbers = [2,3,4,5,6,7,8,9];
var smallestNumber = numbers[0];
var largestNumber = 0;
for(let n of numbers){
    if(n<smallestNumber){
        smallestNumber = n;
    }
    
    else if(n>largestNumber){
        largestNumber = n;
    }
}


console.log("smallest number =",smallestNumber);
console.log("largest number =",largestNumber);


