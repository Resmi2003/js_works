// Write a program to check whether two strings are anagrams

var word1 = "listen";
var word2 = "silent";

if (word1.length !== word2.length) {
    console.log("Not Anagram");
} else {

    var isAnagram = true;

    for (let ch of word1) {

        let index = word2.indexOf(ch);

        if (index == -1) {
            isAnagram = false;
            break;
        }
         else {
            word2 = word2.slice(0, index) + word2.slice(index + 1);
        }
    }

    if (isAnagram) {
        console.log("Anagram");
    } else {
        console.log("Not Anagram");
    }
}