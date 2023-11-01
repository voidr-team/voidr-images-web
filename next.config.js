const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18n,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    remotePatterns: [
      { hostname: 'lh3.googleusercontent.com', protocol: 'https' },
      { hostname: 'cdn.discordapp.com', protocol: 'https' }, // TODO: REMOVE LATER
      { hostname: 'ssl.stays.com.br', protocol: 'https' },
    ],
  },
}
module.exports = nextConfig
