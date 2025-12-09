// Check if a number is prime

var number = 29;
var isPrime = true;

for(let i=2;i<number;i++){

    if(number%i==0){
        isPrime = false;
        break;      
    }
}

console.log(isPrime?"prime number":"not prime number");
