var dbPassword = "Password@123";
var dbOtp = 4556;
var userPassword = "Password@123";
var userOtp = 4548;

if(dbPassword==userPassword){    //  Password@123==Password@123  // True

    if(dbOtp==userOtp){          //  4556==4548  // False
        console.log("login successful");

    }

    else{
        console.log("incorrect otp");  // prints incorrect otp
        
    }
    
}

else{
    console.log("invalid password");
    
}