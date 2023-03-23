import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3';
import Contact from './Components/Frontend/Contact';
import websiteNFTabi from'./Components/Backend/NFT/websiteNFT.json';
class Application extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      sessionID: null,
      seed: "Be patient, we use 2048 random bits to create the private key which will show up here, if you have not connected your wallet",
      customerAccount: "Your connected address will show up here",
      txObject: { },
    };
  }
  async initSession() {
    try {
      const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
      const web3 = new Web3("https://rpc.api.moonbase.moonbeam.network");
      const contractAddress = '0x7436841Fcf89CAd2CA359A489924d5B5CF08804C';
      const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
      const tokenID = await websiteNFTcontract.methods.NFTsCount().call();
      console.log('tokenID: ' + tokenID);
      //Use of existing web3 wallet
      if(window.ethereum) {
        console.log('Requesting wallet.');
        const account = await window.ethereum.request({method:'eth_requestAccounts'});
        console.log("Connected Account: " + account[0]);
        const myData = websiteNFTcontract.methods.mintNFT(
          sourceAccount, web3.utils.toHex(tokenID), "https://laubenheimer.eu/NFTs/" + tokenID, account[0]).encodeABI();
        const estimateGas = websiteNFTcontract.methods.mintNFT(
          sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account[0]).estimateGas({from: sourceAccount});
        console.log('ESTIMATED GAS WITH EXISTING ACCOUNT: ', estimateGas);
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
          maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
          type: 0x02
        };
        this.setState({sessionID: tokenID, customerAccount: account[0], txObject: txObject});
      }
      //Create web3 wallet/account
      else {
        const account = await web3.eth.accounts.create(web3.utils.randomHex(2048));
        const myData = websiteNFTcontract.methods.mintNFT(
        sourceAccount, web3.utils.toHex(tokenID), "https://laubenheimer.eu/NFTs/" + tokenID, account.Address).encodeABI();
        const estimateGas = websiteNFTcontract.methods.mintNFT(
        sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account.Address).estimateGas({from: sourceAccount});
        console.log('ESTIMATED GAS WITH CREATED ACCOUNT: ', estimateGas);
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
          maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
          type: 0x02
        };
        this.setState({sessionID: tokenID, seed: account.privateKey, txObject: txObject});
      }
      console.log("TxObject: " + this.state.txObject);
      // Sign the transaction
      const raw = await web3.eth.accounts.signTransaction(
        this.state.txObject,
        process.env.REACT_APP_PRIVATE_KEY
      );
      // Broadcast the transaction
      const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
      console.log('TX: ', transaction);
      console.log('Data: ', transaction.logs[0].data);
      console.log('SessionID: ', tokenID);
    }
    catch (error) {
      try {
        console.log('Initialization failed 1: ', error);
        const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
        const web3 = new Web3("https://rpc.api.moonbase.moonbeam.network");
        const account = await web3.eth.accounts.create(web3.utils.randomHex(2048));
        console.log("Created Account: " + account.Address);
        const contractAddress = '0x7436841Fcf89CAd2CA359A489924d5B5CF08804C';
        const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
        const tokenID = await websiteNFTcontract.methods.NFTsCount().call();
        console.log('tokenID: ' + tokenID);
        const myData = websiteNFTcontract.methods.mintNFT(
        sourceAccount, web3.utils.toHex(tokenID), "https://laubenheimer.eu/NFTs/" + tokenID, account.Address).encodeABI();
        const estimateGas = websiteNFTcontract.methods.mintNFT(
        sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account.Address).estimateGas({from: sourceAccount});
        console.log('ESTIMATED GAS WITH CREATED ACCOUNT: ', estimateGas);
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
          maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
          type: 0x02
        };
        this.setState({sessionID: tokenID, seed: account.privateKey, txObject: txObject});
        console.log("TxObject: " + this.state.txObject);
        // Sign the transaction
        const raw = await web3.eth.accounts.signTransaction(
          this.state.txObject,
          process.env.REACT_APP_PRIVATE_KEY
        );
        // Broadcast the transaction
        const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
        console.log('TX: ', transaction);
        console.log('Data: ', transaction.logs[0].data);
        console.log('SessionID: ', tokenID);
      }
      catch(error2) {
        console.log('Initialization failed 2: ', error2);
        this.setState({count: 1})
      }
    }
  }
  render() {
    if (this.state.count == 0) {
        this.initSession();
        const count = 1;
        this.setState({count: count});
    }
    return (
      <section id='App'>
        <div className="App">
          <Contact 
            count = {this.state.count} 
            sessionID = {this.state.sessionID} 
            seed = {this.state.seed}
            customerAccount = {this.state.customerAccount}
          />
        </div>
      </section>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('Application')
);