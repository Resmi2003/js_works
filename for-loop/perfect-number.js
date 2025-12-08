// perfect number
// 6
// 1,2,3=> 1+2+3=6   // the number's common divisor's sum = number  



var number = 6;     // number=6
var sum = 0;        // sum=0
        
for(let i=1;i<number;i++){    // i=1 1<6 True   i=2  2<6 True   i=3  3<6 True   i=4  4<6 True

    if(number%i==0){    // 6%1==0 True  6%2==0 True   6%3==0 True  6%4==0 False

        sum = sum +i;   // sum=0+1=1   sum=1+2=3   sum=3+3=6
    }
}

console.log(sum==number?"perfect number":"not a perfect number");     // 6==6  so prints perfect number
