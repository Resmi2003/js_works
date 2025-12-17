var word = "ABC123";
var challengeCode = "7YZ";

var result = word.concat(challengeCode);
console.log(result);



// A B C 1 2 3 7 Y Z
// 0 1 2 3 4 5 6 7 8

var maskedString = "";
var count = 1;

for(let i=0;i<result.length;i++){

    if(count==3){
        maskedString += "X";
        count = 0;             // count=0 is for resetting count to zero.
    }

    else{
        maskedString += result[i];
    }

    count ++;
}

console.log(maskedString);
