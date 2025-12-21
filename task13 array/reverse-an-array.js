// Write a program to reverse an array without using built-in reverse methods.

var numbers = [1,2,3,4,5,6,7,8];
var reversedNumbers = [];
var index = 0;

for(let i=numbers.length-1;i>=0;i--){

    reversedNumbers[index] = numbers[i];
    index++;
}


console.log(reversedNumbers);
