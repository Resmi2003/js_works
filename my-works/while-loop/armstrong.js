// check given number is armstrong or not

var number = 8208;         // number=8208
var numberCopy = number;   // numberCopy=8208
var original = number;     // original=8208
var count = 0;             // count=0
var sum = 0;               // sum=0

while(number!=0){          // 8208!=0 True   820!=0 True   82!=0 True   8!=0 True   0!=0 False

    count++;                          // count = 1,2,3,4
    number = Math.floor(number/10);   // number=(8208/10->820.8=820)   number=(820/10->82.0=82)   number=(82/10->8.2=8)   number=(8/10->0.8=0)

}


while(numberCopy!=0){              // 8208!=0 True   820!=0 True   82!=0 True   8!=0 True   0!=0 False

    let digit = numberCopy%10;     // digit=8208%10=8   digit=820%10=0   digit=82%10=2   digit=8%10=8
    let exponent = digit**count;   // exponent=8**4=4096   exponent=0**4=0   exponent=2**4=16  exponent=8**4=4096
    sum = sum + exponent;          // sum=0+4096=4096      sum=4096+0=4096      sum=4096+16=4112     sum=4112+4096=8208
    numberCopy = Math.floor(numberCopy/10);     // number=(8208/10->820.8=820)    number=(820/10->82.0=82)   number=(82/10->8.2=8)   number=(8/10->0.8=0)
}

console.log(sum==original?"Armstrong Number":"Not an Armstrong Number");      // prints Armstrong

