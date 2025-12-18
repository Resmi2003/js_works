// Write a javascript program to count even and odd numbers in an array.

var numbers = [1,2,3,4,5];
var evenCount = 0;
var oddCount = 0;

for(let n of numbers){
    
    if(n%2==0){
        evenCount++;
    }

    else if(n%2!=0){
        oddCount++;
    }
}

console.log("Even count=",evenCount);
console.log("Odd count=",oddCount);

