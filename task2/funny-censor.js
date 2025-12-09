// Funny Censor Game

var sentences = ["you are dumb", "this is stupid", "okay sorry"];
var i = 0;


while (sentences[i] == "you are dumb") {
    console.log(sentences[i]);
    console.log("Please be polite!");
    i = i + 1;
}


while (sentences[i] == "this is stupid") {
    console.log(sentences[i]);
    console.log("Please be polite!");
    i = i + 1;
}


console.log(sentences[i]);
console.log("Thank you!");