var num1 = 12;   // num1 = 12
var num2 = 24;   // num2 = 24
var min = 0;     // min = 0

if(num1<num2){   // 12<24 ->True
    min = num1;   // min=12
    
}

else{
    min = num2;   
}


var i =1;     // i = 1

while(i<=min){    // 1<=12 ->True
    if(num1%i==0 && num2%i==0){   // means 12 is divided by 1 and also 24 is divided by 1
        console.log(i);    // prints 1
        
    }
    i++;    // i=2
}