const Web3 = require('web3');

const provider = process.env.PROVIDER || 'https://rinkeby.infura.io/PCx3uNGj3ABrJ38Cdl4Q';
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

const smalobox_abi = require('../contract/smalobox.json').abi;
const smalobox_addr = '0xE2698bAA693aAC31Ed1Cc12A8c7F1234aE405A6e';
const smalobox = web3.eth.contract(smalobox_abi);
const box = smalobox.at(smalobox_addr);

// let account = web3.eth.accounts.privateKeyToAccount('b609f93a5c57aa07cab5f5c06d9848e601ff647ae692875595e7135e84c340ad');
// web3.eth.personal.unlockAccount(account.address, account.privateKey, 200);

// const getOwner = async () => {
//   console.log(`owner is ${box.owner()}`);
// }
//
// getOwner().then(() => {
//
// });

console.log(`owner is ${box.owner()}`);
// console.log(`web3: ${JSON.stringify(web3.version)}`);
console.log(box);

const test = async () => {
  const result = await box.isUserAuthorized.call('0x238934');
  console.log(`result: ${result}`);
}


box.isUserAuthorized.call('0x238934', (err, result) => {
  console.log(`result: ${result}`);
})
// test().then(() => {
//
// });
