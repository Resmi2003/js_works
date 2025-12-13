// Count the number of vowels in a string

function numberOfVowels(string){
    let count = 0;
    for(let ch of string){
        if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
            count ++;
        }
    }

    return count;

}


console.log(numberOfVowels("javascript"));
