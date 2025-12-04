var number = 5;   // num=5
var fact = 1;     // fact=1
var i = 1;        // i=1

while(i<=number){   // 1<=5 ->True   2<=5 ->True   3<=5 ->True   4<=5 ->True   5<=5 ->True   6<=5 ->False
    fact = fact*i;  // fact=1*1=1  fact=1*2=2   fact=2*3=6   fact=6*4=24   fact=24*5=120
    i++;            // i=2,3,4,5,6
}

console.log(`Factorial of ${number}!=${fact}`);   // factorial of 5! = 120
