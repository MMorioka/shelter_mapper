const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const node = {
  __dirname: true,
};

module.exports = {
  target: 'node',
  node: node,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      fs: false, // or a specific fallback module
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      vm: require.resolve("vm-browserify"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
};
