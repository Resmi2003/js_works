//display numbers from 1 to 10 is divisible(/) by 4




var i = 1;    //i=1

while(i<=10){    // 1<=10 ->True  2<=10 ->True  3<=10 ->True   4<=10 ->True

    if(i%4==0){     // 1%4==0 ->False   2%4==0 ->False   3%4==0 ->False   4%4==0 ->True
        console.log(i);   // prints 4
        
    }
    i++;   // i=2,3,4,5
}