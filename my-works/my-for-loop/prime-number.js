// Check given  number is prime number or not

var number = 27;
var isPrime = true;

for(let i=2;i<number;i++){

    if(number%i==0){
        isPrime = false;
        break;     
    }
}

console.log(isPrime?"prime number":"not prime number");
