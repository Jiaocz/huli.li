# [huli.li](https://huli.li/) 狐狸狸
域名一直没有建站，想尝试使用Vue-ts进行一次试手

使用[Vite.js](https://vitejs.dev)建立项目，请求使用的是jQuery，天气接口使用的和风天气，位置接口使用腾讯地图。

## 如何使用

### 更改API Key
更改`src/data/common/keys.ts`中的API_KEY，具体申请请进入文件查看申请链接
### 安装依赖
```shell
cnpm install
cnpm install jquery
cnpm i qweather-icons
```

### 修改&预览
```shell
npm run dev
```

### 构建
```shell
npm run build
```