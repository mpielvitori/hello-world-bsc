const HelloWorld = artifacts.require('HelloWorld.sol');

module.exports = async (deployer) => {
  await deployer.deploy(HelloWorld);
};
