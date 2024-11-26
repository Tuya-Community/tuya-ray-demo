English[](README.md) | [简体中文](README_zh.md)

## Product name: curtain controller template

## 1、Instructions

Before using this template, you need to have a basic understanding of the Ray framework. It is recommended to refer to the [Ray development documentation](https://developer.tuya.com/cn/miniapp/develop/ray/guide/overview)

## 2、Quick start:

- [Create a product](https://developer.tuya.com/cn/miniapp/develop/miniapp/guide/start/quick-start#%E4%BA%8C%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81)
- [Create miniapp](https://developer.tuya.com/cn/miniapp/common/desc/platform)

## 3、Capability dependency

- App version
  - Tuya Smart 5.1.0 and above
- TTT dependency
  - BaseKit: 3.11.13
  - MiniKit: 3.9.8
  - DeviceKit: 3.4.0
  - BizKit: 4.5.1
  - baseversion: 4.5.1
- Component dependency
  - None
- Function page dependency
  - None

## 4、Panel function

- Curtain Controll（open，close，fully_open，fully_close）

## 5、Specific function implementation

### 5.1、DP

| DP ID |     DP NAME     |     DP Code     | DP Mode | DP Type |               DP Property                |
| :---: | :-------------: | :-------------: | :-----: | :-----: | :--------------------------------------: |
|   1   | curtain control |     control     |   rw    |  enum   |    enum: open, stop, close, continue     |
|   2   | percent control | percent_control |   rw    |  value  | "range: 0-100,step: 1, scale: 0,unit: %" |
|  101  |  situation set  |  situation_set  |   ro    |  enum   |      enum: fully_open, fully_close       |
|  102  |   work state    |   work_state    |   ro    |  enum   |          enum: opening, closing          |
|  103  |  percent state  |  percent_state  |   ro    |  value  | "range: 0-100,step: 1, scale: 0,unit: %" |

### 5.2、Core Component Curtain (src/components/curtain)

- Core module，`animation.sjs`
- [what's sjs](https://developer.tuya.com/en/miniapp/develop/miniapp/framework/sjs)

```js
class AnimationTask {
  onUpdate = null; // animation callback

  /**
   * value: initial value
   * maxDuration: 0 to max changed duration
   * maxChangedValue: max changed vaule
   */
  constructor(value = 0, maxDuration = 0, maxChangedValue = 1) {}

  // do animation to value
  startAnimation(value) {}

  // immediate set value
  setImmediate(value) {}

  // stop animation
  stopAnimation() {}
}
```

## 6. Problem feedback

If you have any questions, please visit the link and submit post feedback: https://tuyaos.com/viewforum.php?f=10

## 7. License

[License details](LICENSE)
