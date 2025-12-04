// write a program to display sum of even numbers upto limit

var limit = 5;   // limit=5
var sum = 0;     // sum=0
var i = 1;       // i=1

while(i<=limit){   // 1<=5 ->True   2<=5 ->True   3<=5 ->True   4<=5 ->True
    
    if(i%2==0){    // 1%2==0 ->False  2%2==0 ->True   3%2==0 ->False   4%2==0 ->True
        sum = sum+i;  // sum=0+1=1 sum=1+2=3  sum=3+3=6 sum=6+4=10
    }
    i++;   // i=2,3,4
}
console.log(sum);  //6
