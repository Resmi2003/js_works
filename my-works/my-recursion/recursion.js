// recursion means a function calls that function itself.
// if we use recursive approach, then first set base condition. base condition means where the program need to stop. otherwise it will not stop.
// 1,2,3
// we can use either for loop(iterative method) or recursive approach.


// display_hello_world_n times

function display_hw(limit){   // limit==3 limit==2

    if(limit==0){     // 3==0

        return
    }

    console.log("hello world");   //hw

    display_hw(limit-1);   //dhw(2)

    
}

display_hw(3);  // 3 (first commenting started here)



// display hi 5 times

function display_hi(limit){

    if(limit==0){
        return;
    }

    console.log("hi");

    display_hi(limit-1);
    
}

display_hi(5);


// factorial of 5

function factorial(number){

    if(number==0){
        return 1;
    }

    return number*factorial(number-1);
}

console.log(factorial(5));

// the function we call will come in call stack, after all function it will come outside.

// factorial of 4

function factorial(number){

    if(number==0){
        return 1;
    }

    return number*factorial(number-1);   //4*factorial(3) = 4*6=24.
}

console.log(factorial(4));


// display_digit(123) 
// 3
// 2
// 1

function display_digit(number){

    if(number==0){
        return;
    }

    console.log(number%10);

    display_digit(Math.floor(number/10));

}

display_digit(123);


// sumOfDigit(234) => 9

function sumOfDigit(number){

    if(number==0){
        return 0;
    }

    return number%10+sumOfDigit(Math.floor(number/10));  // we call sumOfDigit again because next time we add it by removing a number.
}

console.log(sumOfDigit(234));


// sumOfNumber(5) => 1+2+3+4+5=15

function sumOfNumber(number){

    if(number==0){
        return 0;
    }

    return number+sumOfNumber(number-1);
}

console.log(sumOfNumber(5));











