// Write a program to reverse an array.

var numbers = [1,2,3,4,5];
var reversedNumbers =[];
var index = 0;

for(i=numbers.length-1;i>=0;i--){

    reversedNumbers[index] = numbers[i];
    index++;
}

console.log(reversedNumbers);
