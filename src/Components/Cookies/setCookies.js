const Web3 = require('web3');
var Contract = require('web3-eth-contract');
const cookieABI = require('./Cookie.json');
import privateKey from '../../.env';
const walletAddress = '';

const web3 = new Web3(
	new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0')
);
const contractAddress = '';
var contract = new web3.eth.Contract(cookieABI, contractAddress);

async function setCookies(string ip, uint buttonID) {
	await contract.methods.action(ip, buttonID).
		send({
			from: walletAddress,
		});
};

async function setCookiesProper(string ip, uint buttonID) {
	const networkId = await web3.eth.net.getId();
	const tx = contract.methods.action(ip, buttonID);
	const gas = await tx.estimateGas({from: address});
	const gasPrice = await web3.eth.getGasPrice();
	const data = tx.encodeABI();
	const nonce = await web3.eth.getTransactionCount(address);

	const signedTx = await web3.eth.accounts.signTransaction(
	{
		to: contractAddress, 
		data,
		gas,
		gasPrice,
		nonce, 
		chainId: networkId
	},
	privateKey
	);
	const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
	console.log(`Transaction hash: ${receipt.transactionHash}`);
}

module.exports = setCookies;
