import React, { Component } from 'react';
const Web3 = require('web3');
class EthereumDataMin extends Component {
	constructor() {
    	super();
	    this.state = {
	      latestBlock: {},
	      length: Number,
	      count: 0,
	    }
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
  				
  		}
	}
	render() {
		if (this.state.count === 0) {
			this.getLatestBlock();
		}
		const blockNumber = this.state.latestBlock;
		const length = this.state.length;
	return (
		<section id="ethereumDataMin">
		<div className="ethereumDataMin">
			<a href='https://etherscan.io/blocks' target="_blank" rel='noreferrer'>
			<button>the ethereum blockchain</button>
			</a>
			<br/><h2>~Blocknumber~<br/><span>{blockNumber.number}</span></h2>
			<br/><h2>~Puzzle Solver~<br/><span>{blockNumber.miner}</span></h2>
			<br/><h2>~Transactions~<br/><span>{length}</span></h2>
			<br/><h2>~Size in Bytes~<br/><span>{blockNumber.size}</span></h2>
			<button onClick={() => this.getLatestBlock()}>live update</button><br/><br/><br/>
			<h3>To verify the above visualized data look at the ethereum blockchain explorer.<br/>
			A tool to read the blockchain via the browser.
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