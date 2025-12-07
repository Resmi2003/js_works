// count of digits in a number


var number = 1234;    // number=1234
var count = 0;        // count=0

while(number!=0){     // 1234!=0 True   123!=0 True   12!=0 True   1!=0 True   0!=0 False

    count++;          // count=1,2,3,4
    number = Math.floor(number/10);    // number=(1234/10->123.4=123)   number=(123/10->12.3=12)   number=(12/10->1.2=1)   number=(1/10->0.1=0)
}

console.log(count);          // 4
