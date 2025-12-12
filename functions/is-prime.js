// Write a function isPrime(number) return True if number is prime else return false

function isPrime(number){
    let primeNumber = true;

    for(let i=2;i<number;i++){
        if(number%i==0){
            primeNumber = false;
            break;
        }
    }

    return primeNumber;     // return is used to exit from function

}

console.log(isPrime(3));
console.log(isPrime(6));

