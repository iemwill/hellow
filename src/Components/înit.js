import abi from './Components/Backend/BaseToken/BaseTokenAbi.js';
import bin from './Components/Backend/BaseToken/BaseTokenBin.js';
import contractDeploy from './Components/Backend/deploy.js';
const input = ['0x77754bdda8a6391f340bb2ffe2da6a58a30b7228', 118097355];
const deployRegister = await contractDeploy(abi, bin, input);
console.log('DEPLOY::', deployRegister);

// import MyContract fom './contracts/MyContract.json'; //truffle project dir
// web3 = new Web3(Web3.givenProvider);
// const myContractWeb3 = new web3.eth.contract(MyContract.abi, "0x00");
    
// // and then call the function that I want to        
// const functionThatIWantToUseFromSmartContract = async () =>{        
//     const account = await window.ethereum.enable();
//     const accounts = account[0];
//     const gas = await 
//     myContractWeb3.methods.theFunction(args).estimateGas();
//     await myContractWeb3.methods.theFunction(args).send();
// }