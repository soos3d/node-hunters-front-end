//require('dotenv').config();

// Import banners from the images folder
import chainstackBanner from '../images/chainstack.png'
import alchemykBanner from '../images/alchemy.png'
import quicknodeBanner from '../images/quicknode.png'
import infuraBanner from '../images/infura.png'

// List of providers  
const providersList = [
  {
    index: 0,
    name: 'chainstack',
    image: chainstackBanner.src,
    title: 'Chainstack',
    link: 'https://chainstack.com/',
    description: 'Ethereum mainnet node | Free plan',
  },
  {
    index: 1,
    name: 'alchemy',
    image: alchemykBanner.src,
    title: 'Alchemy',
    link: 'https://www.alchemy.com/',
    description: 'Ethereum mainnet node | Free plan',
  },
  {
    index: 2,
    name: 'quicknode',
    image: quicknodeBanner.src,
    title: 'QuickNode',
    link: 'https://www.quicknode.com/',
    description: 'Ethereum mainnet node | Free plan',
  },
  {
    index: 3,
    name: 'infura',
    image: infuraBanner.src,
    title: 'Infura',
    link: 'https://www.infura.io/',
    description: 'Ethereum mainnet node | Free plan',
  },
  
];

export default providersList;