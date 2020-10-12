const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const { HashedModuleIdsPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            return '[contenthash].[ext]';
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  plugins: [
    new HashedModuleIdsPlugin(),
  ],
});
