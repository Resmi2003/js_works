var dbPin = 1234;
var dbBalance = 20000;
var userPin = 1234;
var userAmount = 1500;

if(dbPin==userPin){     // 1234==1234   True

    if(userAmount%100==0){    // 1500%100==0  True

        if(userAmount<=dbBalance){   // 1500<=20000   True
            console.log("withdrawal successful");   // prints withdrawal successful
            
        }

        else{
            console.log("insufficient balance");
            
        }
    }

    else{
        console.log("enter multiple of 100");
        
    }
}

else{
    console.log("incorrect pin");
    
}
