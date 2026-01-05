// Recursion

// 1. Write a recursive function to print numbers from 1 to n.
console.log("Write a recursive function to print numbers from 1 to n :");

function oneToN(number) {

    if (number == 0) {
        return;
    }
    oneToN(number - 1);
    console.log(number);

}

oneToN(5);


// 2. Write a recursive function to find the factorial of a number.
console.log("Write a recursive function to find the factorial of a number :");

function factorial(number){

    if(number==0){
        return 1;
    }

    return number*factorial(number-1);
}

console.log(factorial(5));


// 3. Write a recursive function to find the sum of first n natural numbers.
console.log("Write a recursive function to find the sum of first n natural numbers :");

function sumOfNumber(number){

    if(number==0){
        return 0;
    }

    return number+sumOfNumber(number-1);
}

console.log(sumOfNumber(5));


// 4. Write a recursive function to print numbers from n to 1.
console.log("Write a recursive function to print numbers from n to 1 :");

function nToOne(number){
    if(number==0){
        return;
    }
    console.log(number);
    nToOne(number-1);
}

nToOne(5);


// 5. Write a recursive function to find the nth Fibonacci number.
console.log("Write a recursive function to find the nth Fibonacci number :");

function fibonacci(number) {
  if (number == 0) return 0;
  if (number == 1) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));


// 6. Write a recursive function to count the number of digits in a number.
console.log("Write a recursive function to count the number of digits in a number :");

function countDigits(number) {
  if (number == 0) {
    return 0;
  }
  return 1 + countDigits(Math.floor(number / 10));
}

console.log(countDigits(1234));


// 7. Write a recursive function to reverse a string.
// 8. Write a recursive function to find the sum of elements in an array.
// 9. Write a recursive function to check whether a string is a palindrome.
// 10. Write a recursive function to find the power of a number (xⁿ).

// Nested Function ()

// 11. Write a program with a nested function where the inner function accesses a variable from the outer function and prints it.
console.log("Write a program with a nested function where the inner function accesses a variable from the outer function and prints it :");

// 11. Nested function accessing outer variable

function outerFunction() {
  let message = "Hello";

  function innerFunction() {
    console.log(message); 
  }

  innerFunction();
}

outerFunction();


// 12. Create a function calculate() that contains nested functions for addition, subtraction, and multiplication, and returns the result based on user choice.
console.log("Create a function calculate() that contains nested functions for addition, subtraction, and multiplication, and returns the result based on user choice :");

function calculate(a,b) {

  function add() {
    console.log(a + b);
  }

  function subtract() {
    console.log(a - b);
  }

  function multiply() {
    console.log(a * b);
  }

  add();
  subtract();
  multiply();
}

calculate((10),(5));


// 13. Write a nested function example to demonstrate function scope in JavaScript.
// 14. Create a function counter() using a nested function that increments and returns a count each time it is called.
// 15. Write a program using nested functions to find the square and cube of a given number.
// 16. Create a function greetUser(name) with a nested function that returns a personalized greeting message.
// 17. Write a nested function that validates a password using an inner function to check length and special characters.
// 18. Create a nested function to calculate the total and average of an array of numbers.
// 19. Write a program using nested functions where the inner function is returned and called later (closure concept).
// 20. Write a nested function example to filter even numbers from an array using an inner function.