import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import publicIP from 'react-native-public-ip';
import Web3 from 'web3';
import EthereumDataMin from './Components/EthereumDataMin';
import Contact from './Components/Contact';
import Opener from './Components/Opener';
import cookieABI from'./Components/Cookies/Cookies.json';

class Application extends Component {
constructor() {
    super();
    this.state = {
      count: 0,
      ip: 'Your ip address could not be set. Maybe your privacy settings, well done :)',
      sessionID: 0,
    };
  }
  async register(ip) {
    if (this.state.count == 0) {
      try {
          const sourceAccount = '0x77754bDDA8a6391f340Bb2ffe2DA6A58A30B7228';
          const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0"));
          const contractAddress = '0x91B245abbDC633A0A7dDC25316476e176D42DCc0';
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
          this.state.sessionID = transaction.result;
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
          this.register(ip);
          const count = 1;
          this.setState({count, ip});
        })
        .catch(error => {
          this.register('HiddenIP');
          const count = 1;
          this.setState({count});
          console.log('IP-error :', error);
        });
    } return (
      <section id='App'>
        <div className="App">
          <Opener ip = {this.state.ip} sessionID = {this.props.sessionID} />
          <EthereumDataMin ip = {this.state.ip} sessionID = {this.props.sessionID} />
          <Contact ip = {this.state.ip} sessionID = {this.props.sessionID} />
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