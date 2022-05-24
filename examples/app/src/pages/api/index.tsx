import { location } from 'ray';
import React, { Fragment } from 'react';

import { COMPONENTS } from '@/api/index.config';

import Header from '@/common/Header';
import NavPanel from '@/common/NavPanel';

class My extends React.Component {
  onShow() {
    console.info('my onShow', location);
  }

  onHide() {
    console.info('my onHide');
  }

  render() {
    return (
      <Fragment>
        <Header title='API' description='展示跨端 API 接口能力' />
        {COMPONENTS.map(({ title, list }) => {
          return <NavPanel key={title} title={title} list={list} />;
        })}
      </Fragment>
    );
  }
}

export default My;
