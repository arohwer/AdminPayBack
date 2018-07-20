var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    index: [
      './src/scripts/shared.js',
      './src/scripts/loader.js',
      './src/scripts/index-config.js'
    ],
    projects: [
      './src/scripts/shared.js',
      './src/scripts/project-config.js'
    ],
    events: [
      './src/scripts/shared.js',
      './src/scripts/events-config.js'],
    contact: [
      './src/scripts/shared.js',
      './src/scripts/contact-config.js']
  },
  output: {
    path: __dirname + '/build/assets/scripts',
    filename: 'bundle--[name].js'
  },
  plugins: [
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },

  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
};