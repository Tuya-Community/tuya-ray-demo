import { RayConfig } from '@ray-js/types'

const config: RayConfig = {
  blended: {
    root: '../miniapp',
    independent: true,
    output: 'ray/wechat'
  },
  plugins: [
    {
      configWebpack({ config }: any) {
        config.output.set('uniqueName', 'subPkg')
      }
    }
  ]
}

export default config
