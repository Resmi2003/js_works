// isPrime



function isPrime(number){

    let primeNumber = true;

    for(i=2;i<number;i++){
        if(number%i==0){
            primeNumber = false;
            break;
        }
    }

    return primeNumber;
}

console.log(isPrime(3));
console.log(isPrime(1));
console.log(isPrime(9));


