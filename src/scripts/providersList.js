//require('dotenv').config();

// Import banners from the images folder
import chainstackBanner from '../images/chainstack.png'
import alchemykBanner from '../images/alchemy.png'
import quicknodeBanner from '../images/quicknode.png'
import infuraBanner from '../images/infura.png'
import ankrBanner from '../images/ankr.png'
import cloudflareBanner from '../images/cloudflare.png'
import flashbotsBanner from '../images/flashbots.png'
import llamanodesBanner from '../images/llamanodes.png'
import poktBanner from '../images/pokt.png'
import blastBanner from '../images/blast.png'
import nodereal from '../images/nodereal.png'
import gateway from '../images/gateway.png'

// List of providers  
const providersList = [
  {
    index: 0,
    name: 'chainstack',
    image: chainstackBanner.src,
    title: 'Chainstack',
    link: 'https://chainstack.com/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 1,
    name: 'alchemy',
    image: alchemykBanner.src,
    title: 'Alchemy',
    link: 'https://www.alchemy.com/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 2,
    name: 'quicknode',
    image: quicknodeBanner.src,
    title: 'QuickNode',
    link: 'https://www.quicknode.com/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 3,
    name: 'infura',
    image: infuraBanner.src,
    title: 'Infura',
    link: 'https://www.infura.io/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 4,
    name: 'ankr',
    image: ankrBanner.src,
    title: 'Ankr',
    link: 'https://www.ankr.com/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 5,
    name: 'cloudflare',
    image: cloudflareBanner.src,
    title: 'Cloudflare',
    link: 'https://www.cloudflare.com/web3/',
    description: 'Ethereum mainnet | Public',
  },
  {
    index: 6,
    name: 'flashbots',
    image: flashbotsBanner.src,
    title: 'Flashbots',
    link: 'https://www.flashbots.net/',
    description: 'Ethereum mainnet | Public',
  },
  {
    index: 7,
    name: 'llamanodes',
    image: llamanodesBanner.src,
    title: 'LlamaNodes',
    link: 'https://llamanodes.com/',
    description: 'Ethereum mainnet | Public',
  },
  {
    index: 8,
    name: 'pokt',
    image: poktBanner.src,
    title: 'Pocket Network',
    link: 'https://www.pokt.network/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 9,
    name: 'blast',
    image: blastBanner.src,
    title: 'Blast API',
    link: 'https://blastapi.io/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 10,
    name: 'nodereal',
    image: nodereal.src,
    title: 'NodeReal',
    link: 'https://nodereal.io/',
    description: 'Ethereum mainnet | Free plan',
  },
  {
    index: 11,
    name: 'gateway',
    image: gateway.src,
    title: 'Gateway.fm',
    link: 'https://www.gateway.fm/',
    description: 'Ethereum mainnet | Public',
  },
  
];

export default providersList;