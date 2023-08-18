# yyao-cli-tpl

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 浏览器兼容
```
# npx browserslist
and_chr 115
and_ff 115
and_qq 13.1
and_uc 15.5
android 115
android 4.4.3-4.4.4
android 4.2-4.3
android 4.1
android 4
baidu 13.18
bb 10
bb 7
chrome 116
chrome 115
chrome 114
chrome 113
chrome 112
chrome 111
chrome 110
chrome 109
chrome 108
chrome 107
chrome 106
chrome 105
chrome 104
chrome 103
chrome 102
chrome 101
chrome 100
chrome 99
chrome 98
chrome 97
chrome 96
chrome 95
chrome 94
chrome 93
chrome 92
chrome 91
chrome 90
chrome 89
chrome 88
chrome 87
chrome 86
chrome 85
chrome 84
chrome 83
chrome 81
chrome 80
chrome 79
chrome 78
chrome 77
chrome 76
chrome 75
chrome 74
chrome 73
chrome 72
chrome 71
chrome 70
chrome 69
chrome 68
chrome 66
chrome 65
chrome 61
chrome 60
chrome 56
chrome 49
chrome 48
chrome 40
chrome 38
edge 115
edge 114
edge 113
edge 112
edge 111
edge 110
edge 109
edge 108
edge 92
edge 18
firefox 116
firefox 115
firefox 114
firefox 113
firefox 112
firefox 111
firefox 110
firefox 109
firefox 108
firefox 103
firefox 102
firefox 91
firefox 84
firefox 78
firefox 52
firefox 43
ie 11
ie 10
ie 9
ie 8
ie_mob 11
ie_mob 10
ios_saf 17
ios_saf 16.6
ios_saf 16.5
ios_saf 16.4
ios_saf 16.3
ios_saf 16.2
ios_saf 16.1
ios_saf 16.0
ios_saf 15.6
ios_saf 15.5
ios_saf 15.4
ios_saf 15.2-15.3
ios_saf 15.0-15.1
ios_saf 14.5-14.8
ios_saf 14.0-14.4
ios_saf 13.4-13.7
ios_saf 13.3
ios_saf 12.2-12.5
ios_saf 12.0-12.1
ios_saf 11.3-11.4
ios_saf 11.0-11.2
ios_saf 10.3
ios_saf 9.3
ios_saf 7.0-7.1
kaios 3.0-3.1
kaios 2.5
op_mini all
op_mob 73
opera 101
opera 100
opera 99
opera 98
opera 97
opera 96
opera 95
opera 46
opera 11
safari 16.6
safari 16.5
safari 16.4
safari 16.3
safari 16.2
safari 16.1
safari 16.0
safari 15.6
safari 15.5
safari 15.4
safari 15.2-15.3
safari 15.1
safari 15
safari 14.1
safari 14
safari 13.1
safari 13
safari 12.1
safari 9.1
samsung 21
samsung 20
samsung 19.0
samsung 18.0
samsung 17.0
samsung 16.0
samsung 15.0
samsung 14.0
samsung 13.0
samsung 11.1-11.2
samsung 7.2-7.4
samsung 4
```
### rem 自动转化
将 px 转为 rem
```
npm i amfe-flexible --save
npm install postcss-pxtorem --save-dev

```


### 请求
```
./utils/axios.js
./utils/http.js
```

## 支持自动上传到oss功能
```
# 设置环境变量(可以设置成全局变量,理论上oss桶的配置是不会变的)
NODE_YYAO_CLI_ACCESSKEY_ID=xxx
NODE_YYAO_CLI_ACCESS_KEY_SECRET=xxxx
NODE_YYAO_CLI_BUCKET=xxxx
NODE_YYAO_CLI_REGION=oss-cn-chengdu
# 执行命令,上传到oss
yarn upload
```