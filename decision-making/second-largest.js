var num1 = 700;
var num2 = 800;
var num3 = 900;

if(num1>num2 && num1<num3 || num1<num2 && num1>num3){    // 700>800 && 700<900 || 700<800 && 700>900  False
    console.log(`${num1} is second largest`);
    
}

else if(num2>num1 && num2<num3 || num2<num1 && num2>num3){    // 800>700 && 800<900 True || 800<700 && 800>900 False
    console.log(`${num2} is second largest`);    // prints 800 is second largest
    
}

else if(num1==num2 && num2==num3){
    console.log("all are equal");
    
} 

else{
    console.log(`${num3} is second largest`);
    
}


   