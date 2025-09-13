const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      // Redirect festival URLs without locale to default locale (en)
      {
        source: '/festival',
        destination: '/en/festival',
        permanent: false,
      },
      {
        source: '/festival/:path+',
        destination: '/en/festival/:path+',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;