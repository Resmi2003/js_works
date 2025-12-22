let numbers = [12,5,20,8,15,30,7,25,10,18];

// 1. Create a new array containing the square of each number.
let squares = numbers.map(num=>num**2);
console.log(squares);



// 2. Create a new array containing numbers less than 10.
let lessThanTen = numbers.filter(num=>num<10);
console.log(lessThanTen);



// 3. Find the average of all numbers.
let total = numbers.reduce((n1,n2)=>n1+n2);
let average = total/numbers.length;
console.log(average);





