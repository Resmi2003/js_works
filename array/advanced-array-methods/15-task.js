let numbers = [12,5,20,8,15,30,7,25,10,18];

// 1. Create a new array containing the square of each number.
let squares = numbers.map(num=>num**2);
console.log("Squares =",squares);



// 2. Create a new array containing numbers less than 10.
let lessThanTen = numbers.filter(num=>num<10);
console.log("Less than ten =",lessThanTen);



// 3. Find the average of all numbers.
let total = numbers.reduce((n1,n2)=>n1+n2);
let average = total/numbers.length;
console.log("Average =",average);



// 4. Find the smallest number in the array.
let smallestNumber = numbers.reduce((n1,n2)=>n1<n2?n1:n2);
console.log("Smallest number =",smallestNumber);



// 5. Create a new array containing only odd numbers.
let oddNumbers = numbers.filter(num=>num%2!=0);
console.log("Odd numbers =",oddNumbers);



// 6. Sort the array and display the third smallest number.
let thirdSmallestNumber = [...numbers].sort((n1,n2)=>n1-n2);
console.log("Third smallest number =",thirdSmallestNumber[2]);



// 7. Create a new array by subtracting 2 from each number.
let subtractTwo = numbers.map(num=>num-2);
console.log("Subtract two =",subtractTwo);



// 8. Find the sum of only even numbers.
let evenNumbers = numbers.filter(num=>num%2==0);
let sum = evenNumbers.reduce((n1,n2)=>n1+n2);
console.log("Even sum =",sum);



// 9. Count how many numbers are greater than the average value.
let gtAverageValue = numbers.filter(num=>num>average);
let count = gtAverageValue.length; 
console.log("Count of numbers greater than average value =",count);



// 10. Create a new array containing numbers divisible by 5.
let divisibleByFive = numbers.filter(num=>num%5==0);
console.log("Divisible by five =",divisibleByFive);



// 11. Sort the array based on descending order and display the first element.
let firstElement = [...numbers].sort((n1,n2)=>n2-n1);
console.log("First element =",firstElement[0]);



// 12. Create a new array by converting each number to a string.
let numberToString = numbers.map(num=>num.toString());
console.log("Number to string =",numberToString);



// 13. Find the difference between the maximum and minimum values.
let maximum = numbers.reduce((n1,n2)=>n1>n2?n1:n2);
let minimum = numbers.reduce((n1,n2)=>n1<n2?n1:n2);
let difference = maximum - minimum;
console.log("Difference between maximum and minimum value =",difference);



// 14. Create a new array by multiplying each number by its index value.
let multipliedByIndex = numbers.map((num,index)=>num*index);
console.log("Multiplying each number by its index value",multipliedByIndex);



// 15. Check whether all numbers are greater than 5.
let greaterThanFive = numbers.reduce((n1,n2)=>n1 && n2 >5,true);
console.log("All greater than five =",greaterThanFive);





















