// Count Characters Until 'stop'

var word = ""; 
var total = 0;
var count = 0;

while (word !== "stop") {
    console.log("Enter a word:");

    if (count == 0) {
        word = "hello";     // 5 characters
        total += word.length;
    }
    else if (count == 1) {
        word = "cat";       // 3 characters
        total += word.length;
    }
    else {
        word = "stop";      // stop condition
    }

    count++;
}

console.log(`Total characters: ${total}`);