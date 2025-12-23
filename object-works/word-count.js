var text = "this is a javascript program this javascript program is simple";

var words = text.split(" ");   // [] this will give it in array.

var wordCount = {}

for(let w of words){

    if(w in wordCount){
        wordCount[w] += 1;
    }

    else{
        wordCount[w] = 1;
    }
}

console.log(wordCount);

