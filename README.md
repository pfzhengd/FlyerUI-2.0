## Flyer-UI@2.0

### 前言
前版本：[Flyer-UI@1.x](https://github.com/flyer-ui/flyer-ui)

### 文档
[https://flyer-ui.github.io/document/#/](https://flyer-ui.github.io/document/#/)

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用

```JS
npm i @flyer-ui/next
npm install @flyer-ui/next
```
### CDN 引用方式

目前可以通过 unpkg.com/flyer-ui
 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。


```HTML
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/browse/@flyer-ui/next/lib/index.css"> 
<!-- 引入组件库 --> 
<script src="https://unpkg.com/browse/@flyer-ui/next@0.0.3/lib/index.js"></script>
```
建议使用 CDN 引入 Flyer-UI 的用户在链接地址上锁定版本，以免将来 Flyer-UI 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。

### 引入Flyer-UI

在main.js中写入以下内容

```JS
import {createApp} from 'vue'
import App from './App'
import FlyerUI from '@flyer-ui/next'
import 'flyer-ui/lib/themes/index.css'


const app = createApp(App)
app.use(FlyerUI)
app.mount('#app')

```
以上代码便完成了Flyer-UI的引入。需要注意的是，样式文件需要单独引入。

### LICENSE
MIT
Copyright (c) 2017-present, Zheng peng fei