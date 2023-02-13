
// Import banners from the images folder
import chainstackBanner from '../images/chainstack.png'
import alchemykBanner from '../images/alchemy.png'
import quicknodeBanner from '../images/quicknode.png'
import infuraBanner from '../images/infura.png'

const chainstackEndpoint = process.env.REACT_APP_CHAINSTACK_AWS_VIRGINIA

// List of providers  
const providersList = [
  {
    name: 'chainstack',
    endpoint: chainstackEndpoint,
    image: chainstackBanner.src,
    title: 'Chainstack',
    link: 'https://chainstack.com/',
    description: 'Ethereum mainnet node | Free plan',
  },
  {
    name: 'alchemy',
    endpoint: process.env.REACT_APP_ALCHEMY,
    image: alchemykBanner.src,
    title: 'Alchemy',
    link: 'https://www.alchemy.com/',
    description: 'Ethereum mainnet node | Free plan',
  },
  {
    name: 'quicknode',
    endpoint: process.env.REACT_APP_QUICKNODE,
    image: quicknodeBanner.src,
    title: 'QuickNode',
    link: 'https://www.quicknode.com/',
    description: 'Ethereum mainnet node | Free plan',
  },
  {
    name: 'infura',
    endpoint: process.env.REACT_APP_INFURA,
    image: infuraBanner.src,
    title: 'Infura',
    link: 'https://www.infura.io/',
    description: 'Ethereum mainnet node | Free plan',
  },
  
];

export default providersList;