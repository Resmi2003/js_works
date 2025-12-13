// Factorial 

function factorial(number){

    fact = 1;
     for(i=1;i<=number;i++){
        fact = fact * i;

     }

     return fact;
}



console.log(factorial(5));
