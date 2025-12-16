// Write a program to check whether a string ends with a specific character or word.

function endsWithWord(string,word){

    let lastWord = string.slice(-word.length);

    if(lastWord==word){
        return "The string ends with " + word;
    }

    else{
        return "The string does not ends with " + word;
    }


}

console.log(endsWithWord("javascript is a programming language","language"));
