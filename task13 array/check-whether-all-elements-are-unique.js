// Given an array of numbers, check whether all elements are unique.

var numbers = [1, 2, 3, 4, 5];
var isUnique = true;

for (let i = 0; i < numbers.length; i++) {    // this loop is to take each number from the array one by one.


    for (let nextIndex = i + 1; nextIndex < numbers.length; nextIndex++) {  // this loop is to compare the current number with all the remaining numbers in the array to check for duplicates.

        if (numbers[i] == numbers[nextIndex]) {

            isUnique = false;
            break;
        }
    }
}

if (isUnique) {
    console.log("All elements are unique");
}

else {
    console.log("Array contains duplicate elements");
}