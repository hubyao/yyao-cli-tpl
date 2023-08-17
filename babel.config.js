// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }

// babel.config.js
module.exports = {
    sourceType: 'unambiguous', // vue/cli antv/g6 兼容IE11
    presets: [
        [
            '@vue/app',
            {
                targets: {
                    // browsers: ['ie >= 7', 'safari >= 7']
                },
                useBuiltIns: 'entry',
                polyfills: ['es6.promise', 'es6.symbol']
            }
        ],
        // '@vue/babel-preset-jsx'
    ],
    // plugins: ['@babel/plugin-syntax-jsx']
}