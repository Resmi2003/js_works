// Write a program to count how many times a specific element appears in an array.

var numbers = [1,2,3,3,3,3,4,5];
var element = 3;
var count = 0;

for(let n of numbers){

    if(n==element){
        count ++;
    }
     
}

console.log("Count =",count);
