const Web3 = require('web3');
const consumerAbi = require('./register.json');
const pk = require('./.env');

const sourceAccount = '0xacabD7DE5ef1b5E8941F44F37a818C65E1469820';
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4fdbae7ae3e94fb9a3033c623fc4e7f0"));
const consumerAddress = '0x0EE233F5266b305e64A4559E802631d6B68a99E2';
web3.eth.defaultAccount = sourceAccount;
let consumerContract = new web3.eth.Contract(consumerAbi, consumerAddress);

const myData = consumerContract.methods.register(ip).encodeABI();
web3.eth.getTransactionCount(sourceAccount, (err, txCount) => {
    // Build the transaction
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       consumerAddress,
        from: sourceAccount,
        chainId: 3,
        value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit: web3.utils.toHex(2100000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
        data: myData  
    }
    // Sign the transaction
    const raw = web3.eth.accounts.signTransaction(
    	txObject,
    	pk
    );
    // Broadcast the transaction
    const transaction = web3.eth.sendSignedTransaction(raw, (err, tx) => {
        console.log(tx);
        console.log(err);
    });
});
