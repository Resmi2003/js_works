var num1 = 15;
var num2 = 25;
var num3 = 75;

if(num1>num2 && num1>num3){  // 15>25 && 15>75 False
    console.log(`${num1} is largest`);
    
}

else if(num2>num1 && num2>num3){  // 25>15 && 25>75 False
    console.log(`${num2} is largest`);
    
}

else if(num3>num1 && num3>num2){  // 75>15 && 75>25 True
    console.log(`${num3} is largest`);  // prints 75 is largest
    
}