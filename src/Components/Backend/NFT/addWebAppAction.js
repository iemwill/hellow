import Web3 from 'web3';
import websiteNFTabi from'./websiteNFT.json';
async function addWebAppAction(buttonID, account, userAccount, sessionID) {
	try {
		const sourceAccount = '0xDE328FD211901daA74a15C461bfd97560E1DF6a5';
    const web3 = new Web3('https://rpc.api.moonbeam.network');
		const contractAddress = '0xD7c2C50d5b92b649B0a4FC30BC9F56953482E489';
		const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
    if(userAccount == 0) {
      const myData = websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, web3.utils.toHex(buttonID)).encodeABI();
      const estimateGas = await websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, web3.utils.toHex(buttonID)).estimateGas({from: sourceAccount});
      console.log("ESTIMATED GAS FOR CLICK ACTION: ", estimateGas)
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
      if ('Notification' in window) {
        var optionSend = {
          body: "A transation is on its way to contract 0xD7c2C50d5b92b649B0a4FC30BC9F56953482E489 on the moonbeam network.",
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification("Transaction Sent", optionSend).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/address/0xD7c2C50d5b92b649B0a4FC30BC9F56953482E489", "_blank");
        };
      };
      console.log("Broadcasting the transaction to the network...");
      const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
      console.log("TX: ", transaction);
      if ('Notification' in window) {
        var optionSent = {
          body: "The sent transaction has been minted on the moonbeam network. TxHash: " + transaction.transactionHash,
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification("Transaction Minted", optionSent).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/tx/" + transaction.transactionHash, '_blank');
        };
      };
    }
    else {
      const myData = websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, userAccount, web3.utils.toHex(buttonID)).encodeABI();
      const estimateGas = await websiteNFTcontract.methods.mintToken(
        web3.utils.toHex(sessionID), account, userAccount, web3.utils.toHex(buttonID)).estimateGas({from: sourceAccount});
      console.log("ESTIMATED GAS FOR CLICK ACTION: ", estimateGas)
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
      if ('Notification' in window) {
        var optionSend = {
          body: "A transation is on its way to contract 0xD7c2C50d5b92b649B0a4FC30BC9F56953482E489 on the moonbeam network.",
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification("Transaction Sent", optionSend).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/address/0xD7c2C50d5b92b649B0a4FC30BC9F56953482E489", '_blank');
        };
      };
      console.log("Broadcasting the transaction to the network...");
      const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
      console.log("TX: ", transaction);
      if ('Notification' in window) {
        var optionSent = {
          body: "The sent transaction has been minted on the moonbeam network. TxHash: " + transaction.transactionHash,
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification("Transaction Minted", optionSent).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/tx/" + transaction.transactionHash, '_blank');
        };
      };
    };
  } catch (error) {
  	console.log("Add Action failed: ", error);
  }
}
export default addWebAppAction;