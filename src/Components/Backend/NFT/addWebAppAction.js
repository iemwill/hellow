import Web3 from 'web3';
import websiteNFTabi from'./websiteNFT.json';
async function addWebAppAction(buttonID, account, userAccount, sessionID) {
	try {
		const sourceAccount = '0x81EFbfd5853a0831031222dB1C93e1FA914A34e3';
    const web3 = new Web3("https://rpc.api.moonbase.moonbeam.network");
		const contractAddress = '0xc3e13D5E3e8fFa7E601f657Fd690AF70E224d1a5';
		const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
    if(userAccount == 0) {
      const myData = websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, web3.utils.toHex(buttonID)).encodeABI();
      const estimateGas = await websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, web3.utils.toHex(buttonID)).estimateGas({from: sourceAccount});
      console.log('ESTIMATED GAS FOR CLICK ACTION: ', estimateGas)
      const txCount = await web3.eth.getTransactionCount(sourceAccount);
      const networkId = await web3.eth.net.getId();
      // Build the transaction
      const txObject = {
        nonce: txCount,
        to: contractAddress,
        from: sourceAccount,
        chainId: networkId,
        value: web3.utils.toWei('0', 'ether'),
        gas: estimateGas,
        data: myData,
        maxPriorityFeePerGas: web3.utils.toWei('1', 'Gwei'),
        type: 0x02
      };       
      // Sign the transaction
      const raw = await web3.eth.accounts.signTransaction(
        txObject,
        process.env.REACT_APP_PRIVATE_KEY
      );
      // Broadcast the transaction
      console.log("Broadcasting the transaction to the network...");
      const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
      console.log('TX: ', transaction);
    } else {
      const myData = websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, userAccount, web3.utils.toHex(buttonID)).encodeABI();
      const estimateGas = await websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, userAccount, web3.utils.toHex(buttonID)).estimateGas({from: sourceAccount});
      console.log('ESTIMATED GAS FOR CLICK ACTION: ', estimateGas)
      const txCount = await web3.eth.getTransactionCount(sourceAccount);
      const networkId = await web3.eth.net.getId();
      // Build the transaction
      const txObject = {
        nonce: txCount,
        to: contractAddress,
        from: sourceAccount,
        chainId: networkId,
        value: web3.utils.toWei('0', 'ether'),
        gas: estimateGas,
        data: myData,
        maxPriorityFeePerGas: web3.utils.toWei('1', 'Gwei'),
        type: 0x02
      };
      // Sign the transaction
      const raw = await web3.eth.accounts.signTransaction(
        txObject,
        process.env.REACT_APP_PRIVATE_KEY
      );
      // Broadcast the transaction
      console.log("Broadcasting the transaction to the network...");
      const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
      console.log('TX: ', transaction);
    }
  } catch (error) {
  	console.log('Add Action failed: ', error);
  }
}
export default addWebAppAction;