import React from 'react';
import 'ray';
import Strings from '@/i18n';
import { initPanelEnvironment } from '@ray-js/ray';
import { SdmProvider, SmartDeviceModel, SmartGroupModel } from '@ray-js/panel-sdk';
import Empty from '@ray-js/components-ty-empty';

interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });

let value = null;

class App extends React.Component<Props, { model: InstanceType<typeof SmartDeviceModel> }> {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
    };
  }

  onLaunch(object) {
    const { query = {} } = object;
    const { groupId, deviceId } = query;

    if (groupId || deviceId) {
      value = groupId ? new SmartGroupModel({ groupId }) : new SmartDeviceModel({ deviceId });

      value.init();
      value.onInitialized(() => {
        this.setState({
          model: value,
        });
      });
    }
  }

  render() {
    if (this.state.model) {
      return <SdmProvider value={this.state.model}>{this.props.children}</SdmProvider>;
    }
    return <Empty title={Strings.getLang('needDeviceId')} />;
  }
}

export default App;
