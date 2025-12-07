// print each digit one by one

var number = 543;   // number=543

while(number!=0){   // 543!=0 ->True   54!=0 ->True  5!=0 ->True  0!=0->False
    
    let digit = number%10;    // 543%10   54%10   5%10   
    console.log(digit);       // digit=3,4,5
    number = Math.floor(number/10);    // number=(543/10->54.3=54)   number=(54/10->5.4=5)   number=(5/10->0.5=0)
}
