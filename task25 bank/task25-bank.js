/* 

Create a class named Bank using the given bank database.

const bankDB = {
  1000: { acno: 1000, password: "userone", balance: 5000 },
	...
	};

Tasks:

Validate account number and password
Deposit amount
Check balance
Withdraw amount
Check balance
Fund transfer between two accounts

*/

class Bank{

	db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

// Validate account number and password
 validate(acno,pswd){

  if(acno in this.db){
    if(this.db[acno].password===pswd){
      console.log("Access granted");

      }
      
      else{
        console.log("Invalid password");

      }

  }

  else{
    console.log("Invalid ACNO");
    
  }
}

// Deposit amount
deposit(acno,amount){
  if(acno in this.db){
  this.db[acno].balance += amount;
  console.log(`${acno} has been credited with amt ${amount} your aval bal is ${this.db[acno].balance}`);
}
else{
  console.log("Invalid ACNO");
  
}
}

// Check balance
getBalance(){
        console.log(`your aval bal is ${this.balance}`);
        
    }

// Withdraw amount
withdraw(amount){
  if(amount>this.balance){
    console.log("insufficient balance transaction cancelled");
    
  }

  else{
    this.balance -= amount;
    console.log(`${this.acno} has been debited with amt ${amount} your aval bal is ${this.balance}`);

  }
}

// Check balance
getBalance(){
        console.log(`your aval bal is ${this.balance}`);
        
    }

// Fund transfer between two accounts

























}
