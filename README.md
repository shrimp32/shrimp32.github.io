# 个人博客
## 基于editormd
比较简单，直接将md的内容转为html展示。

## 基于vitepress
```shell
# 创建
yarn init
yarn add --dev vitepress
mkdir docs && echo '# Hello VitePress' > docs/index.md
# 运行
yarn docs:dev
# 或者
npx vitepress dev docs --port=4000
# 部署，默认输出路径.vitepress/dist
yarn docs:build
```