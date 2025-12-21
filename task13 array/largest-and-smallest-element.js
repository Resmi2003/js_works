// Write a program to find the largest and smallest element in an array.

var numbers = [1, 2, 3, 4, 5, 6];
var largestNumber = numbers[0];
var smallestNumber = numbers[0];

for (let n of numbers) {

    if (n > largestNumber) {
        largestNumber = n;
    }

    else if (n < smallestNumber) {
        smallestNumber = n;
    }
}

console.log("Largest element =", largestNumber);
console.log("Smallest element =", smallestNumber);

