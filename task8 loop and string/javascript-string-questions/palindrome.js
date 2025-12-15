// Write a javascriprt program to check whether a given string is a palindrome

var text = "malayalam";
var stringLength = text.length-1;
var result = "";

for(let i=stringLength;i>=0;i--){
    result = result + text[i];
}


console.log(result==text?"Palindrome":"Not a Palindrome");
