// palindrome using function

function isPalindromeWord(word){
         
    let newWord = word.toUpperCase().replaceAll(" ","");
    let reversedString = "";


    for(let i=newWord.length-1;i>=0;i--){

        reversedString += newWord[i];
    }

    return reversedString == newWord;
}


console.log(isPalindromeWord("A MAN A plan a canal panama"));
