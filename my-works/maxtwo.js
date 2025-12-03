var num1 = 80;
var num2 = 95;

if(num1>num2){   // 80>95  False
    console.log(`${num1} is largest`);
    
}

else if(num2>num1){   // 95>80  True
    console.log(`${num2} is largest`);   // prints 95 is largest
    
}

else if(num1==num2){
    console.log("both are equal");
    
}