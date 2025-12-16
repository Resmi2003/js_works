// Write a program to remove all extra spaces from a string (keep only single spaces between words).

function removeExtraSpace(string){

    let newString = string.trim().replace(/\s+/g," ");


    return newString;
}


console.log(removeExtraSpace("   javascript    is    a    programming    language   "));
