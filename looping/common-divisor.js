//common divisors of two numbers num1,num2

var num1 = 12;
var num2 = 24;
var min = 0;

if(num1<num2){
    min = num1;
}

else{
    min = num2;
}


var i = 1;

while(i<=min){
    if(num1%i==0 && num2%i==0){
        console.log(i);
        
    }
    i++;
}
 

