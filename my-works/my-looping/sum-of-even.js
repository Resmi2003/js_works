var limit = 2;    // limit=2
var sum = 0;      // sum=0
var i =1;         // i=1

while(i<=limit){      // 1<=2 True   2<=2  True   3<=2  False

    if(i%2==0){       // 1%2==0  False   2%2==0 True
        sum = sum + i;  // sum=0+2=2
    }


    i++;          // i=2,3
}

console.log(sum);   // sum=3
