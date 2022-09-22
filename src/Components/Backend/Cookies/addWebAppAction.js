import Web3 from 'web3';
import cookieAbi from './Cookies.json';
async function addWebAppAction(ip, buttonID, sessionID) {
	try {
		const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
		const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network');
		const contractAddress = '0x48bfb22ebb07d897ceb7b7328400ba3f1651f0ae';
		const cookieContract = new web3.eth.Contract(cookieAbi, contractAddress);
		const myData = cookieContract.methods.webAppAction(ip, web3.utils.toHex(buttonID), web3.utils.toHex(sessionID)).encodeABI();
		const txCount = await web3.eth.getTransactionCount(sourceAccount);
		const networkId = await web3.eth.net.getId();
        // Build the transaction
        const txObject = {
          	nonce: web3.utils.toHex(txCount),
          	to: contractAddress,
          	from: sourceAccount,
          	chainId: networkId,
          	value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          	gasLimit: web3.utils.toHex(73000),
          	//gasPrice: web3.utils.toHex(web3.utils.toWei('2', 'Gwei')),
          	data: myData,
            maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei('1', 'Gwei')),
            type: 0x02
        };
        // Sign the transaction
        const raw = await web3.eth.accounts.signTransaction(
          	txObject,
          	process.env.REACT_APP_PRIVATE_KEY
        );
        // Broadcast the transaction
        const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
        console.log('TX: ', transaction);
    } catch (error) {
      	console.log('Add Action failed: ', error);
    }
}
export default addWebAppAction;