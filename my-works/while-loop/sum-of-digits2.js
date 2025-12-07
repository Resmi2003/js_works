var number = 543;   // number=543
var sum = 0;        // sum=0

while(number!=0){   // 543!=0 True   54!=0 True   5!=0 True   0!=0 False

    let digit = number%10;         // digit=543%10=3   digit=54%10=4   digit=5%10=5
    sum = sum + digit;             // sum=0+3=3   sum=3+4=7   sum=7+5=12
    number = Math.floor(number/10);  // number=(543/10->54.3=54)   number=(54/10->5.5)   number=(5/10->0.5=0)

}

console.log(sum);     // 12
