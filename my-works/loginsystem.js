dbPassword = "resmi@123";
dbOtp = 123;
userPassword = "resmi@123";
userOtp = 12;

if(dbPassword==userPassword){      // resmi@123==resmi@123    // True

    if(dbOtp==userOtp){          // 123==12    False
        console.log("login successful");
        
    }

    else{
        console.log("incorrect otp");      // prints incorrect otp
        
    }
}

else{
    console.log("incorrect password");
    
}

