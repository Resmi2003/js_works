// Function that accepts a sentence and returns the longest word

function longestWord(sentence) {

  let currentWord = "";
  let longestWord = "";

  for (let i = 0; i <= sentence.length; i++) {

    if (sentence[i] != " " && i != sentence.length) {
      currentWord += sentence[i];
    }

     else {

      if (currentWord.length > longestWord.length)
        longestWord = currentWord;

      currentWord = "";
    }
  }

  return longestWord;
}

console.log(longestWord("I love programming"));