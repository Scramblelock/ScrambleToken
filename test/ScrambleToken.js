const ScrambleToken = artifacts.require('./ScrambleToken.sol');

contract('ScrambleToken', function(accounts) {
	it('Should put 15000 ScrambleToken in the first account', function() {
		return ScrambleToken.deployed().then(function(instance) {
				return instance.balanceOf.call(accounts[0]);
		}).then(function(balance) {
			assert.equal(balance.valueOf(), 15000, "15,000 SCRT wasn't in the first account");
		});
	});
	it('Should send 10 ScrambleToken correctly', function() {
		let token;
		
		let account_one = accounts[0];
		let account_two = accounts[1];

		let account_one_starting_balance;
		let account_two_starting_balance;
		let account_one_ending_balance;
		let account_two_ending_balance;

		let amount = 10;

		return ScrambleToken.deployed().then(function(instance) {
			token = instance;
			return token.balanceOf.call(account_one);
		}).then(function(balance) {
			account_one_starting_balance = balance.toNumber();
			return token.balanceOf.call(account_two);
		}).then(function(balance) {
			account_two_starting_balance = balance.toNumber();
			return token.transfer(account_two, amount, {from: account_one});
		}).then(function() {
			return token.balanceOf.call(account_one);
		}).then(function(balance) {
			account_one_ending_balance = balance.toNumber();
			return token.balanceOf.call(account_two);
		}).then(function(balance) {
			account_two_ending_balance = balance.toNumber();

			assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't taken successfully from the sender");
			assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't successfully sent to the receiver"); 
		});
	});
});




