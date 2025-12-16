// Write a program to count how many times a specific word appears in a sentence.

function countWord(sentence, word) {
    let count = 0;
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i] == word) {
            count++;
        }
    }

    return "Count: " + count;
}


console.log(countWord("apple is sweet apple", "apple"));