import { RayConfig } from '@ray-js/types'

const config: RayConfig = {
  blended: {
    root: '../miniapp',
    independent: true,
    output: 'ray/wechat'
  },
}

export default config
