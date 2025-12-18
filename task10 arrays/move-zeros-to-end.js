// Move Zeros to End
// Move all zero values to the end of the array while maintaining the order of other elements.

var numbers = [1, 0, 2, 0, 3];
var result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != 0) {
        result[result.length] = numbers[i];
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) {
        result[result.length] = 0;
    }
}

console.log(result);