// A callback function, the name of the function could be any name
const callback = (n) => {
    return n**2; // 3**2 =>9
};
// console.log(callback(3)); // 9


// Function that takes another function as a callback
function cube(callback, n){
    return callback(n) * n;  // 9*3
}

console.log(cube(callback, 3));   // 27 is output

// callback function means calling a function inside another function.

