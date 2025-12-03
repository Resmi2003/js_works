var dbPin = 2121;
var dbBalance = 45000;
var userPin = 2121;
var userAmount = 2300;

if(dbPin==userPin){     // 2121==2121   True

    if(userAmount<=dbBalance){   // 2300<=45000    True
        console.log("withdrawal successful");    // prints withdrawal successful
        
    }

    else{
        console.log("insufficient balance");
        
    }

}

else{
    console.log("incorrect pin");
    
}