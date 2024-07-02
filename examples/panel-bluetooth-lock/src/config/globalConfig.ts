import mapKeys from 'lodash/mapKeys';

/** 一些组件的配置项 */
interface IConfig {
  themeColor: string;
  grayTitleColor: string;
  backgroundColor: string
}

/** 一些静态配置项 */
const componentConfig: IConfig = {
  /** 主题色 */
  themeColor: '#5EAAFF',
  /** 灰色标题颜色 */
  grayTitleColor: '#999',
  backgroundColor: '#fff'
};

class GlobalConfig {
  configs: Map<string, IConfig[keyof IConfig]>;

  constructor() {
    this.configs = new Map();

    mapKeys<IConfig>(componentConfig, (value, key) => {
      this.configs.set(key, value);
    });
  }

  setConfig(key: keyof IConfig, value: IConfig[keyof IConfig]) {
    this.configs.set(key, value);
  }

  getConfig = (key: keyof IConfig) => this.configs.get(key)!;
}

export default new GlobalConfig();
