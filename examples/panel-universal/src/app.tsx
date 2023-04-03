import React from 'react';
import 'ray';
import '@/i18n';
import { kit } from '@ray-js/panel-sdk';

const { initPanelEnvironment } = kit;

interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });

class App extends React.Component<Props> {
  componentDidMount() {
    console.info('=== App did mount');
  }

  render() {
    return this.props.children;
  }
}

export default App;
