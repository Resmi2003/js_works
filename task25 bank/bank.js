class Bank{

	db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

// 1. validateAcno function
validateAcno(acno){
    return acno in this.db?true:false;
}

// 2. AuthenticateUser function
authenticateUser(acno,pswd){

    // 1. validate acno // acno=1000
    if(this.validateAcno(acno)){ // true
    //2. validate password //db[1000]={"acno":1000,"username":"Neer","password":1000,"balance":5000,transaction:[]},

           if(pswd==this.db[acno].password){ // 1000=1000
            console.log('login successful');
            

           }
           else{
            console.log('incorrect password');
            
           }
    


}
else{
    console.log('Invalid account number');
    
}

    }



      // 3. getBalance() function
      getBalance(acno){ //1000
        return this.validateAcno(acno)?this.db[acno].balance:"Invalid account number";

      }



      // 4. fundTransfer function
      fundTransfer(fromacno,toacno,amount){
        // 1. fromacno toacno validate
        if(this.validateAcno(fromacno)&&this.validateAcno(toacno)){ // true
        // 2. fromacno.balance > amount ? allow transfer
                  if(this.db[fromacno].balance>amount){ // (10000>5000)
                    this.db[fromacno].balance -= amount; // 10000-5000
                    this.db[toacno].balance += amount; // 500+5000
                    console.log('transaction completed');
                  }
                  else{
                    console.log('transfer failed insufficient amount');
                  }
        }
        else{
            console.log('transfer error');
            
        }
      }
}


b1 = new Bank();

console.log(b1.validateAcno(1000)); // true

b1.authenticateUser(1000,1006); // login?

console.log(b1.getBalance(1001)); // 5000

b1.fundTransfer(1000,1002,3000); // Transaction completed

console.log(b1.getBalance(1000)); // deb

console.log(b1.getBalance(1002));  // credit




