var dbPin = 2003;
var dbBalance = 15000;
var userPin = 2003;
var userAmount = 500;

if(dbPin==userPin){     // 2003==2003   True
    
    if(userAmount<=dbBalance){   // 500<=15000   True
        console.log("withdrawal successful");   //  prints withdrawal successful
        
    }

    else{
        console.log("insufficient balance");
        
    }
}

else{
    console.log("incorrect pin");
    
}