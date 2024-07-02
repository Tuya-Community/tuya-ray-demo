import React, { useMemo } from 'react'; 
import NoticeBar from '@ray-js/notice-bar';
import { router } from '@ray-js/ray';

import Res from '@/res';
import Strings from '@/i18n';
import { formatLog } from '@/utils';
import { usePanelStore, useOpenPanel } from '@/hooks';

interface IProps {
  cameraRotate?: Rotate;
}

const LatestLog: React.FC<IProps> = () => {

  const { openRNPanel } = useOpenPanel();
  const { lastLog, themeColor } = usePanelStore();

  const lastLogText = useMemo(() => {
    if (lastLog?.exist) {
      const { formatTime, formatUserName, openText } = formatLog(lastLog);
      const unReadCount = lastLog.unReadCount > 99 ? '99+' : lastLog.unReadCount;
      return { text: `${formatTime} ${formatUserName} ${openText}`, unReadCount };
    }

    return { text: Strings.getLang('noLogs'), unReadCount: 0 };
  }, [lastLog]);

  return (
    <NoticeBar
      text={lastLogText.text}
      number={lastLogText.unReadCount}
      image={Res.alarmImage}
      style={{ height: '144rpx', width: '100vw' }}
      imageStyle={{
        width: '80rpx',
        height: '80rpx',
        borderRadius: '40rpx',
      }}
      textStyle={{ color: '#878787', maxWidth: '560rpx', fontSize: '28rpx', lineHeight: '32rpx' }}
      onClick={() => router.push('/logs')}
    />
  );
};

export default LatestLog;
