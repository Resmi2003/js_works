db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false

function validateAccount(acno){
    return acno in db ? true : false;
}

console.log(validateAccount(1000));   // 1000 is a key in db



//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied

function authenticated(acno,pswd){

    if(validateAccount(acno)){      // or acno in db

        actualpswd = db[acno].password;      // or password in db

        if(pswd == actualpswd){
            console.log("access granted");
            
        }
        else{
            console.log("Invalid password");
            
        }
    }
    else{
        console.log("Invalid ACNO");
        
    }
}

authenticated(1000,1000);
authenticated(1000,1001);