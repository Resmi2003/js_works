// Write a program using a while loop to calculate the power of a number

var base = 2;
var exponent = 5;
var power = 1;
var i = 1;

while(i<=exponent){

    power = power * base;


    i++;
}

console.log(`2^5 = ${power}`);
