
# 工程化

使用 pnpm 管理依赖，node > 22

ts类型，不允许ts js混用

ui通用配置 `app.config.ts`

命名规范：文件命名短横线 代码内组件大驼峰

组件：合理区分页面组件 通用组件

# 代码

先找nuxt ui 或 vueuse，没有再想办法实现或是添加库
 
icon 通过组件加载本地svg 或者 https://icon-sets.iconify.design/

表单验证工具使用 zod

ssr 需要在顶层的 setup 去 await，使用 useApiFetch 

接口相关的类型定义在 types/api 目录下，使用 namespace

不允许忽略任意控制台报错

# 提交代码

仅允许四条分支 develop test staging main，以 develop 为基础分支，发布在 main 上标记 tag

提交代码最好不要出现 console.log 等调试代码，提交时删掉

合理注释，代码里面不要有多余注释的代码（可以通过git记录找回），仅保留必要注释

提交代码 
    - 提交消息需要遵循 Angular 提交规范
    - 提交代码时会运行 eslint 和 ts 检查，检查失败===提交不了代码
    - 建议使用 pnpm commit 命令提交代码
    - 如果需要临时关闭检查，使用 git commit -m "commit message" --no-verify

