// Count Even and Odd Numbers
// Given an array of numbers, count how many are even and how many are odd.

var numbers = [1,2,3,4,5,6,7,8,9];
var evenCount = 0;
var oddCount = 0;
for(let n of numbers){
    if(n%2==0){
        evenCount ++; 
    }

    else if(n%2!=0){
        oddCount ++;
    }
}

console.log("Even Count=",evenCount);
console.log("Odd Count=",oddCount);

