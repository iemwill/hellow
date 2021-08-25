import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import publicIP from 'react-native-public-ip';
import Web3 from 'web3';
import EthereumDataMin from './Components/EthereumDataMin';
import Contact from './Components/Contact';
import Opener from './Components/Opener';
import cookieAbi from'./Components/Cookies/Cookies.json';

class Application extends Component {
constructor() {
    super();
    this.state = {
      count: 0,
      ip: 'Your ip address could not be set. Maybe your privacy settings, well done :)',
      sessionID: 0,
    };
  }
  async initSession(ip) {
    if (this.state.count == 0) {
      try {
          const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
          const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0"));
          const contractAddress = '0xa5ed244d0f294d920376994f6035d6f405888d31';
          const cookieContract = new web3.eth.Contract(cookieAbi, contractAddress);
          const myData = cookieContract.methods.initSession(ip).encodeABI();
          const txCount = await web3.eth.getTransactionCount(sourceAccount);
          const networkId = await web3.eth.net.getId();
          // Build the transaction
          const txObject = {
              nonce: web3.utils.toHex(txCount),
              to: contractAddress,
              from: sourceAccount,
              chainId: networkId,
              value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
              gasLimit: web3.utils.toHex(210000),
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
          console.log('Data: ', transaction.logs[0].data);
          console.log('SessionID: ', web3.eth.abi.decodeParameters(['string', 'uint256'], transaction.logs[0].data)[1])
          this.state.sessionID = web3.eth.abi.decodeParameters(['string', 'uint256'], transaction.logs[0].data)[1];
      } catch (error) {
        console.log('Initialization failed: ', error);
      }
    }
  }
  render() {
    //Get IP and register at a smart contract
    if (this.state.count == 0) {
      publicIP()
        .then(ip => {
          this.initSession(ip);
          const count = 1;
          this.setState({count, ip});
        })
        .catch(error => {
          this.initSession('HiddenIP');
          const count = 2;
          this.setState({count});
          console.log('IP-error :', error);
        });
    } return (
      <section id='App'>
        <div className="App">
          <Opener ip = {this.state.ip} count = {this.state.count} sessionID = {this.state.sessionID} />
          <EthereumDataMin ip = {this.state.ip} count = {this.state.count} sessionID = {this.state.sessionID} />
          <Contact ip = {this.state.ip} count = {this.state.count} sessionID = {this.state.sessionID} />
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