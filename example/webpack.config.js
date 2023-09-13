const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
/** * @type import('webpack').Configuration */
module.exports = {
  entry: './src/main.js',
  mode: "development",
  devtool: "source-map",
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
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ],
  optimization:{
    minimize: false
  },
  devServer:{
    hot: true,
    port: 3010
  }
}