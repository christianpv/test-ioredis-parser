const path = require('path');

exports.default = {
  target: 'node',

  entry: {
    server: './src/index.ts',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
};