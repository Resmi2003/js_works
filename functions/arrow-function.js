// arrow function 
// arrow function means       normal function => arrow function
// syntax
// variable = (p1,p2,p3...)=>expression
// variable = (p1,p2,p3...)=>{              // curly bracket is used if there are multiple expressions.Then if used curly bracket then return is mandatory.
     // return expression
//    }



// add
let add = (n1,n2)=>n1+n2;
console.log(add(1,2));


// subtract
let subtract = (n1,n2)=>n1-n2;
console.log(subtract(10,5));


// lastDigitMax
let lastDigitMax = (n1,n2)=>n1%10>n2%10?n1:n2;
console.log(lastDigitMax(123,456));


// lastDigitSum
let lastDigitSum = (n1,n2)=>n1%10+n2%10;
console.log(lastDigitSum(123,345));


// maxTwo
let maxTwo = (n1,n2)=>n1>n2?n1:n2;
console.log(maxTwo(5,6));


// square ,cube



// hoisting
// during lexical time,it moves function to top
// normal function hoist
// arrow function not hoist






