// Remove duplicate elements
// Write a program to remove duplicate values from an array.

var numbers = [1, 2, 3, 4, 4, 5, 6, 5, 7];
var nonDuplicate = [];
var index = 0;

for (let i = 0; i < numbers.length; i++) {    // first loop takes each number from numbers array one by one.

    let isDuplicate = false;

    for (let j = 0; j < index; j++) {      // second loop checks whether the current number is already present in the nonDuplicate array. // index means how many values are already stored and j checks only those stored values.

        if (numbers[i] == nonDuplicate[j]) {
            isDuplicate = true;
            break;
        }

    }

    if (isDuplicate == false) {
        nonDuplicate[index] = numbers[i];    // index used because it points to the next empty position.
        index++;
    }
}
console.log(nonDuplicate);
