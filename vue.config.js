const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
module.exports = {
    publicPath:'/',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    // productionSourceMap: false,
    // 所有 webpack-dev-server 的选项都支持。
    devServer: {
        // 配置多个代理
        proxy: {
            // "/detail": { 
            //     target: "http://39.98.227.114:9550/", // 重新映射的新地址 
            //     changeOrigin: true, // 是否跨域
            //     pathRewrite: {
            //         "^/detail": "/detail" // 去掉接口地址中的api字符串
            //     }
            // },
            "/detail": {
                target: "http://39.98.227.114:9560/", // 重新映射的新地址 
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    "^/detail": "/detail" // 去掉接口地址中的api字符串
                }
            },
            "/front": {
                target: "http://ll.edefang.net/", // 重新映射的新地址 
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    "^/front": "/front" // 去掉接口地址中的api字符串
                }
            }

        }
    },
    productionSourceMap: false, //打包之后不生成map文件
    chainWebpack: config => {
        config.optimization.minimize(true); //进行代码压缩
        config.externals({
            'echarts': 'echarts'
        });
    },
    configureWebpack: () => {
        return {
            plugins: [
                new CompressionWebpackPlugin({
                    filename: "[path].gzip[query]", // 提示compression-webpack-plugin@2.0.0的话filename改为asset
                    algorithm: "gzip",
                    test: new RegExp(
                        "\\.(" + productionGzipExtensions.join("|") + ")$"
                    ),
                    threshold: 10240, //内容超过10KB进行压缩
                    minRatio: 0.8
                })
            ]
        };
    }
}