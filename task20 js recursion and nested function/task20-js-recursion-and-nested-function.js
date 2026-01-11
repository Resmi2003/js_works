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
console.log("Create a function greetUser(name) with a nested function that returns a personalized greeting message :");

function greet(username){
  function message(text){
    return `hello ${username} ${text}`;
  }
  return message;   
}

console.log(greet("vipin")("goodmorning"));


// 17. Write a nested function that validates a password using an inner function to check length and special characters.
// 18. Create a nested function to calculate the total and average of an array of numbers.
// 19. Write a program using nested functions where the inner function is returned and called later (closure concept).
// 20. Write a nested function example to filter even numbers from an array using an inner function.








// 7. Write a recursive function to reverse a string.
console.log("Write a recursive function to reverse a string :");

function reverseString(str) {
  if (str == "") return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));


// 8. Write a recursive function to find the sum of elements in an array.
console.log("Write a recursive function to find the sum of elements in an array :");

function sumArray(arr, index = 0) {
  if (index == arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5]));


// 9. Write a recursive function to check whether a string is a palindrome.
console.log("Write a recursive function to check whether a string is a palindrome :");

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] != str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


// 10. Write a recursive function to find the power of a number (xⁿ).
console.log(" Write a recursive function to find the power of a number (xⁿ) :");

function power(x, n) {
  if (n == 0) return 1;
  return x * power(x, n - 1);
}

console.log(power(2, 5));


// 13. Write a nested function example to demonstrate function scope in JavaScript.
console.log("Write a nested function example to demonstrate function scope in JavaScript :");

function outer() {
  let value = 10;

  function inner() {
    console.log(value);
  }

  inner();
}

outer();


// 14. Create a function counter() using a nested function that increments and returns a count each time it is called.
console.log("Create a function counter() using a nested function that increments and returns a count each time it is called :");

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const countFn = counter();
console.log(countFn());
console.log(countFn());
console.log(countFn());


// 15. Write a program using nested functions to find the square and cube of a given number.
console.log("Write a program using nested functions to find the square and cube of a given number :");

function squareCube(num) {

  function square() {
    return num * num;
  }

  function cube() {
    return num * num * num;
  }

  console.log(square(), cube());
}

squareCube(3);


// 17. Write a nested function that validates a password using an inner function to check length and special characters.
console.log("Write a nested function that validates a password using an inner function to check length and special characters :");

function validatePassword(password) {

  function isValid() {
    return password.length >= 8 && /[@#$%]/.test(password);
  }

  return isValid();
}

console.log(validatePassword("Pass@123"));
console.log(validatePassword("pass123"));


// 18. Create a nested function to calculate the total and average of an array of numbers.
console.log("Create a nested function to calculate the total and average of an array of numbers :");

function totalAndAverage(arr) {

  function total() {
    return arr.reduce((sum, num) => sum + num, 0);
  }

  let sum = total();
  let average = sum / arr.length;

  console.log(sum, average);
}

totalAndAverage([10, 20, 30]);


// 19. Write a program using nested functions where the inner function is returned and called later (closure concept).
console.log("Write a program using nested functions where the inner function is returned and called later (closure concept) :");

function greet(name) {

  return function () {
    console.log("Hello " + name);
  };

}

const greetUser = greet("Anu");
greetUser();


// 20. Write a nested function example to filter even numbers from an array using an inner function.
console.log("Write a nested function example to filter even numbers from an array using an inner function :");

function filterEven(arr) {

  function isEven(num) {
    return num % 2 == 0;
  }

  return arr.filter(isEven);
}

console.log(filterEven([1, 2, 3, 4, 5, 6]));


