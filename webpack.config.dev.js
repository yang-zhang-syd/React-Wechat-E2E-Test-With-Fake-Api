var path = require('path');
var webpack = require('webpack');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: false
};

module.exports = {
  devtool: 'cheap-module-source-map',
  noInfo: false,
  entry: {
      app: [
          'webpack-dev-server/client?http://localhost:3000',
          'webpack/hot/only-dev-server',
          './src/index'
      ],
      vendor: [
          "react", 
          "redux", 
          "isomorphic-fetch", 
          "react-weui", 
          "react-redux", 
          "redux-thunk", 
          "redux-persist", 
          "react-router"
      ]
    },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
      {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap']},
      {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']}
    ]
  }
};
