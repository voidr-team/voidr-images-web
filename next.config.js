const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18n,
  poweredByHeader: false,
  trailingSlash: true,
}
module.exports = nextConfig
