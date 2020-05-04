const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  //   app.use(createProxyMiddleware('/v1', { target: 'https://www.google.com/' }));  //target是请求接口的根地址    /v1是请求的url地址中的前缀
  // //eg：https://www.google.com/v1/count/common/list  完整的接口地址

  app.use(
    createProxyMiddleware("/sss/", {
      target:
        "https://v1.itooi.cn/",
      changeOrigin: true,
      pathRewrite: {
        "^/sss/": ""
      }
    })
  );
};
