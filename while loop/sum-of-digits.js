// write a program to display sum of digits ie (3+4+5)=12

var number = 345;   // number = 345
var sum = 0;        // sum=0

while(number!=0){    // 345!=0 ->True    34!=0 ->True   3!=0->True   0!=0 ->False
    let digit = number%10;     // 345%10=5   34%10=4    3%10=3
    sum = sum + digit;         // sum=0+5=5  sum=5+4=9   sum=9+3=12
    number = Math.floor(number/10);   // number=(345/10->34.5=34)   number=(34/10->3.4=3)   number=(3/10->0.3=0)
}
 
console.log(sum);    //12
