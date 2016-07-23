var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

module.exports = {
    debug: false,
    noInfo: true,
    target: 'web',
    entry: {
        app: "./src/index",
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
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
            { test: /\.(jpe?g|png|gif)$/i, loaders: ['file'] },
            { test: /\.css/,include: path.join(__dirname, 'src'),loader: ExtractTextPlugin.extract('style', 'css') }
        ]
    }
};
