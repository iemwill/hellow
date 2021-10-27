import Web3 from 'web3';

async function contractDeploy(abi, bin, inputData) {
	try {
		//if (window.ethereum.enable) {...}
		//      else {}
		const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
		const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0"));
		const loadedContract = new web3.eth.Contract(abi);
		const myData = loadedContract.deploy({data: bin, arguments: inputData}).encodeABI();
		const txCount = await web3.eth.getTransactionCount(sourceAccount);
		const networkId = await web3.eth.net.getId();
        // Build the transaction
        const txObject = {
          	nonce: web3.utils.toHex(txCount),
          	from: sourceAccount,
          	chainId: networkId,
          	value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          	gasLimit: web3.utils.toHex(1000000),
          	gasPrice: web3.utils.toHex(web3.utils.toWei('5', 'gwei')),
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
      	console.log('Deployment failed: ', error);
    }
}

export default contractDeploy;