const path = require('path');
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS = /\.global\.css/;

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: "server.js"
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true
              },
            }
          }
        ],
        exclude: GLOBAL_CSS
      },
      {
        test: GLOBAL_CSS,
        use: ['css-loader']
      }
    ]
 },
};
