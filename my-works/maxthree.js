var num1 = 100;
var num2 = 200;
var num3 = 300;

if(num1>num2 && num1>num3){   // 100>200 && 100>300  False
    console.log(`${num1} is largest`);
    
}

else if(num2>num1 && num2>num3){   // 200>100 && 200>300  False
    console.log(`${num2} is largest`);
    
}

else if(num3>num1 && num3>num2){   // 300>100 && 300>200 True
    console.log(`${num3} is largest`);  //prints 300 is largest
    
}