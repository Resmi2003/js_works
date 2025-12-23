let numbers = [12,5,20,8,15,30,7,25,10,18];

// 1. Create a new array by tripling each number.
let tripling = numbers.map(num=>num*3);
console.log("Tripling each number =",tripling);



// 2. Create a new array containing numbers greater than the median value of the array.
let sorted = [...numbers].sort((n1,n2)=>n1-n2);
// console.log(sorted);
let median = (sorted[4] + sorted[5]) / 2;
// console.log(median);
let numbersGtMedian = sorted.filter(num=>num>median);
console.log("Numbers greater than median =",numbersGtMedian);



// 3. Find the sum of numbers at even index positions.
let evenIndexPositions = numbers.filter((num,index)=>index%2==0);
// console.log(evenIndexPositions);
let sumOfNumAtEvenIndex = evenIndexPositions.reduce((n1,n2)=>n1+n2);
console.log("Sum of numbers at even index positions =",sumOfNumAtEvenIndex);



// 4. Create a new array containing numbers whose square is greater than 200.
let squaresGtTwoHundred = numbers.filter(num=>num**2>200);
console.log("Squares greater than two hundred =",squaresGtTwoHundred);










