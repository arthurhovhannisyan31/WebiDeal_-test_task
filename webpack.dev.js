const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src', 'index.tsx')],
  devServer: {
    host: 'localhost',
    hot: true,
    port: 3000,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 1000,
      ignored: ['node_modules'],
    },
  },
})
