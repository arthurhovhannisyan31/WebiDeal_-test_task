const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
    chunkFilename: '[name].[hash].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin(['API_URL', 'PORT']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      cache: false,
      title: 'Production',
      favicon: path.resolve(__dirname, 'src/static', 'favicon.ico'),
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules|lib/,
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'public',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      _: path.resolve(__dirname, 'src'),
    },
  },
}
