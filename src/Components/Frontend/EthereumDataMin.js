import React, { Component } from 'react';
import addWebAppAction from '../Backend/Cookies/addWebAppAction';
const Web3 = require('web3');
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
	    		new Web3.providers.HttpProvider('https://public-node.rsk.co')
	  		);
	  		const latestBlock = await web3.eth.getBlock('latest');
	  		const length = latestBlock.transactions.length;
	  		const count = 1;
	  		console.log('LATEST BLOCK: ', latestBlock);
	  		this.setState({latestBlock, length, count});
  		} catch (error){
  			console.log('FAILED TO LOAD BLOCK: ', error);
  		}
	}
  	_addWebAppAction (buttonID) {
	  	addWebAppAction(this.props.ip, buttonID, this.props.sessionID);      
	}
	render() {
		if (this.state.count == 0) {
			this.getLatestBlock();
		}
		const block = this.state.latestBlock;
		const length = this.state.length;
	return (
		<section id="ethereumDataMin">
			<div className="ethereumDataMin">
				<a href='https://explorer.rsk.co/blocks' target="_blank" rel='noreferrer' onClick={() => this._addWebAppAction(2)}>
				<button>rsk data</button>
				</a>
				<br/><h2>Blocknumber<br/><span>{block.number}</span></h2>
				<br/><h2>Fee Recipient<br/><span>{block.miner}</span></h2>
				<br/><h2>Transactions<br/><span>{length}</span></h2>
				<br/><h2>Size in Bytes<br/><span>{block.size}</span></h2>
				<button onClick={() => this._addWebAppAction(3)}>update block</button><br/><br/><br/>
				<h3>To verify the above visualized data take a look at the rsk blockchain explorer.<br/>
				A tool to read data from the rsk blockchain via the browser.
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
