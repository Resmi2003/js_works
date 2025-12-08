//  Vowel Count
// Count the vowels in this text.

var text = "helloworld";
var vowelCount = 0;

for(let ch of text){

    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){

        vowelCount++;


    }
}

console.log(vowelCount);
