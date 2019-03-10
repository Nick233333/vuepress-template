---
home: true
heroImage: /images/favicon.png
heroText: VuePress
tagline: Vue 驱动的静态网站生成器
actionText: 进入文档 →
actionLink: /css/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2019 Nick
---

### 像数 1, 2, 3 一样容易

```js
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

> 注意
>
> 请确保你的 Node.js 版本 >= 8。

