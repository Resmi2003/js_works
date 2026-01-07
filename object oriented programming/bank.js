/*
create a class bank with attributes
acno,customer_name,acc_type,balance

createAccount()
deposit(amount)
withdraw(amount)
balEnq()

*/

class Bank{

    createAccount(acno,customer_name,acc_type,balance){
        this.acno = acno;
        this.customer_name = customer_name;
        this.acc_type = acc_type;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`${this.acno} has been credited with amt ${amount} your aval bal is ${this.balance}`);
        
    }

    withdraw(amount){
        if(amount>this.balance){
            console.log("insufficient balance transaction cancelled");
            
        }
        else{
            this.balance -= amount;
            console.log(`${this.acno} has been debited with amt ${amount} your aval bal is ${this.balance}`);
            
        }
    }

    getBalance(){
        console.log(`your aval bal is ${this.balance}`);
        
    }

}


var custInstance1 = new Bank();

custInstance1.createAccount(123,"vipin","savings",2000);

custInstance1.deposit(100000);

custInstance1.withdraw(50000);