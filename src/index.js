import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import publicIP from 'react-native-public-ip';
import Connect from './Components/Frontend/Connect'
import Web3 from 'web3';
import sha256 from 'sha256';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import EthereumDataMin from './Components/Frontend/EthereumDataMin';
import Contact from './Components/Frontend/Contact';
import Opener from './Components/Frontend/Opener';
import cookieAbi from './Components/Backend/Cookies/Cookies.json';
import { useWeb3React } from "@web3-react/core";

const WalletConnect = new WalletConnectConnector({
	rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
	bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  
});
class Application extends Component {


constructor() {
    super();
    this.state = {
      count: 0,
      ip: 'Your ip address could not be set. Maybe your privacy settings or browser.',
      ipp: 'Your ip address could not be set. Maybe your privacy settings or browser.',
      sessionID: 0,
    };
  }
  async initSession(ip) {
    if (this.state.count == 0) {
      try {          
          const sourceAccount = '0x77754bdda8a6391f340bb2ffe2da6a58a30b7228';
          const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_API_KEY));
          const contractAddress = '0xd2cf9f677f361f23c576825978338c4a21291646';
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
              gasLimit: web3.utils.toHex(237000),
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
          console.log('SessionID: ', web3.eth.abi.decodeParameters(['string', 'uint256'], transaction.logs[0].data)[1]);
          this.setState({sessionID: web3.eth.abi.decodeParameters(['string', 'uint256'], transaction.logs[0].data)[1]});
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
          this.initSession(sha256(ip));
          const count = 1;
          this.setState({count, ip:sha256(ip), ipp:ip});
        })
        .catch(error => {
          if (this.state.count != 2) {
            this.initSession(sha256('HiddenIP'));
            const count = 2;
            this.setState({count, ip: sha256('HiddenIP')});
            console.log('IP-error :', error);
          }
        });
      
    }

    return (
			<section id="App">
				<div className="App">
					<Connect />
					<Opener
						ip={this.state.ip}
						ipp={this.state.ipp}
						count={this.state.count}
						sessionID={this.state.sessionID}
					/>

					<EthereumDataMin
						ip={this.state.ip}
						count={this.state.count}
						sessionID={this.state.sessionID}
					/>
					<Contact
						ip={this.state.ip}
						count={this.state.count}
						sessionID={this.state.sessionID}
					/>
				</div>
			</section>
		);
  }
}


function getLibrary(provider) {
	return new Web3Provider(provider);
}
ReactDOM.render(
	<React.StrictMode>
		<Web3ReactProvider getLibrary={getLibrary}>
			<Application />
		</Web3ReactProvider>
		,
	</React.StrictMode>,
	document.getElementById("Application")
);