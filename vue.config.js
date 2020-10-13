const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: true,
  pages: {
    index: {
      // 测试时使用
      // entry: 'src/main.js',
      // 发布时使用
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
