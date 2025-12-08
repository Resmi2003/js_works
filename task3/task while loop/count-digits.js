// Count digits in a number

var number = 7864;   // number=7864 
var count = 0;       // count=0

while(number!=0){    // 7864!=0 True  786!=0 True  78!=0 True  7!=0 True  0!=0 False

    count++;         // count=1,2,3,4
    number = Math.floor(number/10);  // number=(7864/10->786.4=786)  number=(786/10->78.6=78)  number=(78/10->7.8=7)  number=(7/10->0.7=0)
}

console.log(count);     // 4
