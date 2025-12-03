var num1 = 10;
var num2 = 20;
var num3 = 25;
                                                           // False             // False
if(num1>num2 && num1<num3 || num1<num2 && num1>num3){  // 10>20 && 10<25 || 10<20 && 10>25  // False
    console.log(`${num1} is second largest`);
    
}
                                                               // True               // False
else if(num2>num1 && num2<num3 || num2<num1 && num2>num3){   // 20>10 && 20<25 || 20<10 && 20>25     // True
    console.log(`${num2} is second largest`);        // prints 20 is second largest
    
}

else if(num1==num2 && num2==num3){
     console.log("all are equal");
     
}

else{
    console.log(`${num3} is second largest`);
    
}