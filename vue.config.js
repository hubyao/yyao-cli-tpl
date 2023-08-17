const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: './',
    transpileDependencies: ['*'],
    configureWebpack: config => { config.entry.app = ['babel-polyfill', './src/main.js']; },

})