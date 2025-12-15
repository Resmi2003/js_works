
function isPangram(word){              //

    let pangramWord = true;            //
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    for(let ch of alphabets){

    if(word.indexOf(ch)==-1){

        isPangram=false;
        break;
    }
}


    return pangramWord;               //
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
