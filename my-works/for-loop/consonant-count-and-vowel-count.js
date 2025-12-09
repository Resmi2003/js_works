//  Write a program to display Consonant count and vowel count in a text

var text = "hello world";
var vowelCount = 0;
var consonantCount = 0;

for(let ch of text){

    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){

        vowelCount++;
    }

    else if(ch!=" "){

        consonantCount++;

    }
}

console.log("vowel-count",vowelCount);
console.log("consonant-count",consonantCount);
