// Write a javascript program using a while loop to find the smallest digit in a given number

var number = 4356;
var smallest = 9;

while(number!=0){

    let digit = number%10;
    if(digit<smallest){
        smallest = digit;

    }
    number = Math.floor(number/10);
}

console.log(`Smallest digit is ${smallest}`);
