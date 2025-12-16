// In exam the things i marked as // will only give. others we neeed to fill . not able to change these 3 default things here.just adding in it is only possible.

function isPalindromeWord(word) {      // 

    let newWord = word.toLowerCase().replaceAll(" ", "");
    let reversedString = "";

    for (let i = newWord.length - 1; i >= 0; i--) {
        reversedString += newWord[i];
    }

    return reversedString == newWord;        // 
}



console.log(isPalindromeWord("A MAN A plan a canal panama"));               //
