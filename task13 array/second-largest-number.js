// Write a program to find the second largest number in an array.

var numbers = [1,2,3,4,5,6,7];
var largest = numbers[0];
var secondLargest = numbers[0];

for(i=1;i<numbers.length;i++){

    if(numbers[i]>largest){
        secondLargest = largest;
         largest = numbers[i];
    }

    else if(numbers[i]<largest && numbers[i]>secondLargest){
        secondLargest = numbers[i];
    }

}

console.log("Second Largest Element=",secondLargest);
