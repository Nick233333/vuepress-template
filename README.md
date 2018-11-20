
```
# 全局安装 vuepress
npm install -g vuepress

# 创建项目目录
mkdir project

# 进入项目
cd project

# npm 初始化, 按照提示回车
npm init

# 创建一个 docs 目录
mkdir docs

# 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md
```

然后，给 package.json 添加一些 scripts 脚本：

```
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

本地开发

```
npm run dev
```

生成静态资源

```
npm run build
```