// Write a javascript program to count the frequency of a given character in a string

var string = "javascript";
var ch = "a";
var count = 0;

for(let i=0;i<string.length;i++){

    if(string[i]==ch){
        count ++;
    }
}


console.log(count);
