const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variable.scss";` //引入全局变量
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@views": resolve("src/views"),
        "@components": resolve("src/components"),
        "@assets": resolve("src/assets"),
        "@utils": resolve("src/utils")
      }
    }
  },
  devServer: {
    open: true,
    port: 8080,
    host: "localhost",
    hot: true,
    proxy: {
      "/api": {
        target: process.env.BASE_URL, //服务器地址
        changeOrigin: true //跨域
        // pathRewrite: {
        //   "^/api": "/api"
        // }
      }
    }
  }
});
