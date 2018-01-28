import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    (JSON).parse(CampaignFactory.interface),
    '0x1F02A566879ae65d3Bb35d829F56991D3c62812A'
);

export default instance;