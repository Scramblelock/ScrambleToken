const ScrambleToken = artifacts.require('./ScrambleToken.sol');

module.exports = function(deployer) {
	deployer.deploy(ScrambleToken);
}