// Function with parameter and return value

// Create a function cube with one parameter num1 return cube of number


function cube(num1){

    return num1**3;

}


console.log(cube(5));   
console.log(cube(7));





// Create a function isOdd with one parameter num return true if number is odd
// else return false

function isOdd(num){

    return num%2!=0?true:false;
}

console.log(isOdd(11));
console.log(isOdd(18));



// Create a function numberCheck with one parameter num function return
// +ve if number is +ve number
// -ve if number is negative number
// zero if number is zero

function numberCheck(num){

    if(num>0){
        return "+ve";
    }

    else if(num<0){
        return "-ve";
    }

    else if(num==0){
        return "zero";
    }

    else{
        return "invalid";
    }
       
    
}


console.log(numberCheck(3));
console.log(numberCheck(-1));
console.log(numberCheck(0));






