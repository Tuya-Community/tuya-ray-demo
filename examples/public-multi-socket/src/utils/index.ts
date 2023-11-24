export const JsonUtil = {
  parseJSON(str) {
    let rst;
    if (str && {}.toString.call(str) === '[object String]') {
      try {
        rst = JSON.parse(str);
      } catch (e) {
        try {
          // eslint-disable-next-line
          rst = eval(`(${str})`);
        } catch (e2) {
          rst = str;
        }
      }
    } else {
      rst = typeof str === 'undefined' ? {} : str;
    }

    return rst;
  },
};

export const formatCountdown = (value: number) => {
  const hour = Math.floor(value / 3600);
  const minute = Math.floor(value / 60) % 60;
  const second = value % 60;

  return [
    hour.toString().padStart(2, '0'),
    minute.toString().padStart(2, '0'),
    second.toString().padStart(2, '0'),
  ].join(':');
};
