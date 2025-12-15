// Write a program to count the number of vowels and consonants in a string

var text = "welcome";
var vowelCount = 0;
var consonantCount = 0;

for(let ch of text){

    if(ch=="a" || ch=="e" || ch=="i" || ch=='o' || ch=="u"){
        vowelCount++;
    }

    else if(ch!=" "){
        consonantCount++;
    }
}

console.log(`Vowel count = ${vowelCount}`);
console.log(`Consonant count = ${consonantCount}`);

