// print each digit one by one ->543

var number = 543;   // number=543

while(number!=0){    // 543!=0 True  54!=0 True  5!-0 True  0!=0 False

    let digit = number%10;   // digit=543%10=3  digit=54%10=4  digit=5%10=5
    console.log(digit);       // 3,4,5
    number = Math.floor(number/10);   // number=(543/10->54.3=54)  number= (54/10->5.4=5)  number=(5/10->0.5=0)
    
}