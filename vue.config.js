module.exports = {
  devServer: {
    proxy: {
      '/api': {
        //https://api.51pgl.com/api/pro/page/enums?date=1579863581000
        target: 'https://m.sdyxmall.com',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false
};