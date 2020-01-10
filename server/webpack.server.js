const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we're building bundle for nodeJs
  target: 'node',

  // tell webpack the root file of server app
  entry: './src/index.js',

  // tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // tell webpack to not bundle any libraries
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
