// Write a javascript program to capitalize the first letter of each word in a sentence

var sentence = "javascript is a programming language";
var words = sentence.split(" ");
var result = "";

for(i=0;i<words.length;i++){

    let word = words[i];

    result += word[0].toUpperCase() + word.slice(1) + " ";

}

console.log(result.trim());

