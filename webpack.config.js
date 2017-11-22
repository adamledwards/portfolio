const path = require('path')
const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
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
    new HtmlWebpackPlugin({
      title: 'React',
      template: './app/index.html.ejs'

    }),
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, './schema.graphql'), // or schema.json
      src: path.resolve(__dirname, './app')
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
