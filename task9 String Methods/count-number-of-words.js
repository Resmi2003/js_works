// Write a program to count the number of words in a string using string methods.

function numberOfWords(string){

    let words = string.split(" ");
    let count = 0;

    for(let i=0;i<words.length;i++){

        count ++;

    }

    return count;
}


console.log(numberOfWords("javascript is a programming language"));
