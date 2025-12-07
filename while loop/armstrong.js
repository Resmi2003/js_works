// Armstrong number and digit count

var number = 8208;   // number=8208
var numberCopy = number;  //numberCopy=8208
var digitCount = 0; //digitCount=0
var original = number;   
var sum = 0;

while(number!=0){     // 8208!=0 True  820!=0 True  82!=0 True
    
    digitCount++;        //count=1,2
    number = Math.floor(number/10);   // number=(8208/10->820.8=820)  number=(820/10->82.0=82)
}

while(numberCopy!=0){
    let digit = numberCopy%10;
    let exponent = digit**digitCount;
    sum = sum + exponent;
    numberCopy = Math.floor(numberCopy/10);
}

// if(sum==original){
//     console.log("Armstrong number");
    
// }

// else{
//     console.log("Not an armstrong number");
    
// }

// ternary operator
console.log(sum==original?"Armstrong number":"Not an armstrong number");


