import React, { Component } from 'react';
const Web3 = require('web3');
import addWebAppAction from './Cookies/addWebAppAction';
class EthereumDataMin extends Component {
	constructor() {
    	super();
	    this.state = {
	      latestBlock: {},
	      length: Number,
	      count: 0,
	    };
  	}
	async getLatestBlock() {
  		try {
		    const web3 = new Web3(
	    		new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0')
	  		);
	  		const latestBlock = await web3.eth.getBlock('latest');
	  		const length = latestBlock.transactions.length;
	  		const count = 1;
	  		this.setState({latestBlock, length, count});
  		} catch (error){
  			console.log('FAILED TO LOAD BLOCK: ', error);
  		}
	}
  	_addWebAppAction (buttonID) {
	    if (this.props.count == 2) {
	    	this.getLatestBlock();
	        addWebAppAction('HiddenIP', buttonID, this.props.sessionID);
	    } else {
	    	this.getLatestBlock();
	      	addWebAppAction(this.props.ip, buttonID, this.props.sessionID);      
	    }
	}
	render() {
		if (this.state.count == 0) {
			this.getLatestBlock();
		}
		const blockNumber = this.state.latestBlock;
		const length = this.state.length;
	return (
		<section id="ethereumDataMin">
			<div className="ethereumDataMin">
				<a href='https://etherscan.io/blocks' target="_blank" rel='noreferrer' onClick={() => this._addWebAppAction(2)}>
				<button>ethereum data</button>
				</a>
				<br/><h2>Blocknumber<br/><span>{blockNumber.number}</span></h2>
				<br/><h2>Puzzle Solver<br/><span>{blockNumber.miner}</span></h2>
				<br/><h2>Transactions<br/><span>{length}</span></h2>
				<br/><h2>Size in Bytes<br/><span>{blockNumber.size}</span></h2>
				<button onClick={() => this._addWebAppAction(3)}>update block</button><br/><br/><br/>
				<h3>To verify the above visualized data take a look at the ethereum blockchain explorer.<br/>
				A tool to read data from the ethereum blockchain via the browser.
				<br/>
				(button on top)
				</h3>
				<br/><br/><br/><br/><hr/>
			</div>
		</section>
  	)
  }
}
export default EthereumDataMin;