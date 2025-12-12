// Create a function factorial(num)
// return factorial of num


function factorial(num){

      let fact = 1;

       for(i=1;i<=num;i++){
      fact = fact * i;
       }

       return fact;
}

console.log(factorial(5));
console.log(factorial(6));

