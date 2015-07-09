//noprotect
function Bank(b) {
	this.balance = b;
}

Bank.prototype = {
    credit: function credit(input) {
        this.balance += input;
    },

    debit: function debit(input) {
        this.balance -= input;
    }
};

var newBank = new Bank(100);

for( var j = 0; j < 3; j++) {
    var creditAmount = parseInt(prompt("What amount do you wish to add as a credit to your balance?"));
  newBank.credit(creditAmount);

}

for(var j = 0; j < 2; j++) {
  var debitAmount = parseInt(prompt("What amount do you wish to subtract as a debit from your balance?"));
  newBank.debit(debitAmount);
}

console.log(newBank.balance);