import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';
import Demo0 from '@/components/Picker/basic';
import Demo1 from '@/components/Picker/multiSelector';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Picker' description='从底部弹起的滚动选择器' />
      {/* <Code title='单列'>{`const [current, setCurrent] = React.useState(0);

const handlePickerChange = (e) => {
  setCurrent(+e.detail.value);
};

const range = ['美国', '中国', '巴西', '日本'];
return (
  <Picker onChange={handlePickerChange} range={range}>
    <View>当前选择的是:{range[current]}</View>
  </Picker>);
      `}</Code> */}
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>

      {/* <Code title='多列'>{`const [current, setCurrent] = React.useState([0, 0, 0]);

const handlePickerChange = (e) => {
  setCurrent(e.detail.value);
};

const range = [
  ['无脊柱动物', '脊柱动物'],
  ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
  ['猪肉绦虫', '吸血虫'],
];
return (
  <Picker onChange={handlePickerChange} range={range} mode='multiSelector'>
    <View>
      当前选择的是:{range[0][+current[0]]}, {range[1][+current[1]]}, {range[2][+current[2]]}
    </View>
  </Picker>
);`}</Code> */}
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
