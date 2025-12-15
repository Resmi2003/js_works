// Write a program to reverse each word in a string (keep word order same)

var sentence = "Javascript is programming language";
var words = sentence.split(" ");
var result = "";

for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversedWord = "";

    for (var charIndex = word.length - 1; charIndex >= 0; charIndex--) {
        reversedWord += word[charIndex];
    }

    result += reversedWord + " ";
}

console.log(result.trim());