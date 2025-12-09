// Reverse a string without using array


var string = "JAVASCRIPT";
var rev = "";

for (let i = string.length - 1; i >= 0; i--) {
    rev = rev + string[i];
}

console.log(`Reversed string = ${rev}`);    // prints Reversed string = TPIRCSAVAJ
