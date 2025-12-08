// Count vowels in a string

var string = "javascript";
var count = 0;

for (let i = 0; i < string.length; i++) {

    var ch = string[i];


    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {

        count++;
    }
}

console.log(count);



