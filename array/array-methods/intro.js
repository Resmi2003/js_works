// Array methods


// var array={
//  length,
//  push(value) => Add value at end of array.
//  pop() => Removes the last element from an array and returns it.
//  unshift(values) => Insert new element in the beginning of the array.
//  shift() => Removes the first element from an array and returns it.


//  Search
//  indexOf(value) => Returns the index of the first occurence of a value in an array.
//  lastIndexOf(value) => Returns the index of the last occurence of a value in an array.
//  includes(value) => To check if that element exist there or not.ie, Determines whether an array includes a certain element, returning true or false as appropriate. 
// }


//  Extracting a portion
//  slice(start,end)
//  splice()

//  advanced array methods  (this will uses arrow functions.thats it is called as advanced array methods)
//  Map()
//  filter()
//  reduce()
//  some()
//  forEach()
//  find()
//  sort()


// index -     0         1            2        3      4
var foods = ["dosa","chappathy","friedrice","dosa","meals"];

// push
// foods.push("arabian-rice");
// console.log(foods);




// pop
//  foods.pop();
//  console.log(foods);
 



// unshift
//  foods.unshift("tea");
//  console.log(foods);




// shift
// foods.shift();
// console.log(foods);


// let removedelement = foods.pop();    // if we need to return removed element store it in another variable.
// console.log(foods);






// indexOf(value)
// returns index of  first object  => indexOf(value)
// let pos = foods.indexOf("dosa");
// console.log(pos);
// Here, it returns index of dosa. That is 2.

// let pos=foods.indexOf("friedrice");
// console.log(pos);

// lastIndexof(value)





// includes(value)
// let isExist = foods.includes("friedrice");
// console.log(isExist);






// slice(start,end)    this not modify original array, it gives another array.
var position = foods.slice(0,3);
console.log(position);     // look output of this
console.log(foods);


   










 