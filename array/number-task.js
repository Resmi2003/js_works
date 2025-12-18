// number task

// var numbers = [2,3,4,5,6,7,7,8,3,9,9,7];
// minNumber
// maxNumber
// sum of numbers
// sum of odd numbers
// sum of even numbers
// divisors of 3
// average of numbers
// most frequent number



// minNumber
// index-     0 1 2 3 4 5 6 7 8 9 0 1
var numbers = [2,3,4,5,6,7,7,8,3,9,9,7];
var minNumber = numbers[0];
for(let n of numbers){
    if(n<minNumber){
        minNumber = n;
    }
}
console.log(`minNumber= ${minNumber}`);



// maxNumber
maxNumber = 0;
for(let n of numbers){
    if(n>maxNumber){
        maxNumber = n;
    }
}
console.log(`maxNumber= ${maxNumber}`);




// sum of numbers
var sum = 0;
for(let n of numbers){
    sum += n;
}
console.log(`Sum= ${sum}`);



// sum of odd numbers
var oddSum = 0;
for(let n of numbers){
    if(n%2!=0){
        oddSum += n;
        
    }
}
console.log(`sum of odd numbers= ${oddSum}`);



// sum of even numbers
var evenSum = 0;
for(let n of numbers){
    if(n%2==0){
        evenSum += n;
    }
}

console.log(`sum of even numbers= ${evenSum}`);





// divisors of 3
console.log("divisors of 3:");

for(let n of numbers){
    if(n%3==0){
        console.log(n);
        
    }
}



// average of numbers
var sum = 0;
for(let n of numbers){
    sum += n;
}
var average = sum/numbers.length;
console.log(`Average of numbers= ${average}`);




// most frequent number





