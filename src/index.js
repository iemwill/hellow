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
      seed: null,
    };
  }
  async initSession() {
    try {
      const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
      const web3 = new Web3("https://rpc.api.moonbase.moonbeam.network");
      const contractAddress = '0x7436841Fcf89CAd2CA359A489924d5B5CF08804C';
      const account = web3.eth.accounts.create(web3.utils.randomHex(2048));
      const websiteNFTcontract = new web3.eth.Contract(websiteNFTabi, contractAddress);
      const tokenID = await websiteNFTcontract.methods.NFTsCount().call();
      console.log(tokenID);
      const myData = websiteNFTcontract.methods.mintNFT(
        sourceAccount, web3.utils.toHex(tokenID), "https://laubenheimer.eu/NFTs/" + tokenID, account.address).encodeABI();
      const estimateGas = await websiteNFTcontract.methods.mintNFT(
        sourceAccount, tokenID, "https://laubenheimer.eu/NFTs/" + tokenID, account.address).estimateGas({from: sourceAccount});
      console.log('ESTIMATED GAS: ', estimateGas);
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
        //gasPrice: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
        data: myData,
        maxPriorityFeePerGas: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
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
      console.log('Data: ', transaction.logs[0].data);
      console.log('SessionID: ', tokenID);
      this.setState({sessionID: tokenID, seed: account.privateKey});
    } catch (error) {
      console.log('Initialization failed: ', error);
    }
  }
  render() {
    if (this.state.count == 0) {
      this.initSession();
      const count = 1;
      this.setState({count: count});
    } return (
      <section id='App'>
        <div className="App">
          <Contact count = {this.state.count} sessionID = {this.state.sessionID} seed = {this.state.seed} />
        </div>
      </section>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('Application')
);