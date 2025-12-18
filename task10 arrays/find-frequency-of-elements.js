// Find Frequency Of Elements
// Count how many times each element sppears in an array

var numbers = [1,2,2,3,1];
var count = {};

for(let i=0;i<numbers.length;i++){

    let number = numbers[i];

    if(count[number]){
        count[number] = count[number] + 1;

    }

    else{
        count[number] = 1;
    }
}


console.log(count);



