// Write a javascript program to replace all vowels with * in a string.

function replaceAllVowels(string){

    let result = "";

    for(let ch of string){
        if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" || ch=="A" || ch=="E" || ch=="I" || ch=="O" || ch=="U"){
            result += "*";
        }

        else{
            result += ch;
        }
    }

    return result;
}


console.log(replaceAllVowels("javascript is a programming language"));
