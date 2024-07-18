const readFile = (path: string, encoding: string) => {
  return new Promise<string>((resolve, reject) => {
    ty.getFileSystemManager().readFile({
      filePath: path,
      encoding: encoding,
      position: 0,
      success: (params: { data: string }) => {
        resolve(params.data);
      },
      fail: () => {
        reject();
      },
    });
  });
};

export const getDefaultLaserPanelConfig = (panel: any): any => {
  try {
    const config = {};
    Object.keys(panel) &&
      Object.keys(panel).forEach((configKey: string) => {
        if (panel[configKey].value !== undefined) {
          const { value } = panel[configKey];
          config[configKey] = value;
        } else {
          // 如果没有value，代表有嵌套
          config[configKey] = getDefaultLaserPanelConfig(panel[configKey]);
        }
      });
    return config;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const readJsonFile = async (filename: string) => {
  try {
    const dirs = ty.env.USER_DATA_PATH;
    const path = `${dirs}/${filename}`;
    const data = await readFile(path, 'utf8');
    return data;
  } catch (error) {
    // console.log('readJsonFile error:', error);
    return null;
  }
};
