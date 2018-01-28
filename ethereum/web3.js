import Web3 from 'web3'

let web3;
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    //we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider)
} else {
//we are on the server or the user is not running metabask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/LYT8oOCNelziQUTO4HE2'
    );
    web3 = new Web3(provider);
}
export default web3;
