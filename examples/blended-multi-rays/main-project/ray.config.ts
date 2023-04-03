import { RayConfig } from '@ray-js/types'

const config: RayConfig = {
  output: '../miniapp',
  onTargetDir(output) {
    return output
  }
}

export default config
