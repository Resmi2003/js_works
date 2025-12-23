// map() is used when we need to apply functionality in all objects in an array.
// in map(), the first parameter represents the current element and the second parameter represents its index. so n1*n2 means value multiplied by its index.
// 3rd parameter of map is array.



// map() and filter() has 3 parameters (ie same 3 parameters)
// they are  (value(num),index,array)
// num means current element
// index means position
// arr means original array

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

