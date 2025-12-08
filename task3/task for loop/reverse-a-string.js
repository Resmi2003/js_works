// Reverse a string using a for loop

var string = "HELLO";
var rev = "";

for (let i = string.length - 1; i >= 0; i--) {
    rev = rev + string[i];
}

console.log(`Reversed string = ${rev}`);    // prints Reversed string = OLLEH
