// palindrome

var text = "amanaplanacanalpanama";
var stringLength = text.length-1;
var result = "";

for(let i=stringLength;i>=0;i--){

    result = result + text[i];
}


console.log(result==text?"palindrome":"not a palindrome");
