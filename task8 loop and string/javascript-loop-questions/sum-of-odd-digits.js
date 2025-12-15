// Write a program using a while loop to find the sum of odd digits in a given number.

var number = 12345;
var sum = 0;

while (number != 0) {
    
    var digit = number % 10;

    if (digit % 2 != 0) {
        sum = sum + digit;
    }

    number = Math.floor(number / 10);



}

console.log(sum);
