pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract ScrambleToken is StandardToken {
	string public name = 'ScrambleToken';
	string public symbol = 'SCRT'; 
	uint8 public decimals = 18;
	uint public INITIAL_SUPPLY = 15000; 

	function ScrambleToken() public {
		totalSupply_ = INITIAL_SUPPLY;
		balances[msg.sender] = INITIAL_SUPPLY;
	}
}