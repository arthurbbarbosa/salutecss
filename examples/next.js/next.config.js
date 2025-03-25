const { SaluteWebpackPlugin } = require('salutecss')

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.plugins.push(new SaluteWebpackPlugin())
    return config
  }
}
