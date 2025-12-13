var limit = 5;    // limit=5
var sum = 0;      // sum=0
var i = 1;        //i=1

while(i<=limit){     //1<=5 True   2<=5 True  3<=5 True  4<=5 True  5<=5 True  6<=5 False

    if(i%2==0){    // 1%2==0 False  2%2==0 True  3%2==0 False  4%2==0 True  5%2==0 False
        sum = sum + i;   // sum=0+2=2  sum=2+4=6
    }


    i++;    // i =2,3,4,5,6
}

console.log(sum);                                 // 6
