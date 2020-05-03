const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const vueConfig = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/blade-*': {
        target: process.env.API,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
  },
  // disable source map in production
  productionSourceMap: false,
}

module.exports = vueConfig
