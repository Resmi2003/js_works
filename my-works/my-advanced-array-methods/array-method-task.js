// task using map, filter, reduce and sort.
// here in this 1st and 2nd qs, there is all, so we use map.



var words = ["carrot","parrot","beetroot","apple"];

// create a new array contains length of all words
var wordLength = words.map(w=>w.length);
console.log(wordLength);



// create a new array contains upperCase of all words
var upperCase = words.map(w=>w.toUpperCase());
console.log(upperCase);



// only rr containing
var word = words.filter(w=>w.includes("rr"));
console.log(word);



// longest word
var longestWord = words.reduce((w1,w2)=>w1.length>w2.length?w1:w2);
console.log(longestWord);



// sort in ascending order
words.sort((w1,w2)=>w1.length-w2.length);
console.log(words);



// sort in descending order
words.sort((w1,w2)=>w2.length-w1.length);
console.log(words);





