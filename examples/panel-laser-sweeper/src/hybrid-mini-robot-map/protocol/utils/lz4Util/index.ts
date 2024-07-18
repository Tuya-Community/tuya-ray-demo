const bindings = require('./binding');

const { Buffer } = require('buffer');

function uncompress(bytes: any[], size = 1024 * 1024) {
  const input = Buffer.from(bytes);
  const oneG = 1073741824; // 最大分配1G内存
  let finalSize = size;
  if (size > oneG) {
    finalSize = oneG;
    console.warn('uncompress所需空间过大，强制设定为1G', size);
    return [];
  }
  let uncompressed = Buffer.alloc(finalSize);
  const uncompressedSize = bindings.uncompress(input, uncompressed);
  uncompressed = uncompressed.slice(0, uncompressedSize);
  return uncompressed;
}

export default {
  uncompress,
};
