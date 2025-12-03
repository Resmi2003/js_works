var dbPin = 6768;
var dbBalance = 50000;
var userPin = 6768;
var userAmount = 7500;

if(dbPin==userPin){    //  6768==6768  True

    if(userAmount%100==0){    //  7500%100==0   True

        if(userAmount<=dbBalance){    // 7500<=50000   True
            console.log("withdrawal successful");    //prints withdrawal successful
            
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