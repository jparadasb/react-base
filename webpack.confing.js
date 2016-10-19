var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss', 'sass']
    }]
  },
  postcss: [ autoprefixer({ browsers: ['last 5 versions'] }) ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
}
