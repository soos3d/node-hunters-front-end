/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
*/

const nextConfig = {
  env: {
    NEXT_CHAINSTACK_AWS_VIRGINIA : process.env.NEXT_CHAINSTACK_AWS_VIRGINIA,
    NEXT_ALCHEMY : process.env.NEXT_ALCHEMY,
    NEXT_QUICKNODE : process.env.NEXT_QUICKNODE,
    NEXT_INFURA : process.env.NEXT_INFURA,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
