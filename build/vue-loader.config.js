module.exports = (isDev) => {
    return {
        preserveWhitespace: true,
        //单独把.vue文件中css提取出来
        // 不取反报错提示：extract-text-webpack-plugin loader is used without th corresponding plugin
        extractCSS: !isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        //hotReload: isDev  根据环境生成
    }
}