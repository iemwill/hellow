import Web3 from 'web3';
import websiteNFTabi from'./websiteNFT.json';
async function addWebAppAction(buttonID, account, sessionID) {
	try {
		const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
        const web3 = new Web3("https://rpc.api.moonbase.moonbeam.network");
		const contractAddress = '0x7436841Fcf89CAd2CA359A489924d5B5CF08804C';
		const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
		const myData = websiteNFTcontract.methods.mintToken(
            web3.utils.toHex(sessionID), account, web3.utils.toHex(buttonID)).encodeABI();
		const estimateGas = websiteNFTcontract.methods.mintToken(
            web3.utils.toHex(sessionID), account, web3.utils.toHex(buttonID)).estimateGas({from: sourceAccount});
        console.log('ESTIMATEGAS: ', estimateGas)
        const txCount = await web3.eth.getTransactionCount(sourceAccount);
		const networkId = await web3.eth.net.getId();
        // Build the transaction
        const txObject = {
          	nonce: web3.utils.toHex(txCount),
          	to: contractAddress,
          	from: sourceAccount,
          	chainId: networkId,
          	value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          	gasLimit: web3.utils.toHex(Math.round(estimateGas * 1.1)),
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