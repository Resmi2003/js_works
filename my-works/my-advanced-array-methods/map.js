// map() is used when we need to apply functionality in all objects in an array.


var numbers = [10,11,12,13,14,15,16];

// addFive
// squares
// cubes



// addFive
var addFive = numbers.map(num=>num+5);
console.log(addFive);


// squares
var squares = numbers.map(num=>num**2);
console.log(squares);


// cubes
var cubes = numbers.map(num=>num**3);
console.log(cubes);

