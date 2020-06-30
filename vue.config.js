
var path = require('path')

const env = process.env.NODE_ENV

function resolve (dir) {
  // console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
  // 根据环境使用cdn或路径
  publicPath: process.env.npm_config_cdn ? 'cdn-path/' : '/',
  productionSourceMap: false, // 不在production环境使用SourceMap
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@components', resolve('src/components'))
      .set('@config', resolve('src/config'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
      .set('@theme', resolve('theme'))
      .set('@lang', resolve('lang'))

    // 打包文件带hash
    config.output.filename('[name].[hash].js').end()
    
    if (process.env.npm_config_analyze) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: (config) => {
    // 入口文件
    config.entry.app = ['babel-polyfill', './src/main.js']

    // 只有打包生产环境才需要将console删除
    if (env === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    }
  },
  devServer: {
    disableHostCheck: true
  }
  // devServer: {
  //   host: 'localhost', // 要设置当前访问的ip 否则失效
  //   open: true, // 浏览器自动打开页面
  //   proxy: {
  //     '/': {
  //       target: '目标网址',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
