// Reverse an array
// Reverse an array without using the reverse () method.

var numbers = [1,2,3,4,5,6];
var reversedNumbers = [];
var index = 0;

for(let i=numbers.length-1;i>=0;i--){
    reversedNumbers[index] = numbers[i];
    index ++;
 
}

console.log(reversedNumbers);
