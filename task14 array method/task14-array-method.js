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



// 5. Find the maximum value after sorting the array.
let newSorted = [...numbers].sort((n1,n2)=>n1-n2);
// console.log(newSorted);
let maxValue = newSorted.reduce((n1,n2)=>n1>n2?n1:n2);
console.log("Maximum value after sorting the array =",maxValue);



// 6. Count how many numbers are less than the average value.
let total = numbers.reduce((n1,n2)=>n1+n2);
let average = total/numbers.length;
// console.log(average);
let ltAverageValue = numbers.filter(num=>num<average);
let count = ltAverageValue.length; 
console.log("Count of numbers less than average value =",count);



// 7. Create a new array by adding the index value to each element.
let addIndexValue = numbers.map((num,index)=>num+index);
console.log("Adding the index value to each element",addIndexValue);



// 8. Find the total sum after removing numbers less than 10.
let afterRemoving = numbers.filter(num=>num>=10);
// console.log(afterRemoving);
let totalSum = afterRemoving.reduce((n1,n2)=>n1+n2);
console.log("Total sum after removing numbers less than 10 =",totalSum);



// 9. Sort the array and find the second highest value.
let sortedNew = [...numbers].sort((n1,n2)=>n2-n1);
// console.log(sortedNew);
let secondHighestValue = sortedNew[1];
console.log("Second highest value =",secondHighestValue);



// 10. Create a new array that contains only unique values from the array.
let uniqueArray = numbers.filter((num,index)=>numbers.indexOf(num)==index);  // indexOf(num) means returns the first position where num appears. Index is the current position. Condition meaning => keep the element only if : current position(index) equals first occurence position (indexOf(num)). That is, example: in 0th index, number 5 is there. so its indexOf(num) is 0. no problem.    Then in 1th index, number 10 is there. so its indexOf(num) is 1. no problem.    Then in 2th index, number 5 again came. so its indexOf(num) is 0. because first occurence of number will be taken. so here index not equal to indexOf(num) ie, 2 not equal to 0. so here is the problem. this will break the condition. because index must be equal to indexOf(num). 
console.log("Unique values from the array =",uniqueArray);























