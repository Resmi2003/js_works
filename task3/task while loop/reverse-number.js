// Reverse a number

var num = 1234;    // num=1234
var rev = 0;       // rev=0

while(num!=0){       // 1234!=0 True   123!=0 True   12!=0 True   1!=0 True   0!=0 False

    let digit = num % 10;     // digit=1234%10=4  digit=123%10=3  digit=12%10=2  digit=1%10=1
    rev = rev * 10 + digit;   // rev=0*10+4=4  rev=4*10+3=43  rev=43*10+2=432  rev=432*10+1=4321
    num = Math.floor(num/10); // num=(1234/10->123.4=123)  number=(123/10->12.3=12)  number=(12/10->1.2=1)  number=(1/10->0.1=0)
}

console.log(rev);       // 4321
