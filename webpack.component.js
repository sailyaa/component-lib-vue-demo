/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-03 22:20:16
 * @LastEditors: linda
 * @LastEditTime: 2022-03-03 22:55:09
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log(files);
  for (let file of files) {
   const component = file.split(/[/.]/)[2];
   list[component] = `./${file}`
  }
  console.log(list);
}

makeList('components/lib', list)
module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}