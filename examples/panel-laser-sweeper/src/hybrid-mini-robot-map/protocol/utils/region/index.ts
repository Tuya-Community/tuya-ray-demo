import { decode } from 'js-base64';
/**
 * 正则获取最后的资源地址，若没有域名的，则返回原本的资源地址
 * @param url
 * @returns
 */
const getLatestUri = (url: string): any => {
  const domainReg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/@?%&=]*)?/;
  // 网址资源路径 被替换的必须是中国区地址
  const regionReplace = {
    uri: url,
    shouldReplace: true,
  };

  if (domainReg.test(url)) {
    if (url.includes(`${decode('dHV5YQ==')}cn.com`)) {
      const urlArray = domainReg.exec(url);
      const latestUri = urlArray[3];
      regionReplace.uri = latestUri;
      return regionReplace;
    }
    regionReplace.shouldReplace = false;
    return regionReplace;
  }

  // 检查非链接资源路径首个字符是否为/
  if (!url.startsWith('/')) {
    regionReplace.uri = '/' + url;
  }

  // 非链接资源路径
  regionReplace.shouldReplace = true;
  return regionReplace;
};
/**
 * 返回正确的资源路径uri地址
 * @param uri
 * @returns
 */
const computedRegionAndReplace = (domain: string, uri: string): string => {
  if (uri) {
    const regionReplace = getLatestUri(uri);
    const staticPrefix = domain;
    const realUri = regionReplace.shouldReplace
      ? `${staticPrefix + regionReplace.uri}`
      : regionReplace.uri;
    return realUri;
  }
  return '';
};

export default computedRegionAndReplace;
