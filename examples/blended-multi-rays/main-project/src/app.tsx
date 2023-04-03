import React from 'react'

import './app.less'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  onLaunch() {
    console.log('=================== app launch', Date.now())
  }

  onShow() {
    console.log('=================== app show', Date.now())
  }

  render() {
    console.log('=================== app render', Date.now())

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
