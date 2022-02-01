const Factory = artifacts.require("UniswapV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, "0x7076E5206E7A37D48CCC129431F3dF71da79Be1F");
  const factory = await Factory.deployed();

  let token1Address, token2Address;
  if(network === 'mainnet'){
    token1Address = '';
    token2Address = '';
  } else{
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    token1Address = token1.address;
    token2Address = token2.address;
  }
  await factory.createPair(token1Address, token2Address);
};
