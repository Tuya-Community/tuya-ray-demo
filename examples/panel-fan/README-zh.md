# 涂鸦面板模板

该模板基于 Ray 框架开发，提供给需要在涂鸦智能、智能生活等 App 中开发面板的业务开发人员，代码提供了 Ray 开发的基本使用方法，包含路由使用、页面跳转、设备操作、多语言等内容的使用, 并实现模型与设备实时动态的交互展示, 开发人员可参照用例并根据业务需求自行调整代码。

## 使用须知

使用该模板开发前， 需要对 Ray 框架有基本的了解，建议先查阅[Ray 开发文档](https://developer.tuya.com/cn/ray)

## 目录结构

```
ray-panel
├─ README.md
├─ .editorconfig
├─ .eslintrc.js
├─ .gitignore
├─ .npmrc
├─ .prettierrc.js
├─ commitlint.config.js
├─ package.json
├─ project.tuya.json
├─ ray.config.ts
├─ src
│  ├─ api
│  │  └─ index.ts
│  ├─ app.config.ts
│  ├─ app.tsx                       // 项目入口文件
│  ├─ components                    // 组件目录
│  │  ├─ connect.tsx
│  │  └─ index.tsx
│  ├─ composeLayout.tsx             // 入口高阶，处理设备相关逻辑
│  ├─ config                        // 配置文件，根据需求删除或保留
│  │  ├─ dpCodes.ts
│  │  ├─ index.ts
│  │  └─ theme.ts
│  ├─ constant                      // 常量定义
│  │  └─ index.ts
│  ├─ global.config.ts              // 项目全局配置项，参照 https://developer.tuya.com/cn/ray/guide/tutorial/global-config
│  ├─ i18n                          // 多语言本地配置
│  │  ├─ index.ts
│  │  └─ strings.ts
│  ├─ kits.deps.json                // 由 IDE 生成，配置 TTT 能力依赖
│  ├─ pages                         // 页面目录，根据情况添加或删除
│  │  ├─ common
│  │  │  ├─ page4
│  │  │  │  ├─ index.config.ts
│  │  │  │  └─ index.tsx
│  │  │  └─ page6
│  │  │     ├─ index.config.ts
│  │  │     └─ index.tsx
│  │  └─ home
│  │     ├─ index.config.ts
│  │     ├─ index.module.less
│  │     └─ index.tsx
│  ├─ redux                         // redux 逻辑， 根据情况添加或删除
│  │  ├─ actions
│  │  │  ├─ common.ts
│  │  │  └─ theme.ts
│  │  ├─ index.ts
│  │  ├─ reducers
│  │  │  ├─ common.ts
│  │  │  └─ theme.ts
│  │  └─ store.ts
│  ├─ res                           // 资源目录，根据需求添加或删除
│  │  ├─ arrow.png
│  │  ├─ close.png
│  │  ├─ delete.png
│  │  ├─ index.ts
│  │  ├─ mode.png
│  │  ├─ notify.png
│  │  ├─ read.ts
│  │  └─ rect.png
│  ├─ routes.config.ts              // 路由配置 参照https://developer.tuya.com/cn/ray/guide/tutorial/routes
│  ├─ utils                         // 工具方法存放目录
│  │  └─ index.ts
│  └─ variables.less
├─ tsconfig.json
└─ typings
   └─ index.d.ts

```

## 组件的使用

使用 Ray 框架开发，若要兼容多端方案，则需要使用 Ray 框架所提供的组件，具体可参照[Ray 组件文档](https://developer.tuya.com/cn/ray/components)

## 基本操作及 Api

Ray 框架提供了大量的 Api 可供业务直接调用， 该 Api 已对各平台做了兼容处理，开发者不再需要运行时区分平台编写代码。 具体可参照 [API 文档](https://developer.tuya.com/cn/ray/api/authorize)

## 设备操作

为满足面板开发需求，Ray 框架还提供了设备操作相关的 Api ，开发者对设备进行操作时，可直接使用框架提供的设备操作能力，具体可参照 [设备想着能力](https://developer.tuya.com/cn/ray/api/device-kit/add-timer)

## 组件扩展

若 Ray 框架所提供的组件不能很好地满足业务需求，也可以在遵循[跨端适配](https://developer.tuya.com/cn/ray/guide/tutorial/env)规则的前提下，自行开发扩展组件，组件中的样式需要遵循[样式规则](https://developer.tuya.com/cn/ray/guide/tutorial/stylesheet)。

## 面板 SDK

面板开发需要的一些方法， 我们将其做了封装，可能直接使用方法所提供的能力， 具体可参照 [面板 SDK](https://developer.tuya.com/cn/ray/panel)

## 多语言

面板模板中使用的多语言，封装了产品多语言和 UI 多语言， 可在业务中直接使用，具体可参照 [多语言](https://developer.tuya.com/cn/ray/panel/i18n/i18n)。 若该库无法满足业务需求，开发人员可基于 Ray API 提供的 [getLangKey](https://developer.tuya.com/cn/ray/api/get-lang-key) 及 [getLangContent](https://developer.tuya.com/cn/ray/api/get-lang-content) 自行扩展多语言方案。

## 状态管理

面板中使用了 redux 进行数据管理， 中间件默认采用了 redux-thunk， 开发人员可根据自身情况自行切换。

## 能力分包

Ray 框架中设备控制、 小程序基本能力、 涂鸦特有能力等都需要[能力包](https://developer.tuya.com/cn/miniapp/api#%E8%83%BD%E5%8A%9B%E5%88%86%E5%8C%85)的支持， 模板默认添加了 BaseKit、 TYKit、MiniKit、DeviceKit 四大能力集， 开发者可根据需求进行管理。也可参照 [API 能力集成指南](https://developer.tuya.com/cn/miniapp/api)自行调整。
