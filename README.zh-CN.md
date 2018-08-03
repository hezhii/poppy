# Poppy

[English](./README.md) | 简体中文

一个好看而又迷人的 Ghost 博客主题，对中文支持更好。博客的 UI 设计参考了 默认的 [Casper](https://github.com/TryGhost/Casper) 主题和 [dribbble](https://dribbble.com/) 上的一些设计图。

&nbsp;

![](.github/screenshot.jpg)

## 特点

- [x] 响应式布局
- [x] 导航栏
- [x] 代码高亮
- [x] Disqus 评论
- [x] 邮箱订阅
- [x] 打赏
- [ ] 分享
- [ ] 时间轴
- [ ] 搜索
- [ ] 可配置

## 快速开始

克隆仓库并安装依赖

```bash
$ git clone https://github.com/hezhii/poppy.git
$ cd poppy
$ yarn install
```

### 本地开发

首先需要安装[本地版 Ghost](https://docs.ghost.org/v1.0.0/docs/install-local)，然后创建一个软链接把 poppy 链接到 `ghost/content/themes`。

然后启动 Ghost：

```bash
$ cd <ghost>
$ ghost start
```

Ghost 启动完成后，可以通过 `http://localhost:2368` 访问。我们需要在 [Ghost 的管理页面](http://localhost:2368/ghost/#/settings/design)启用 poppy 主题。

启动 Poppy 后，进入到 poppy 目录下：

```
$ yan dev
```

现在，你可以编辑 `/src` 目录下的文件修改主题，它们会自动打包到 `/assets` 目录下。

### 安装主题

```bash
$ cd poppy
$ yarn zip
```

这个命令会把主题打包到 `dist/poppy.zip` 中，然后我们可以在 Ghost 后台直接上传压缩包以安装主题。

你也可以在 Github 上直接[下载压缩包](https://github.com/hezhii/poppy/releases)。