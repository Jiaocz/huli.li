<h1 align="center">🦊 狐狸狸 - huli.li</h1>
<p align="center">
  <a href="https://github.com/Jiaocz/huli.li/security/code-scanning"><img src="https://github.com/Jiaocz/huli.li/actions/workflows/codeql-analysis.yml/badge.svg" /></a>&nbsp;
  <a href="https://github.com/Jiaocz/huli.li/actions/workflows/main.yml"><img src="https://github.com/Jiaocz/huli.li/actions/workflows/main.yml/badge.svg" /></a>&nbsp;
  <a href="https://github.com/Jiaocz/huli.li/releases/latest"><img src="https://img.shields.io/github/v/release/jiaocz/huli.li.svg" /></a>&nbsp;
  <a href="https://github.com/Jiaocz/huli.li/pulse"><img src="https://visitor-badge.glitch.me/badge?page_id=Jiaocz.huli.li" /></a>&nbsp;
  <a href="https://github.com/Jiaocz/huli.li/stargazers"><img src="https://img.shields.io/github/stars/jiaocz/huli.li?style=social" /></a>
</p>

## 介绍
这个域名一直没有建站，某天心血来潮想放一个内容，于是开始动手。但是因为天气接口的返回值太奇怪了，因此又想用typescript，周转半天，用Vite创建了一个Vue-ts的项目，并尝试使用Vue3的setup标签进行开发，用了两个小时完成。

使用[Vite.js](https://vitejs.dev)建立项目，请求使用的是jQuery（因为axios会出现跨域），天气接口使用的和风天气，位置接口使用腾讯地图。

![ScreenShot](https://github.com/Jiaocz/huli.li/blob/master/cover.png)

## 如何使用

### 更改API Key
更改`src/data/common/keys.ts`中的API_KEY，具体申请请进入文件查看申请链接
### 安装依赖
```shell
pnpm install
pnpm install jquery
pnpm i qweather-icons
```
> 如果你没有`pnpm`也可以仅用`npm`

### 修改&预览
```shell
npm run dev
```

### 构建
```shell
npm run build
```
