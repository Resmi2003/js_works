// Sum of digits

var number = 245;    // number=245
var sum = 0;         // sum=0
var i = 1;           // i=1

while(number!=0){    // 245!=0 True  24!=0 True  2!=0 True  0!=0 False

    let digit = number%10;    // digit=245%10=5  digit=24%10=4  digit=2%10=2  
    sum = sum + digit;        // sum=0+5=5  sum=5+4=9  sum=9+2=11
    number = Math.floor(number/10);    // number=(245/10->24.5=24)  number=(24/10->2.4=2)  number=(2/10->0.2=0)
}


console.log(sum);     // 11
