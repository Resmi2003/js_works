var num1 = 100; //num1=100

var num2 = 300; //num2=300

console.log(`value before swapping num1=${num1} num2=${num2}`); //100,200

var temp = num1;
var num1 = num2;
var num2 = temp;

console.log(`value after swapping num1=${num1} num2=${num2}`);