const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { NoEmitOnErrorsPlugin, HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'webpack-hot-middleware/client',
    './client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { babelrc: true },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NoEmitOnErrorsPlugin(),
    new HotModuleReplacementPlugin(),
  ],
};
