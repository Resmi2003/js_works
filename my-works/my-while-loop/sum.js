var limit = 3;    // limit=3
var sum = 0;      // sum=0
var i =1;         // i=1

while(i<=limit){     // 1<=3 True   2<=3 True  3<=3 True  4<=3 False

    sum = sum+i;     // sum=0+1=1   sum=1+2=3  sum=3+3=6  

    i++;            // i=2,3,4
}

console.log(sum);            // sum=6
