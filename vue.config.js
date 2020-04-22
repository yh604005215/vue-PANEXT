module.exports = {
  devServer: {
    proxy: {
      '/hqcc': {
        target: 'http://m.pnext.top/#/',
        changeOrigin: true,
        pathRewrite: {
          '^/hqcc': ''
        }
      }
    }
  }
}
