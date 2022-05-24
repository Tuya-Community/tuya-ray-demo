// 提供给 cli 构建使用的文件，使用 cjs 语法

import { RayConfig } from '@ray-js/types';
import path from 'path';

const config: RayConfig = {
  resolveAlias: {
    '@/components': path.join(__dirname, './src/components'),
  },
  rn: {
    enableMultipleClassName: true,
    enableMergeStyle: true,
  },
};

export default config;
