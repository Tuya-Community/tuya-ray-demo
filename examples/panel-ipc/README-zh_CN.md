[English](./README.md) | 简体中文

# Ipc 小程序模板

## 模板简介

可基于此模板快速搭建一个支持ipc基本功能的小程序

### App 版本支持

4.5.0及以上版本

### 依赖

- @ray-js/components-ty-ipc 播放器

### 小程序 Kit 依赖（以下依赖是 Kit 最低版本）

- BaseKit: 3.0.0
- MiniKit: 3.0.0
- DeviceKit: 3.0.0
- BizKit: 3.0.1
- baseversion: 2.10.1

## 功能介绍

- 主题：支持明、暗两种主题（跟随App）
- 基础功能：预览、录制、截屏、对讲
- 扩展功能：回放、相册
- 其他功能：摄像头设置、云台、变焦

## 功能开发

### 接口

- tuya.m.rtc.config.get 1.0 摄像头配置信息

### 播放器引入

```tsx
import { IpcPlayer as Player } from '@ray-js/components-ty-ipc';

<View className={Styles.playerWrap}>
  {devInfo?.devId && ( // 获取到设备id之后再渲染播放器，避免无法出流情况
    <Player
      defaultMute={isMute} // 静音状态
      devId={devInfo?.devId} // 设备id
      onlineStatus={devInfo.isOnline} // 设备在线状态
      updateLayout={`${playerLayout}`} // 更新播放器位置及大小时更新此值
      onChangeStreamStatus={onChangeStreamStatus} // 流状态变化事件
      onCtx={getIpcPlayer} // player组件实例
      onPlayerTap={handlePlayerClick} // 点击组件事件
      clarity={videoClarityObj[mainDeviceCameraConfig.videoClarity]} // 视频清晰度
      privateState={dpState.basic_private || false} // 隐私模式
    />
  )}
</View>
```
