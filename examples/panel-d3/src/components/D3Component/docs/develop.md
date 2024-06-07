# 家电3D模型模板使用文档

## OpenApi 使用

工程项目配置 project.tuya.json

```json
{
  "projectname": "@ray/kt-view-template",
  "i18n": false,
  "description": "@ray/kt-view-template",
  "baseversion": "2.15.6",
  "miniprogramRoot": "./example/dist/tuya",
  "dependencies": {
    "BaseKit": "3.0.1",
    "BizKit": "3.0.7",
    "DeviceKit": "3.0.2",
    "MiniKit": "3.0.2"
  },
  // 主要配置如下数据
  "publicRoot": "./assets",
}

```