const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    app: './.idea/js/main.js',
  },

  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './.idea/index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: '.idea/css', to: 'css' },
        { from: 'img', to: 'img' },
        { from: '.idea/about.html', to: 'about.html' },
        { from: '.idea/accessibility.html', to: 'accessibility.html' },
        { from: '.idea/contact.html', to: 'contact.html' },
        { from: '.idea/license.html', to: 'license.html' },
        { from: '.idea/privacy.html', to: 'privacy.html' },
        { from: '.idea/shop.html', to: 'shop.html' },
        { from: '.idea/_cookie-banner.html', to: '_cookie-banner.html' },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
