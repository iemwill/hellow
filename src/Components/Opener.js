import React, { Component } from 'react';
import publicIP from 'react-native-public-ip';
import Web3 from 'web3';
const consumerAbi = require('./Cookies/register.json');

class Opener extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      ip: 'Your ip address could not be set. Maybe your privacy settings, well done :)',
    };
  }
  async register(ip) {
    if (this.state.count == 0) {
      try {
          const sourceAccount = '0x77754bDDA8a6391f340Bb2ffe2DA6A58A30B7228';
          const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0"));
          const consumerAddress = '0x91B245abbDC633A0A7dDC25316476e176D42DCc0';
          const consumerContract = new web3.eth.Contract(consumerAbi, consumerAddress);
          const myData = consumerContract.methods.register(ip).encodeABI();
          const txCount = await web3.eth.getTransactionCount(sourceAccount);
          // Build the transaction
          const txObject = {
              nonce: web3.utils.toHex(txCount),
              to: consumerAddress,
              from: sourceAccount,
              chainId: 3,
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
      } catch (error) {
        console.log('Registration failed: ', error);
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
    }
    return (
      <section id="opener">
        <div className="opener">
          <h3>{this.state.ip}<br/>Your visit was registered at the Ethereum Blockchain <a href="https://ropsten.etherscan.io/address/0x91B245abbDC633A0A7dDC25316476e176D42DCc0" target='_blank' rel='noreferrer'>Ropsten.</a></h3>
          <br/><br/>
          <h1>
          Bitcoin is here to free the people. from corruption, fraud, backdoor agreements, ec. <br/><br/>
          Bitcoin enables open democracy mixed with technocracy. <br/><br/>
          Ethereum can be seen as Bitcoin's twin and a "playground" for more unsecure procedures, not just because it is turing complete. <br/><br/>
          </h1>
          <h2>- for&#40;ever&#41;&#123;young&#125; - <br/><br/></h2>
          <h1><br/><br/> ! Power To The People ! <br/><hr/></h1>
        </div>
  	  </section>
    );
  }
}
export default Opener;