## Panel Template

This template is based on the Ray framework and is provided to business developers who need to develop panels in apps related to Graffiti Intelligence or Smart Living. The code offers basic usage of developing with the Ray framework, including routing, page navigation, device operations, multilingual support, and integrates a 3D visualization framework. It provides essential capabilities to set up and implement 3D scenes, allowing you to quickly incorporate 3D model visualization into your application. Additionally, it enables real-time interactive displays between models and devices. Developers can refer to the use cases and adjust the code according to their business needs.

## Instructions for Use

Before using this template, it is recommended to have a basic understanding of the Ray framework. Please refer to the [Ray Developer Documentation](https://developer.tuya.com/cn/ray) for more details.

## Directory Structure

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
│  ├─ app.tsx
│  ├─ components
│  │  ├─ connect.tsx
│  │  └─ index.tsx
│  ├─ composeLayout.tsx
│  ├─ config
│  │  ├─ dpCodes.ts
│  │  ├─ index.ts
│  │  └─ theme.ts
│  ├─ constant
│  │  └─ index.ts
│  ├─ global.config.ts
│  ├─ i18n
│  │  ├─ index.ts
│  │  └─ strings.ts
│  ├─ kits.deps.json
│  ├─ pages
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
│  ├─ redux
│  │  ├─ actions
│  │  │  ├─ common.ts
│  │  │  └─ theme.ts
│  │  ├─ index.ts
│  │  ├─ reducers
│  │  │  ├─ common.ts
│  │  │  └─ theme.ts
│  │  └─ store.ts
│  ├─ res
│  │  ├─ arrow.png
│  │  ├─ close.png
│  │  ├─ delete.png
│  │  ├─ index.ts
│  │  ├─ mode.png
│  │  ├─ notify.png
│  │  ├─ read.ts
│  │  └─ rect.png
│  ├─ routes.config.ts
│  ├─ utils
│  │  └─ index.ts
│  └─ variables.less
├─ tsconfig.json
└─ typings
   └─ index.d.ts

```

## Component Usage

When developing with the Ray framework to ensure cross-platform compatibility, you should make use of the components provided by Ray. For more details, refer to the [Ray Components Documentation](https://developer.tuya.com/cn/ray/components).

## Basic Operations and APIs

The Ray framework offers numerous APIs for direct use in business logic. These APIs have been made compatible across various platforms, eliminating the need for developers to differentiate platform-specific code at runtime. For specific details, please see the [API Documentation](https://developer.tuya.com/cn/ray/api/authorize).

## Device Operations

To meet panel development requirements, the Ray framework also provides APIs for device operations. Developers can utilize the framework's device operation capabilities directly when interacting with devices. For more information, refer to the [Device Operation Capabilities](https://developer.tuya.com/cn/ray/api/device-kit/add-timer).

## Component Extension

If the components provided by the Ray framework do not meet business requirements adequately, developers can develop extension components while adhering to the [Cross-Platform Adaptation](https://developer.tuya.com/cn/ray/guide/tutorial/env) rules. The styles within the components need to follow the [Style Rules](https://developer.tuya.com/cn/ray/guide/tutorial/stylesheet).

## Panel SDK

For certain methods required in panel development, they have been encapsulated and can be directly used to provide specific capabilities. Refer to the [Panel SDK](https://developer.tuya.com/cn/ray/panel) for more details.

## Multilingual Support

The template utilizes a library for multilingual support, covering both product and UI languages, which can be directly used in business logic. Check [Multilingual Support](https://developer.tuya.com/cn/ray/panel/i18n/i18n) for more details. If this library does not meet business needs, developers can extend the multilingual solution based on the [getLangKey](https://developer.tuya.com/cn/ray/api/get-lang-key) and [getLangContent](https://developer.tuya.com/cn/ray/api/get-lang-content) methods provided by the Ray API.

## State Management

The template uses Redux for data management, with the middleware defaulting to Redux Thunk. Developers can switch middleware as per their needs.

## Capability Sub-package

Various capabilities in the Ray framework require support from capability packages, such as device control, basic mini-program abilities, and unique Tuya capabilities. The template by default includes BaseKit, TYKit, MiniKit, and DeviceKit. Developers can manage these packages based on their requirements. Refer to the [API Capability Integration Guide](https://developer.tuya.com/cn/miniapp/api) for further adjustments.
