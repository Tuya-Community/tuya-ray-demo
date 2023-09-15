/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { LampApi, getAdvanceHigh, getTempKelvin, getTempKelvinPower } from '@/api';
import SupportUtils from '@/utils/SupportUtils';
import dpCodes from './config/dpCodes';
import DefaultVal from '@/config/default';
import { actions, store } from '@/redux';
import './styles/index.less';
import { devices, dpKit } from '@/devices';

const { defaultColors, defaultWhite } = DefaultVal;
const { brightCode, temperatureCode } = dpCodes;

interface Props {
  devInfo: DevInfo;
  // eslint-disable-next-line react/require-default-props
  extraInfo?: Record<string, any>;
  // eslint-disable-next-line react/require-default-props
  preload?: boolean;
}

interface State {
  devInfo: DevInfo;
}

const composeLayout = (Comp: React.ComponentType<any>) => {
  const { dispatch } = store;
  return class PanelComponent extends Component<Props, State> {
    async onLaunch() {
      devices.lamp.init();
      devices.lamp.onInitialized(res => {
        dpKit.init(devices.lamp);
        const devInfo = res.getDevInfo();
        const { devId, groupId } = devInfo;
        this.initCloud(devInfo);
        LampApi.fetchCloudConfig(devId, groupId).then(cloudData => {
          if (cloudData && Object.keys(cloudData).length) {
            this.handleCloudData(cloudData);
          }
        });
        ty.hideLoading();
      });
    }

    async initCloud(devInfo) {
      // 获取本地数据
      // 加载云端配置

      const { devId, groupId } = devInfo;
      ty.showLoading({ title: '' });

      ty.home.getCurrentHomeInfo({
        success: homeInfo => {
          ty.device.requestAdvancedCapability({
            resId: devInfo?.groupId || devInfo?.devId,
            dpCodes: SupportUtils.isSupportTemp() ? [brightCode, temperatureCode] : [brightCode],
            type: SupportUtils.isGroupDevice() ? '5' : '6',
            spaceId: +homeInfo?.homeId,
            success: async (res: any) => {
              // 高级色温转换
              getTempKelvinPower()
                .then(tempRes => {
                  if (tempRes) {
                    getTempKelvin()
                      .then(tempColorList => {
                        if (JSON.stringify(tempColorList) !== '{}') {
                          dispatch(actions.common.updateCloud({ colorTempCheckValue: true }));
                        }
                      })
                      .catch(err => {
                        console.log('API: getTempKelvin Err', err);
                      });
                  }
                })
                .catch(err => {
                  console.log('API: getTempKelvinPower Err', err);
                });

              // 高级亮度转换
              getAdvanceHigh()
                .then(brightRes => {
                  dispatch(actions.common.updateCloud({ colorBrightCheckValue: brightRes }));
                })
                .catch(err => {
                  console.warn('getAdvanceHigh fail===', err);
                });
            },
            fail: (res: any) => {
              console.warn('requestAdvancedCapability fail====', res);
            },
          });
        },
        fail: err => {
          console.warn('getCurrentHomeInfo fail===', err);
        },
      });
    }

    handleCloudData(cloudData: any) {
      // 获取云端数据，并放到redux里
      let collectColorList = [...defaultColors];
      let collectWhiteList = [...defaultWhite];
      Object.entries(cloudData).forEach(([code, value]: [string, any]) => {
        if (code === 'collectColors' && value && JSON.stringify(value) !== '[]') {
          collectColorList = value;
        }
        if (code === 'collectWhites' && value && JSON.stringify(value) !== '[]') {
          collectWhiteList = value;
        }
      });

      dispatch(
        actions.common.updateCloud({
          collectColors: collectColorList,
          collectWhites: collectWhiteList,
        })
      );
    }

    render() {
      const { extraInfo } = this.props;

      return (
        <Provider store={store}>
          <Comp extraInfo={extraInfo} {...this.props} />
        </Provider>
      );
    }
  };
};

export default composeLayout;
