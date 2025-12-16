// Write a javascript program to check whether a string contains a given word, ignoring case.

function containsWord(sentence,word){

    let newSentence = sentence.toLowerCase();
    let newWord = word.toLowerCase();

    if(newSentence.indexOf(newWord)!=-1){
        return true;
    }

    else{
        return false;
    }
}

      

console.log(containsWord("HTML is easy","easy"));

