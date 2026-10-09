const bankAccount = { 
    owner: "John Smith", 
    balance: 500, 
    deposit: function(amount) { 
        this.balance+=amount;
    }, 
    withdraw: function(amount) { 
        if (this.balance > amount){
            this.balance-=amount;
        } else{
            console.log("insufficient funds")
        }
    }, 
    displayBalance: function() { 
        console.log(`${this.owner}'s balance: $${this.balance.toFixed(2)}`);
    } 
};

bankAccount.displayBalance(); 
bankAccount.deposit(200); 
bankAccount.withdraw(150); 
bankAccount.withdraw(1000); 
bankAccount.displayBalance(); 