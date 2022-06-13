# 涂鸦面板模板 - jotai

该模板基于 Ray 框架开发，提供给需要在涂鸦智能、智能生活等 App 中开发面板的业务开发人员，代码提供了 Ray 开发的基本使用方法，包含路由使用、页面跳转、设备操作、多语言等内容的使用，开发人员可参照用例并根据业务需求自行调整代码。

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
├── README.md
├── commitlint.config.js
├── package.json
├── project.tuya.json                // IDE 项目配置, 参照 https://developer.tuya.com/cn/ray/guide/tutorial/directory
├── ray.config.ts                    // Ray 工程配置文件, 参照 https://developer.tuya.com/cn/ray/guide/tutorial/directory
├── src
│   ├── api                          // 接口目录
│   ├── app.config.ts                // 运行项目时默认生成的文件，该文件不需要进行 git 提交。
│   ├── app.tsx                      // 项目入口文件
│   ├── atoms                        // jotai 状态管理目录
│   ├── components                   // 组件目录
│   ├── global.config.ts             // 项目全局配置项，参照 https://developer.tuya.com/cn/ray/guide/tutorial/global-config
│   ├── i18n                         // 多语言本地配置
│   ├── pages                        // 页面目录，存放所有页面组件源码，至少存在 index.tsx 文件。
│   ├── res                          // 静态资源目录
│   ├── routes.config.ts             // 路由配置 参照 https://developer.tuya.com/cn/ray/guide/tutorial/routes
│   ├── utils                        // 工具方法目录
│   ├── variables.less               // 全局 less 变量
│   └── withDevicePanel.tsx          // 入口高阶，处理设备相关逻辑
├── tsconfig.json                    // TS 配置文件
├── typings                          // 全局项目 TS Typing 定义目录
│   └── index.d.ts
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

## 状态管理

模板中使用了 jotai 进行数据管理，下方简单介绍下基础用法，具体可参照 [Jotai 官方文档](https://jotai.org/docs/introduction)。

### 定义 atom

```typescript
import { atom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import deepEqual from 'fast-deep-equal';

/**
 * 在此处定义你当前产品的 DP 类型
 */
export interface DpState {
  switch: boolean;
}

/**
 * 定义一个 dpStateAtom
 *
 * 第一个参数传入默认值
 * 第二个参数传入接受到 payload 时如何更新数据源
 *
 * @docs 详见 https://jotai.org/docs/basics/primitives
 */
export const dpStateAtom = atom(null as DpState, (get, set, payload: DpState) => {
  set(dpStateAtom, { ...(get(dpStateAtom) || {}), ...payload });
});

/**
 * 定义一个基于 dpStateAtom 的选择器
 *
 * 第一个参数传入源 atom 数据
 * 第二个参数传入 selector 选择器匹配需要返回的数据
 * 第三个参数传入 equalityFn 判断是否一致，有助于避免无效的渲染，提高性能，
 *
 * @docs 详见 https://jotai.org/docs/utils/select-atom
 */
export const selectDpStateAtom = selectAtom<DpState, DpState>(dpStateAtom, data => data, deepEqual);
```

### 获取 atom 数据

```typescript
import { useAtomValue } from 'jotai';
import { dpStateAtom, selectDpStateAtom } from '@/atoms';

const Home = () => {
   const dpState = useAtomValue(selectDpStateAtom);
   ...
}
```

### 修改 atom 数据

```typescript
import { useSetAtom } from 'jotai';

const Home = () => {
   const setDpState = useSetAtom(dpStateAtom);
   ...
   setDpState({ switch: true })
}
```

## 能力分包

Ray 框架中设备控制、 小程序基本能力、 涂鸦特有能力等都需要 [能力包](https://developer.tuya.com/cn/miniapp/api#%E8%83%BD%E5%8A%9B%E5%88%86%E5%8C%85) 的支持， 模板默认添加了 BaseKit、 TYKit、MiniKit、DeviceKit 四大能力集， 开发者可根据需求进行管理。也可参照 [API 能力集成指南](https://developer.tuya.com/cn/miniapp/api) 自行调整。

## 依赖说明

- @ray-js/components: Ray 跨端基础组件库
- @ray-js/framework: Ray 跨端框架主包
- @ray-js/panel-service: 一系列可能在你开发控制设备面板业务的时候需要用到的云端服务。
- @ray-js/ray-panel-wrapper: Ray 跨端面板的业务增强包裹组件，内置了一些设备面板通用的功能，如设备离线后自动展示离线弹窗。
- fast-deep-equal: 对象深比较库，用于 jotai 的 selectAtom，提高渲染性能
- jotai: 原子化的 React 状态管理库
