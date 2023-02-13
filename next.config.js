/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
*/

const Dotenv = require('dotenv-webpack');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv());
    return config;
  },
};

module.exports = nextConfig;
