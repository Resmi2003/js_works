var number = 153;   // number=153
var sum = 0;        // sum=0

while(number!=0){   // 153!=0 True   15!=0 True   1!=0 True   0!=0 False

    let digit = number%10;    // digit=153%10=3   digit=15%10=5   digit=1%10=1
    sum = sum + (digit*digit*digit);      // sum=0+(3*3*3)=0+27=27   sum=27+(5*5*5)=27+125=152   sum=152+(1*1*1)=152+1=153
    number = Math.floor(number/10);      // number=(153/10->15.3=15)   number=(15/10->1.5=1)   number=(1/10->0.1=0)
}

console.log(sum);   // 153
