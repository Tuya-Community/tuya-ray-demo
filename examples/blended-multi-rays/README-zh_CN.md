[English](./README.md) | 简体中文

# 项目结构
```bash
├── main-project      Ray项目（作为主包）
|    ├── ray.config.ts
|    └── src
|        └── pages
|            └── home
|
├── miniapp           原生项目（Ray构建出的产物——源码目录`main-project`）
|
├── one-project       Ray项目（作为子包）
|    ├── ray.config.ts
|    └── src
|        └── pages
|            ├── home
|            └── index
|
├── one-project       Ray项目（作为子包）
|    ├── ray.config.ts
|    └── src
|        └── pages
|            ├── home
|            └── index
|
└── ...
```

> 注意📢
> 主包项目（main-project） 与 子包项目（one-project | two-project）`ray start` 最好不要同时运行。否则会出现不可预期的问题