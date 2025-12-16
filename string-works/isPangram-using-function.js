// In exam, the things I marked as // will only give. Inside that we need to fill. We are not able to edit or change the 3 default things marked here.

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
