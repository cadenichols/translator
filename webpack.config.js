const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',  
  devtool: 'cheap-source-map',  
  output: {
    filename: 'bundle.js',
    path: path.resolve('public')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['env'],
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'], 
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
};


