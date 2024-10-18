---
title: "Ethan Dong: welcome to my site"
summary: "welcome to my site"
date: "OCT 18 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---

# 🚀 Astro+GitHub+CloudFire博客建站教程

## 📚 前言
在这个教程中，我们将使用 **Astro Sphere** 开源项目，轻松搭建一个个人博客网站。通过 GitHub 的 Codespaces 实现实时开发预览，并使用 Cloudflare Pages 进行一键部署。无论你是新手还是有经验的开发者，都能轻松跟随本教程完成搭建。

### 🛠️ 步骤一：Fork 项目
首先，你需要将 **Astro Sphere** 项目 fork 到你自己的 GitHub 仓库：

1. 打开 [Astro Sphere 仓库](https://github.com/lancerossdev/astro-sphere)。
2. 点击页面右上角的 `Fork` 按钮，将项目复制到你的账户中。

### 🧑‍💻 步骤二：使用 GitHub Codespace
接下来，我们将在 GitHub Codespaces 中进行开发，这样你无需在本地安装任何依赖，所有工作都在云端进行：

1. 在你 fork 后的项目仓库页面，点击 `Code` 按钮旁边的下拉箭头，然后选择 `Codespaces`。
2. 点击 `Create codespace on main`，GitHub 将会自动为你创建一个开发环境并安装依赖。

Codespaces 自动安装依赖后，你就可以开始开发了！输入以下命令启动项目并实时预览你的修改：

```bash
npm run dev
```
修改完之后记得commit提交到仓库！

### 🚀 步骤三：部署到 Cloudflare Pages
完成开发后，我们可以使用 Cloudflare Pages 进行一键部署：

1. 打开 [Cloudflare Pages](https://pages.cloudflare.com/) 并登录。
2. 点击 `Create a project`，连接你刚刚 fork 的 GitHub 仓库。
3. 在设置中，确保选择 `npm run build` 作为构建命令，并选择 `dist/` 作为输出目录。
4. 点击 `Save and Deploy`，Cloudflare Pages 将会自动构建并部署你的网站。

几分钟后，你的个人博客网站将被成功部署！你可以通过 Cloudflare 提供的域名进行访问。

## 🎉 总结
通过使用 **Astro Sphere** 开源项目、GitHub Codespaces 和 Cloudflare Pages，我们能够轻松、高效地完成个人博客的搭建和部署。现在你拥有了一个专属的博客，赶紧开始发布你的文章吧！🚀
