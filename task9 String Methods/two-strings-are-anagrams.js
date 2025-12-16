// Write a program to check whether two strings are anagrams using string methods.

function checkAnagram(word1, word2) {

    if (word1.length !== word2.length) {
        return false;
    }

    let isAnagram = true;

    for (let ch of word1) {

        let index = word2.indexOf(ch);

        if (index == -1) {
            isAnagram = false;
            break;
        } else {
            word2 = word2.slice(0, index) + word2.slice(index + 1);
        }
    }

    return isAnagram;
}

console.log(checkAnagram("listen", "silent")); 