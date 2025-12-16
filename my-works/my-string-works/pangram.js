// pangram

var word = "The quick brown fox jumps over the lazy dog";
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var isPangram = true;

for(let ch of alphabets){

    if(word.indexOf(ch)==-1){
        isPangram = false;
        break;
    }
}


console.log(isPangram);
