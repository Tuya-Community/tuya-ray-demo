English | [简体中文](./README-zh_CN.md)

# Ipc MiniApp template

## Introduction

### APP version support

4.5.0 and above

### dependencies

- @ray-js/components-ty-ipc player

### Mini program kit dependencies (the following dependencies are the minimum version of kit)

- BaseKit: 3.0.0
- MiniKit: 3.0.0
- DeviceKit: 3.0.0
- BizKit: 3.0.1
- baseversion: 2.10.1

## Features

- Theme: Support light and dark themes (follow APP)
- IPC basic functions: preview, recording, screen capture, intercom
- IPC extended functions: playback, photo album
- Other features: camera settings, PTZ, zoom

## function development

### interface

- ty.device.getCameraConfigInfo camera configuration information

### Player import

```tsx
import { IpcPlayer as Player } from '@ray-js/components-ty-ipc';

<View className={Styles.playerWrap}>
  {devInfo?.devId && (
    <Player
      defaultMute={isMute}
      devId={devInfo?.devId}
      onlineStatus={devInfo.isOnline}
      updateLayout={`${playerLayout}`}
      onChangeStreamStatus={onChangeStreamStatus}
      onCtx={getIpcPlayer}
      onPlayerTap={handlePlayerClick}
      clarity={videoClarityObj[mainDeviceCameraConfig.videoClarity]}
      privateState={dpState.basic_private || false}
    />
  )}
</View>;
```
