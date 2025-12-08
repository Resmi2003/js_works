// Consonant count 
// consonant means the letters which are not vowel



var text = "helloworld";
var consonantCount = 0;

for(let ch of text){

if(ch!="a" && ch!="e" && ch!="i" && ch!="o" && ch!="u"){

    consonantCount++;
}

}

console.log(consonantCount);
