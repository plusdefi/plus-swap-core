const Factory = artifacts.require('PlusswapFactory.sol');



module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Factory, accounts[0]);
  const factory = await Factory.deployed();
  console.log('this is factory address', factory.address);
};