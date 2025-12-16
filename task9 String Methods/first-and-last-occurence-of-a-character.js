// Write a javascript program to find the first and last occurence of a character in a string.

function characterOccurence(string,character){

    let firstOccurence = string.indexOf(character);
    let lastOccurence = string.lastIndexOf(character);

    
    return "First Occurence: " + firstOccurence + ",  " + "Last Occurence: " + lastOccurence;
}

// index-                       0123456789
console.log(characterOccurence("javascript","a"));

