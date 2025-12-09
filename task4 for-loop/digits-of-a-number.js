// Print the digits of a number

var num = 98765;

for(;num!=0;){

    let digit = num%10;
    console.log(digit);
    num = Math.floor(num/10);
    
}