module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changOrigin: true,
        pathRewrite: {//路径重写
          "^/api": ''
        }
      }
    }
  }
}