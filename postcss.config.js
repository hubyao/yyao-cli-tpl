module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-pxtorem": {
            rootValue: 108, // 设计图页面尺寸如果是750就填75,是640就填入64,
            propList: ["*"]
        }
    }
};