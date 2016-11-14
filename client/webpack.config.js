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
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'less', '.css', '.json']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ]
}
