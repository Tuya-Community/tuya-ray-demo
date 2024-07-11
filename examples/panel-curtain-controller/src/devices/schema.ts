export const defaultSchema = [
  {
    "attr": 1028,
    "canTrigger": true,
    "code": "control",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_power2",
    "id": 1,
    "mode": "rw",
    "name": "设备控制",
    "property": {
      "range": [
        "open",
        "stop",
        "close",
        "continue"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 4,
    "canTrigger": true,
    "code": "percent_control",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-icon-percent",
    "id": 2,
    "mode": "rw",
    "name": "百分比控制",
    "property": {
      "unit": "%",
      "min": 0,
      "max": 100,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "percent_state",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-icon-percent",
    "id": 3,
    "mode": "ro",
    "name": "开启百分比状态",
    "property": {
      "unit": "%",
      "min": 0,
      "max": 100,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "control_back",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_mode",
    "id": 5,
    "mode": "rw",
    "name": "电机反转",
    "property": {
      "range": [
        "forward",
        "back"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "work_state",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-zhuangtai",
    "id": 7,
    "mode": "ro",
    "name": "工作状态",
    "property": {
      "range": [
        "opening",
        "closing"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "time_total",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_time",
    "id": 10,
    "mode": "ro",
    "name": "全程运行时间",
    "property": {
      "unit": "ms",
      "min": 0,
      "max": 240000,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "situation_set",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-icon-percent",
    "id": 11,
    "mode": "rw",
    "name": "开启百分比含义",
    "property": {
      "range": [
        "fully_open",
        "fully_close"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "fault",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-baojing",
    "id": 12,
    "mode": "ro",
    "name": "故障告警",
    "property": {
      "label": [
        "motor_fault"
      ],
      "type": "bitmap",
      "maxlen": 1
    },
    "type": "obj"
  },
  {
    "attr": 4096,
    "canTrigger": true,
    "code": "light_mode",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-deng",
    "id": 101,
    "mode": "rw",
    "name": "指示灯状态设置",
    "property": {
      "range": [
        "none",
        "relay",
        "pos"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 4096,
    "canTrigger": true,
    "code": "backlight_switch",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-a_power",
    "id": 102,
    "mode": "rw",
    "name": "背光开关",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 4096,
    "canTrigger": true,
    "code": "child_lock",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_power2",
    "id": 103,
    "mode": "rw",
    "name": "童锁开关",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 4096,
    "canTrigger": true,
    "code": "backlight",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_light2",
    "id": 104,
    "mode": "rw",
    "name": "背光亮度",
    "property": {
      "unit": "%",
      "min": 0,
      "max": 100,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 4096,
    "canTrigger": true,
    "code": "night_light_color",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_mode",
    "id": 105,
    "mode": "rw",
    "name": "开颜色",
    "property": {
      "range": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 4096,
    "canTrigger": true,
    "code": "night_light_mode",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_mode",
    "id": 106,
    "mode": "rw",
    "name": "关颜色",
    "property": {
      "range": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 4096,
    "canTrigger": true,
    "code": "quick_calibration_1",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_loop",
    "id": 107,
    "mode": "rw",
    "name": "快捷校准1",
    "property": {
      "unit": "s",
      "min": 10,
      "max": 240,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  }
] as const;