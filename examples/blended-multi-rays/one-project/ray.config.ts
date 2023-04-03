import { RayConfig } from '@ray-js/types'

const config: RayConfig = {
  blended: {
    root: '../miniapp',
    independent: true,
    output: 'ray/one'
  },
  onTargetDir(output) {
    return output
  },
  plugins: [
    {
      configWebpack({ config }: any) {
        config.output.set('uniqueName', 'subPkgOne')
      }
    }
  ]
}

export default config
