const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './app/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.(jpg|jpeg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      title: 'Ash Dowie',
      template: './app/index.html.ejs'
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app')
    }
  },
  devServer: {
    publicPath: '/',
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  devtool: 'source-map'
}
