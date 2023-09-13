const path = require("path");
const {merge} = require('webpack-merge');
const baseConfig = require("./webpack.base");
const { EsbuildPlugin } = require('esbuild-loader')
const minConfig = {
  devtool: false,
  optimization:{
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        sourcemap: false,
        css: true
      })
    ]
  }
}
const esmConfig = merge(baseConfig,{
  experiments: {
    outputModule: true
  },
  output: {
    filename: 'topo-view.esm.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    }
  },
})
const commonConfig = merge(baseConfig,{
  output: {
    filename: 'topo-view.common.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'topoView',
      type: 'commonjs'
    }
  },
})
/** * @type import('webpack').Configuration */
module.exports = [
  esmConfig,
  merge(esmConfig,minConfig,{output:{filename:'topo-view.esm.min.js'}}),
  commonConfig,
  merge(commonConfig,minConfig,{output:{filename:'topo-view.common.min.js'}}),
]