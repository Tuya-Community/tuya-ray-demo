[English](./README.md) | 简体中文

# 项目结构
```bash
├── main-project      Ray项目（作为主包）
|    ├── ray.config.ts
|    └── src
|        └── pages
|            ├── home
|            └── index
|
├── miniapp           原生项目（Ray构建出的产物——源码目录`main-project`）
|
└── ray-project       Ray项目（作为子包）
    ├── ray.config.ts
    └── src
        └── pages
            ├── home
            └── index
```
> 注意📢
> 主包项目（main-project） 与 子包项目（ray-project）`ray start` 或 `ray build` 最好不要同时运行。否则会出现不可预期的问题

Project Structure