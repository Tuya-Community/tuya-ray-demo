English | [简体中文](./README-zh_CN.md)

# Project Structure
```bash
├── main-project      Ray Project (as main package)
|    ├── ray.config.ts
|    └── src
|        └── pages
|            └── home
|
├── miniapp           Native Project (built by ray -- source code dir `main-project`)
|
├── one-project       Ray Project (as sub package)
|    ├── ray.config.ts
|    └── src
|        └── pages
|            ├── home
|            └── index
|
├── one-project       Ray Project (as sub package)
|    ├── ray.config.ts
|    └── src
|        └── pages
|            ├── home
|            └── index
|
└── ...more
```

> Attention
> It's best not to exec the command `ray start` or `ray build` at the same time in . Otherwise, unexpected problems may occur