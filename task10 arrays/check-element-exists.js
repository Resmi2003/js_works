// Check element exists
// Check whether a given number exists in an array or not (without using includes())

var numbers = [1, 2, 3, 4, 5, 6, 7];
var target = 7;
var numberExist = false;


for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] == target) {
        numberExist = true;
        console.log("Element exists");
        break;
    }
}

if (numberExist == false) {
    console.log("Element does not exist");
}

