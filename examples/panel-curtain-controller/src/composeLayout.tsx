import React, { Component } from 'react';
import { devices, dpKit } from './devices';
import './styles/index.less';

interface Props {
  devInfo: DevInfo;
  // eslint-disable-next-line react/require-default-props
  extraInfo?: Record<string, any>;
}

interface State {
  devInfo: DevInfo;
}

const composeLayout = (SubComp: React.ComponentType<any>) => {
  return class PanelComponent extends Component<Props, State> {
    async onLaunch(object: any) {
      console.log('=== App onLaunch', object);
      devices.common.init();
      devices.common.onInitialized(device => dpKit.init(device));
    }

    render() {
      const { extraInfo } = this.props;

      return (
        <SubComp extraInfo={extraInfo} {...this.props} />
      );
    }
  };
};

export default composeLayout;
