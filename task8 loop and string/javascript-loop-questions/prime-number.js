// Write a javascript program using a for loop to check whether a number is a prime number

var number = 11;
var isPrime = true;

for(let i=2;i<number;i++){

    if(number%i==0){
        isPrime = false;
        break;      
    }
}

console.log(isPrime?"prime number":"not prime number");
