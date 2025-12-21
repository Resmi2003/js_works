// Given an array of strings, display the string with the maximum length.

var fruits = ["apple","orange","grapes","pomegranate"];
var maxLength = fruits[0];

for(let i of fruits){

    if(i.length>maxLength.length){
        maxLength = i;
    }
}

console.log(maxLength);




