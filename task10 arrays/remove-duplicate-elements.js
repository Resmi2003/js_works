// Remove duplicate elements
// Write a program to remove duplicate values from an array.

var numbers = [1, 2, 3, 4, 4, 5, 6, 5, 7];
var nonDuplicate = [];
var index = 0;

for (let i = 0; i < numbers.length; i++) {

    let isDuplicate = false;

    for (let j = 0; j < index; j++) {

        if (numbers[i] == nonDuplicate[j]) {
            isDuplicate = true;
            break;
        }

    }

    if (isDuplicate == false) {
        nonDuplicate[index] = numbers[i];
        index++;
    }
}
console.log(nonDuplicate);
