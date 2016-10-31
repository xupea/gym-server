var webpack = require('webpack')

module.exports = {
  entry: './view/main/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader!jsx-loader?harmony'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'less', '.css', '.json']
  }
}
