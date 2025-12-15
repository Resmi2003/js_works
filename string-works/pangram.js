// pangram
// Means every english alphabet must included in that atleast once.
// indexof() used to return index of that word. if that word is not there it will return -1.

var word = "The quick brown fox jumps over the lazy dog";

var alphabets = "abcdefghijklmnopqrstuvwxyz";

var isPangram = true;

for(let ch of alphabets){

    if(word.indexOf(ch)==-1){

        isPangram=false;
        break;
    }
}

console.log(isPangram);

