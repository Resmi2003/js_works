// Sum of first 10 natural numbers

var i = 1;     // i=1
var sum = 0;   // sum=0

while (i <= 10) {    // 1<=10 True  2<=10 True  3<=10 True  4<=10 True  5<=10 True  6<=10 True  7<=10 True  8<=10 True  9<=10 True  10<=10 True  11<=10 False

    sum = sum + i;   // sum=0+1=1  sum=1+2=3  sum=3+3=6  sum=6+4=10  sum=10+5=15  sum=15+6=21  sum=21+7=28  sum=28+8=36  sum=36+9=45  sum=45+10=55

    i++;       // i=2,3,4,5,6,7,8,9,10,11
}

console.log(sum);    // 55
