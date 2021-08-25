const Web3 = require('web3');
const cookieABI = require('./Cookies.json');

const contractAddress = '';
const web3 = new Web3(
	new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0'));
var contract = new web3.eth.Contract(
	cookieABI, contractAddress);


async function addWebAppAction(string ip, uint buttonID) {
	try {
		const sourceAccount = '0x77754bDDA8a6391f340Bb2ffe2DA6A58A30B7228';
		const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0"));
		const contractAddress = '0x91B245abbDC633A0A7dDC25316476e176D42DCc0';
		const cookieContract = new web3.eth.Contract(cookieAbi, contractAddress);
		const myData = cookieContract.methods.webAppAction(ip, buttonID).encodeABI();
		const txCount = await web3.eth.getTransactionCount(sourceAccount);
		const networkId = await web3.eth.net.getId();
          // Build the transaction
          const txObject = {
          	nonce: web3.utils.toHex(txCount),
          	to: contractAddress,
          	from: sourceAccount,
          	chainId: networkId,
          	value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          	gasLimit: web3.utils.toHex(21000),
          	gasPrice: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
          	data: myData  
          };
          // Sign the transaction
          const raw = await web3.eth.accounts.signTransaction(
          	txObject,
          	process.env.REACT_APP_SECRET
          	);
          // Broadcast the transaction
          const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
          console.log('TX: ', transaction);
      } catch (error) {
      	console.log('Add Action failed: ', error);
      }
  }

  module.exports = addWebAppAction;
