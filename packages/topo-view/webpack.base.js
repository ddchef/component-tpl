const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const nodeExternals = require('webpack-node-externals');
/** * @type import('webpack').Configuration */
module.exports = {
  entry: './libs/index.js',
  mode: "production",
  devtool: "source-map",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use:[
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'js',
              target: 'es2015'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'scss-loader',
        ]
      },
      {
        test: /\.(png|mp4|svg|woff|woff2)$/i,
        type: "asset"
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  optimization:{
    minimize: false
  }
}