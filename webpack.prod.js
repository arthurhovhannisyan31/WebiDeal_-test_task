const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  entry: {
    app: './src/index.js',
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
})
