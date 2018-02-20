import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    (JSON).parse(CampaignFactory.interface),
    '0xa87F0D2F996b99B080F0a5677cD3cAA12FbdF0A7'
);

export default instance;