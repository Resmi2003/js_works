// Sum of digits of a number

function sumOfDigits(number){

    let sum = 0;
    for(;number!=0;){
           
        let digit = number%10;
        sum = sum + digit;
        number = Math.floor(number/10);
    }

    return sum;
}


console.log(sumOfDigits(1234));
