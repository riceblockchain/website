// Configure image loader for Next.js
const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader' // Use webpack raw-loader for reading in .md files.
    })
    return config
  }
})