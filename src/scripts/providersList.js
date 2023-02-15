//require('dotenv').config();

// Import banners from the images folder
import chainstackBanner from '../images/chainstack.png'
import alchemykBanner from '../images/alchemy.png'
import quicknodeBanner from '../images/quicknode.png'
import infuraBanner from '../images/infura.png'
import ankrBanner from '../images/ankr.png'
import cloudflareBanner from '../images/cloudflare.png'

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
    description: 'Ethereum mainnet | Public RPC',
  },
  
];

export default providersList;