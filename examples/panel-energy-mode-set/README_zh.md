[English](README.md) | 简体中文[](README_zh.md)

# 涂鸦面板模板 - 新能源节能模式+峰谷电设置模板

该模板基于 Ray 框架开发，提供给需要在涂鸦智能、智能生活等 App 中开发面板的业务开发人员，代码提供了 Ray 开发的基本使用方法，包含路由使用、页面跳转、设备操作、多语言等内容的使用，开发人员可参照用例并根据业务需求自行调整代码。

### 快速开始：

1. 前往[IoT 平台](https://iot.tuya.com/)创建产品

2. 选择品类 `节能能源`

3. 功能选择

   用到的功能点（自定义）

   ```
   work_mode —— 字符型
   charger_switch —— 布尔型
   discharge_switch —— 布尔型
   time_schedule —— 透传型
   ```

4. 安装项目并启动项目

   ```
   yarn && yarn start
   ```

## :rocket: 若有疑问，请访问以下链接查看详细教程

- [新能源节能模式+峰谷电设置模板](https://developer.tuya.com/cn/miniapp-codelabs/codelabs/panel-energy-mode-set/index.html#0)
- [使用 `Ray` 开发万能面板](https://developer.tuya.com/cn/miniapp-codelabs/codelabs/panelmore-guide/index.html#0)

## 使用须知

使用该模板开发前， 需要对 Ray 框架有基本的了解，建议先查阅 [Ray 开发文档](https://developer.tuya.com/cn/ray)

## 目录结构

```
.
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── .prettierrc.js
├── commitlint.config.js
├── README_zh.md
├── README.md
├── package.json
├── tsconfig.json                    // TS 配置文件
├── project.tuya.json                // IDE 项目配置，参照 https://developer.tuya.com/cn/ray/guide/tutorial/directory
├── ray.config.ts                    // Ray 工程配置文件，参照 https://developer.tuya.com/cn/ray/guide/tutorial/directory
├── public                           // 静态资源目录
├── src
│   ├── api                          // 接口目录
│   ├── components                   // 组件目录
│   ├── constant                     // 常数
│   ├── devices                      // 智能设备模型，参照 https://developer.tuya.com/cn/miniapp/develop/ray/extended/sdm/usage
│   ├── hooks                        // react hooks
│   ├── i18n                         // 多语言本地配置
│   ├── pages                        // 页面目录，存放所有页面组件源码，至少存在 index.tsx 文件。
│   ├── redux                        // 状态管理目录
│   ├── utils                        // 工具方法目录
│   ├── app.config.ts                // 运行项目时默认生成的文件，该文件不需要进行 git 提交。
│   ├── app.less                     // 全局样式
│   ├── app.tsx                      // 项目入口文件
│   ├── composeLayout.tsx            // 容器封装
│   ├── global.config.ts             // 项目全局配置项，参照 https://developer.tuya.com/cn/ray/guide/tutorial/global-config
│   ├── routes.config.ts             // 路由配置，参照 https://developer.tuya.com/cn/ray/guide/tutorial/routes
│   ├── theme.json                   // 主题配置，参照 https://developer.tuya.com/cn/miniapp/develop/miniapp/framework/app/theme
│   └── variables.less               // 全局 less 变量
└── typings                          // 全局项目 TS Typing 定义目录
    └── index.d.ts
```

## 组件的使用

使用 Ray 框架开发，若要兼容多端方案，则需要使用 Ray 框架所提供的组件，具体可参照 [Ray 组件文档](https://developer.tuya.com/cn/ray/components)

## 基本操作及 API

Ray 框架提供了大量的 API 可供业务直接调用， 该 API 已对各平台做了兼容处理，开发者不再需要运行时区分平台编写代码。 具体可参照 [API 文档](https://developer.tuya.com/cn/ray/api/authorize)

## 设备操作

为满足面板开发需求，Ray 框架还提供了设备操作相关的 Api ，开发者对设备进行操作时，可直接使用框架提供的设备操作能力，具体可参照 [API 文档 - 设备相关能力](https://developer.tuya.com/cn/ray/api/device-kit/add-timer)

## 组件扩展

若 Ray 框架所提供的组件不能很好地满足业务需求，也可以在遵循 [跨端适配](https://developer.tuya.com/cn/ray/guide/tutorial/env) 规则的前提下，自行开发扩展组件，组件中的样式需要遵循 [样式规则](https://developer.tuya.com/cn/ray/guide/tutorial/stylesheet)。

## 面板 SDK

面板开发需要的一些方法， 我们将其做了封装，可能直接使用方法所提供的能力， 具体可参照 [面板 SDK](https://developer.tuya.com/cn/ray/panel)

## 多语言

面板模板中使用的多语言，封装了产品多语言和 UI 多语言， 可在业务中直接使用，具体可参照 [多语言](https://developer.tuya.com/cn/ray/panel/i18n/i18n)。 若该库无法满足业务需求，开发人员可基于 Ray API 提供的 [getLangKey](https://developer.tuya.com/cn/ray/api/get-lang-key) 及 [getLangContent](https://developer.tuya.com/cn/ray/api/get-lang-content) 自行扩展多语言方案。

## 能力分包

Ray 框架中设备控制、 小程序基本能力、 涂鸦特有能力等都需要 [能力包](https://developer.tuya.com/cn/miniapp/common/desc/api#kit-%E8%83%BD%E5%8A%9B) 的支持， 模板默认添加了 BaseKit、BizKit、MiniKit、DeviceKit 四大能力集， 开发者可根据需求进行管理。也可参照 [API 能力集成指南](https://developer.tuya.com/cn/miniapp/api) 自行调整。

## 依赖说明

- @ray-js/panel-sdk: 一系列可能在你开发控制设备面板业务的时候需要用到的工具库。
- @ray-js/ray: Ray 跨端框架主包
- @ray-js/ray-error-catch: 异常兜底组件
- @ray-js/svg: SVG
- @reduxjs/toolkit: 状态管理工具
- clsx: classname 工具
- react-redux: 状态管理库
- redux-logger: 状态日志工具

## 如何获得技术支持

欢迎通过 [GitHub Issue](https://github.com/Tuya-Community/tuya-ray-demo/issues) 向我们反馈使用的问题和获得帮助

## 许可

[许可详情](LICENSE)
