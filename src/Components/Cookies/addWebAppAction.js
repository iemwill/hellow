const Web3 = require('web3');
const cookieAbi = require('./Cookies.json');

const web3 = new Web3(
	new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0'));

async function addWebAppAction(ip, buttonID, sessionID) {
	try {
		const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
		const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0"));
		const contractAddress = '0xa5ed244d0f294d920376994f6035d6f405888d31';
		const cookieContract = new web3.eth.Contract(cookieAbi, contractAddress);
		const myData = cookieContract.methods.webAppAction(ip, buttonID, sessionID).encodeABI();
		const txCount = await web3.eth.getTransactionCount(sourceAccount);
		const networkId = await web3.eth.net.getId();
        // Build the transaction
        const txObject = {
          	nonce: web3.utils.toHex(txCount),
          	to: contractAddress,
          	from: sourceAccount,
          	chainId: networkId,
          	value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          	gasLimit: web3.utils.toHex(330000),
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

export default addWebAppAction;