const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

require('dotenv').config()

module.exports = {
  mode: 'development',
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
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src', 'index.tsx')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
    chunkFilename: '[name].[hash].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules|lib/,
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      cache: false,
    }),
    // new webpack.DefinePlugin({
    //   'process.env.API_URL': JSON.stringify(process.env.API_URL),
    // }),
    new webpack.EnvironmentPlugin(['API_URL']),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      _: path.resolve(__dirname, 'src'),
    },
  },
}

// for package
//     "build": "NODE_ENV='production' webpack",

// module.exports = {
//   entry: './app/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index_bundle.js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       { test: /\.(js)$/, use: 'babel-loader' },
//       { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
//     ]
//   },
//   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'app/index.html'
//     }),
//     new CopyPlugin([
//       { from : '_redirects' }
//     ])
//   ],
//   devServer: {
//     historyApiFallback: true
//   }
// }
