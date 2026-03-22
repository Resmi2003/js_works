function primeNumber(number){
    var isPrime = true;
    for(let i=2;i<number;i++){
        if(number%i==0){
            isPrime=false;
            break;
        }
    }

    return isPrime;
    
}

console.log(primeNumber(3));

