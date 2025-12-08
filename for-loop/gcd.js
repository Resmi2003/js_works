//gcd
//gcd means : There are 2 numbers, - first take divisors of 2 numbers. Then look for common divisors in both.Then the largest in the common divisor will take.

var num1 = 12;   // num1=12
var num2 = 24;   // num2=24
var gcd = 1;     // gcd=1
var minNumber = num1<num2?num1:num2;   // minNumber=12<24 so minNumber=12 

for(let i=1;i<=minNumber;i++){    // i=1;1<=12 True

    if(num1%i==0 && num2%i==0){  // 12%1==0 && 24%1==0 True
        gcd=i;   // gcd=1
    }
}

console.log(gcd);
