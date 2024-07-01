import { getCdnUrl } from '@ray-js/ray';
import cdnMap from '../../cdn/cdnImage.json';

const getCdnImgUrl = imgName => {
  const res = getCdnUrl(imgName, cdnMap);
  return res;
};

export default getCdnImgUrl;
