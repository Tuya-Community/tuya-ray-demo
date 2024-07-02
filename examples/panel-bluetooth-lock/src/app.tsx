import React from 'react';
import { initPanelEnvironment } from '@ray-js/ray';

import composeLayout from './composeLayout';

initPanelEnvironment({ useDefaultOffline: false });
class App extends React.Component {
  componentDidMount() {
    console.info('app did mount ');
  }

  render() {
    return this.props.children;
  }
}

export default composeLayout(App);
