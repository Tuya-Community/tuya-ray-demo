export const defaultSchema = [
  {
    "attr": 1666,
    "canTrigger": true,
    "code": "temp_current",
    "defaultRecommend": true,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_temp",
    "id": 1,
    "mode": "ro",
    "name": "当前温度",
    "property": {
      "unit": "℃",
      "min": -200,
      "max": 600,
      "scale": 1,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1666,
    "canTrigger": true,
    "code": "humidity_value",
    "defaultRecommend": true,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-shidu",
    "id": 2,
    "mode": "ro",
    "name": "湿度数值",
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
    "attr": 1152,
    "canTrigger": true,
    "code": "battery_state",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_battery",
    "id": 3,
    "mode": "ro",
    "name": "电池电量状态",
    "property": {
      "range": [
        "low",
        "middle",
        "high"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1154,
    "canTrigger": true,
    "code": "battery_percentage",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_battery",
    "id": 4,
    "mode": "ro",
    "name": "电池电量",
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
    "attr": 1152,
    "canTrigger": true,
    "code": "temp_sampling",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-wendu2",
    "id": 6,
    "mode": "rw",
    "name": "温度采样",
    "property": {
      "unit": "s",
      "min": 0,
      "max": 3600,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "humidity_sampling",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-shidu",
    "id": 7,
    "mode": "rw",
    "name": "湿度采样",
    "property": {
      "unit": "s",
      "min": 0,
      "max": 3600,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "temp_unit_convert",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_mode",
    "id": 9,
    "mode": "rw",
    "name": "温标切换",
    "property": {
      "range": [
        "c",
        "f"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "maxtemp_set",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-setting",
    "id": 10,
    "mode": "rw",
    "name": "温度上限设置",
    "property": {
      "unit": "℃",
      "min": -200,
      "max": 600,
      "scale": 1,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "minitemp_set",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-wendu1",
    "id": 11,
    "mode": "rw",
    "name": "温度下限设置",
    "property": {
      "unit": "℃",
      "min": -200,
      "max": 600,
      "scale": 1,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "maxhum_set",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-setting",
    "id": 12,
    "mode": "rw",
    "name": "湿度上限设置",
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
    "attr": 1152,
    "canTrigger": true,
    "code": "minihum_set",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-setting",
    "id": 13,
    "mode": "rw",
    "name": "湿度下限设置",
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
    "attr": 1152,
    "canTrigger": true,
    "code": "temp_alarm",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-baojing",
    "id": 14,
    "mode": "ro",
    "name": "温度报警",
    "property": {
      "range": [
        "loweralarm",
        "upperalarm",
        "cancel"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "hum_alarm",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-baojing",
    "id": 15,
    "mode": "ro",
    "name": "湿度报警",
    "property": {
      "range": [
        "loweralarm",
        "upperalarm",
        "cancel"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "temp_periodic_report",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_time3",
    "id": 17,
    "mode": "rw",
    "name": "温度周期上报",
    "property": {
      "unit": "min",
      "min": 1,
      "max": 60,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "hum_periodic_report",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_time3",
    "id": 18,
    "mode": "rw",
    "name": "湿度周期上报",
    "property": {
      "unit": "min",
      "min": 1,
      "max": 60,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "temp_sensitivity",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-wendu2",
    "id": 19,
    "mode": "rw",
    "name": "温度灵敏度",
    "property": {
      "unit": "℃",
      "min": 3,
      "max": 10,
      "scale": 1,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "hum_sensitivity",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_wet2",
    "id": 20,
    "mode": "rw",
    "name": "湿度灵敏度",
    "property": {
      "unit": "%",
      "min": 3,
      "max": 10,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "switch",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_power2",
    "id": 21,
    "mode": "rw",
    "name": "开关",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 1152,
    "canTrigger": true,
    "code": "temp_set",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-set",
    "id": 22,
    "mode": "rw",
    "name": "温度设置",
    "property": {
      "unit": "℃",
      "min": 50,
      "max": 350,
      "scale": 1,
      "step": 5,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "temp_calibration",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_loop",
    "id": 23,
    "mode": "rw",
    "name": "温度校准",
    "property": {
      "unit": "℃",
      "min": -20,
      "max": 20,
      "scale": 1,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1024,
    "canTrigger": true,
    "code": "hum_calibration",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-icon-percent",
    "id": 24,
    "mode": "rw",
    "name": "湿度校准",
    "property": {
      "unit": "%",
      "min": -10,
      "max": 10,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  }
] as const;