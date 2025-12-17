
# Nuxt Starter (nuxt-starter)

这是一个功能丰富、配置完善的 Nuxt 3 启动模板，旨在帮助你快速启动一个新项目。它集成了现代前端开发所需的各种工具和最佳实践，包括 UI 库、状态管理、代码规范、Docker 部署等。


<p align="center"> <a href="https://trgudev.github.io/nuxt-starter/" target="_blank"> <img src="https://img.shields.io/badge/-%E5%9C%A8%E7%BA%BF%E9%A2%84%E8%A7%88-brightgreen?style=for-the-badge&logo=githubpages" alt="Live Demo"> </a> </p>

<p align="center"> 
  <!-- <a href="https://github.com/trgudev/nuxt-starter/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/trgudev/nuxt-starter?style=flat-square" alt="GitHub License"> 
  </a>  -->
  <a href="https://github.com/trgudev/nuxt-starter/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/trgudev/nuxt-starter?style=flat-square" alt="GitHub stars"> 
  </a> 
  <a href="https://github.com/trgudev/nuxt-starter/network" target="_blank"> 
    <img src="https://img.shields.io/github/forks/trgudev/nuxt-starter?style=flat-square" alt="GitHub forks"> 
  </a> 
</p>

## ✨ 功能特性

本模板集成了以下功能，开箱即用：

  - **框架**: [Nuxt 3](https://nuxt.com/) - 现代化的 Vue 框架。
  - **UI 框架**: [Nuxt UI](https://ui.nuxt.com/) - 基于 Tailwind CSS 的精美 UI 组件库。
  - **图标**: [Iconify](https://iconify.design/) - 按需使用的海量图标集。
  - **状态管理**: [Pinia](https://pinia.vuejs.org/) - 官方推荐的 Vue 状态管理库。
  - **图像优化**: [Nuxt Image](https://image.nuxt.com/) - 强大的图像优化模块。
  - **实用工具**:
      - [VueUse](https://vueuse.org/) - 丰富的组合式函数工具集。
      - [Day.js](https://day.js.org/) - 轻量级的日期时间处理库。
  - **数据请求**:
      - 封装了 Nuxt 3 的 `useFetch` 和 `$fetch`。
      - 提供了统一的请求示例和封装。
  - **代码规范**:
      - [ESLint](https://eslint.org/) - 用于代码质量检查。
  - **Git 工作流**:
      - [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) - 在 Git 提交前自动执行代码检查和格式化。
      - 包含 `cz-conventional-changelog` 提交规范示例。
  - **部署**:
      - [Dockerfile](https://www.docker.com/) - 支持 Docker 容器化部署。
      - [GitHub Actions](https://github.com/features/actions) - 预设的 CI/CD 工作流 (`deploy.yml` 自动部署到 GitHub Pages)。
  - **项目结构**:
      - [pnpm monorepo](https://pnpm.io/workspaces) - 使用 pnpm 工作区管理项目。
      - 环境变量区分 (`.env`, `.env.prod`, `.env.test`)。
  - **开发体验 (DX)**:
      - 预设的 `app` 目录结构，包含 `layouts`（默认布局）、`pages`（登录页面）。
      - 自定义 `loading` 加载指令。
      - TypeScript `namespace` 声明文件示例。

## 🚀 快速开始

### 1\. 克隆项目

```bash
# SSH
git clone git@github.com:trgudev/nuxt-starter.git

# HTTPS
git clone https://github.com/trgudev/nuxt-starter.git
```

### 2\. 进入目录

```bash
cd nuxt-starter
```

### 3\. 安装依赖

本项目使用 [pnpm](https://pnpm.io/) 作为包管理器。

```bash
pnpm install
```

### 4\. 运行开发服务器

启动开发服务器后，访问 `http://localhost:3000`。

```bash
pnpm dev
```

## 📦 项目命令

本项目在 `package.json` 中定义了以下常用脚本：

| 命令 | 描述 |
| :--- | :--- |
| `pnpm dev` | 启动开发环境服务器 |
| `pnpm build` | 为生产环境构建项目 |
| `pnpm preview` | 在本地预览生产环境构建后的项目 |
| `pnpm lint` | 运行 ESLint 检查代码规范 |
| `pnpm lint:fix` | 运行 ESLint 并自动修复问题 |
| `pnpm prepare` | 安装 Git 提交钩子 (Husky) |

## 📁 项目结构

本项目基于 Nuxt 3 的目录结构，并进行了一些约定：

```
.
├── .github/                # GitHub Actions 工作流
├── .vscode/                # VSCode 编辑器推荐设置
├── app/                    # Nuxt 3 App 目录 (取代 app.vue)
│   ├── assets/             # 静态资源 (CSS, 字体等)
│   ├── components/         # 全局 Vue 组件
│   ├── layouts/            # 布局 (如: default.vue)
│   ├── middleware/         # 路由中间件
│   ├── pages/              # 页面 (如: login.vue)
│   └── plugins/            # 插件 (如: dayjs)
├── public/                 # 公共静态资源 (如: favicon.ico)
├── server/                 # Nuxt 服务器端 API 和中间件
├── .dockerignore           # Docker 忽略文件
├── .editorconfig           # 编辑器通用配置
├── .env.example            # 环境变量示例
├── .gitignore              # Git 忽略文件
├── .npmrc                  # pnpm 配置文件
├── Dockerfile              # Docker 部署文件
├── eslint.config.mjs       # ESLint 配置文件
├── nuxt.config.ts          # Nuxt 核心配置文件
├── package.json            # 项目依赖和脚本
├── pnpm-lock.yaml          # pnpm 锁定文件
├── pnpm-workspace.yaml     # pnpm Monorepo 配置文件
└── tsconfig.json           # TypeScript 配置文件
```

## 🤝 贡献

欢迎通过提交 Issues 或 Pull Requests 来为这个项目做出贡献。

## TODO

- [ ] loading 指令示例
- [ ] nuxt img 示例
- [ ] vueuse 示例

- [x] docker 支持
- [x] 环境变量区分
- [x] pinia 支持
- [x] loading 指令
- [x] 请求示例
- [x] icon
- [x] git 提交示例
- [x] type namespace 声明文件编写
- [x] 请求封装 useFetch $fetch 
- [x] dayjs 支持 
- [x] 完善 default 布局
- [x] 登陆页面
- [x] 接入 Nuxt ui
- [x] 接入 Iconify
- [x] 增加 eslint 规范
- [x] 编写 git hook，添加前置提交检查
- [x] 添加 pnpm monorepo
- [x] 添加 @nuxt/image
- [x] 添加 @nuxt/ui 颜色配置

## 🤝 贡献

欢迎通过提交 Issues 或 Pull Requests 来为这个项目做出贡献。



