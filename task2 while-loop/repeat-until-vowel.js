// Repeat until Vowel



var character = "x";
var count = 0;

while (character != "a" && character != "e" && character != "i" && character != "o" && character != "u") {
    console.log("Enter a character:");
    count++;

    if (count==1) character="b";
    else if(count==2) character="k";
    else character = "a";
    
}

console.log("You found a vowel!");
