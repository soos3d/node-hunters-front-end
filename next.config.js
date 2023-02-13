/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
*/

const nextConfig = {
  reactStrictMode: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'rule-name': 'off',
  },
};

module.exports = nextConfig;
