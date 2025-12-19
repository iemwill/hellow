import { useState, Component } from 'react';
import { createRoot } from 'react-dom/client';
import Web3 from 'web3';
import Contact from './Components/Frontend/Contact';
import websiteNFTabi from'./Components/Backend/NFT/websiteNFT.json';
class DecentralizedApplication extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      sessionID: null,
      seed: "Be patient, we use 2048 random bits to create the private key which will show up here, if you have not connected your wallet",
      customerAccount: "Your connected address will show up here",
      userAccount: "To be computed",
    };
  }  
  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification.");
    } else {
      Notification.requestPermission();
      console.log('Notification permission requested.')
    }
  }
  async initSession() {
    Notification.onclick = (event) => {
      event.preventDefault(); // prevent the browser from focusing the Notification's tab
      window.open("http://www.mozilla.org", "_blank");
    };
    try {
      this.state.count = 1;
      const sourceAccount = '0x45e16b7B5799fd41B02Fee05e6A9BCD202208B28';
      const web3 = new Web3("https://rpc.api.moonbeam.network");
      const contractAddress = '0x6C9D8a2Ff94D84679383DC06646165743B766940';
      const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
      const tokenID = await websiteNFTcontract.methods.NFTsCount().call();
      //Use of existing web3 wallet
      if(window.ethereum) {
        console.log('Requesting wallet.');
        const account = await window.ethereum.request({method:'eth_requestAccounts'});
        this.setState({sessionID: tokenID, customerAccount: account[0]});
        console.log("Connected Account: " + account[0]);
        const myData = websiteNFTcontract.methods.mintNFT(
          sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account[0]).encodeABI();
        const estimateGas = await websiteNFTcontract.methods.mintNFT(
          sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account[0]).estimateGas({from: sourceAccount});
        console.log('ESTIMATED GAS WITH EXISTING ACCOUNT: ', estimateGas);
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
          maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),
          type: 0x02
        };
        // Sign the transaction
        const raw = await web3.eth.accounts.signTransaction(
          txObject,
          process.env.REACT_APP_PRIVATE_KEY
        );
        // Broadcast the transaction
        var optionSend = {
          body: 'A transation is on its way to contract 0x6C9D8a2Ff94D84679383DC06646165743B766940 on the moonbeam network.',
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification('Transaction Sent', optionSend).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/address/0x6C9D8a2Ff94D84679383DC06646165743B766940", "_blank");
        };
        console.log("Broadcasting the transaction to the network...");
        const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
        console.log('TX: ', transaction);
        console.log('SessionID: ', tokenID);
        var optionSent = {
          body: 'The sent transaction has been minted on the moonbeam network. TxHash: ' + transaction.transactionHash,
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification('Transaction Minted', optionSent).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/tx/" + transaction.transactionHash, "_blank");
        };
      }
      //Create web3 wallet/account
      else {
        const account = web3.eth.accounts.create(web3.utils.randomHex(2048));
        console.log("Created Account 1: " + account.address);
        this.setState({sessionID: tokenID, seed: account.privateKey, userAccount: account.address});
        const myData = websiteNFTcontract.methods.mintNFT(
        sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account.address).encodeABI();
        const estimateGas = await websiteNFTcontract.methods.mintNFT(
        sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account.address).estimateGas({from: sourceAccount});
        console.log('ESTIMATED GAS WITH CREATED ACCOUNT: ', estimateGas);
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
          maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),
          type: 0x02
        };
        // Sign the transaction
        const raw = await web3.eth.accounts.signTransaction(
          txObject,
          process.env.REACT_APP_PRIVATE_KEY
        );
        // Broadcast the transaction
        var optionSend = {
          body: 'A transation is on its way to contract 0x6C9D8a2Ff94D84679383DC06646165743B766940 on the moonbeam network.',
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification('Transaction Sent', optionSend).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/address/0x6C9D8a2Ff94D84679383DC06646165743B766940", "_blank");
        };
        console.log("Broadcasting the transaction to the network...");
        const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
        console.log('TX: ', transaction);
        console.log('SessionID: ', tokenID);
        var optionSent = {
          body: 'The sent transaction has been minted on the moonbeam network. TxHash: ' + transaction.transactionHash,
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification('Transaction Minted', optionSent).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/tx/" + transaction.transactionHash, "_blank");
        };
      }
    }
    catch (error) {
      try {
        console.log('Initialization failed 1: ', error);
        const sourceAccount = '0x45e16b7B5799fd41B02Fee05e6A9BCD202208B28';
        const web3 = new Web3("https://rpc.api.moonbeam.network");
        const contractAddress = '0x6C9D8a2Ff94D84679383DC06646165743B766940';
        const account = web3.eth.accounts.create(web3.utils.randomHex(2048));
        console.log("Created Account 1: " + account.address);
        const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
        const tokenID = await websiteNFTcontract.methods.NFTsCount().call();
        this.setState({sessionID: tokenID, seed: account.privateKey, userAccount: account.address});
        const myData = websiteNFTcontract.methods.mintNFT(
        sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account.address).encodeABI();
        const estimateGas = await websiteNFTcontract.methods.mintNFT(
        sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account.address).estimateGas({from: sourceAccount});
        console.log('ESTIMATED GAS WITH CREATED ACCOUNT: ', estimateGas);
        const txCount = await web3.eth.getTransactionCount(sourceAccount);
        const networkId = await web3.eth.net.getId();
        const gasPrice = await web3.eth.getGasPrice();
        // Build the transaction
        const txObject = {
          nonce: txCount,
          to: contractAddress,
          from: sourceAccount,
          chainId: networkId,
          value: web3.utils.toWei('0', 'ether'),
          gas: estimateGas,
          data: myData,
          maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),
          type: 0x02
        };
        // Sign the transaction
        const raw = await web3.eth.accounts.signTransaction(
          txObject,
          process.env.REACT_APP_PRIVATE_KEY
        );
        // Broadcast the transaction
        var optionSend = {
          body: 'A transation is on its way to contract 0x6C9D8a2Ff94D84679383DC06646165743B766940 on the moonbeam network.',
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification('Transaction Sent', optionSend).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/address/0x6C9D8a2Ff94D84679383DC06646165743B766940", "_blank");
        };
        console.log("Broadcasting the transaction to the network...");
        const transaction = await web3.eth.sendSignedTransaction(raw.rawTransaction);
        console.log('TX: ', transaction);
        console.log('SessionID: ', tokenID);
        var optionSent = {
          body: 'The sent transaction has been minted on the moonbeam network. TxHash: ' + transaction.transactionHash,
          icon: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029 auto=compress&cs=tinysrgb&dpr=1&w=500',
          dir: 'ltr',
        };
        new Notification('Transaction Minted', optionSent).onclick = (event) => {
          event.preventDefault();
          window.open("https://moonscan.io/tx/" + transaction.transactionHash, "_blank");
        };
      }
      catch(error2) {
        console.log('Initialization failed 2: ', error2);
      }
    }
  }
  render() {
    if (this.state.count == 0)
        this.initSession();
    return (
      <section id='dApp'>
        <div className="dApp">
          <Contact 
            count = {this.state.count} 
            sessionID = {this.state.sessionID} 
            seed = {this.state.seed}
            customerAccount = {this.state.customerAccount}
            userAccount = {this.state.userAccount}
          />
        </div>
      </section>
    );
  }
}
const root = createRoot(document.getElementById('DecentralizedApplication'));
root.render(<DecentralizedApplication />);