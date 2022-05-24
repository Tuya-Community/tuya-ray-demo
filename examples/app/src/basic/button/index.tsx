import React, { Fragment } from 'react';

import Header from '@/common/Header';

import Demo0 from '@/components/Button/basic';
import Demo1 from '@/components/Button/type';
import Demo2 from '@/components/Button/size';
import Demo3 from '@/components/Button/plain';

import DemoWrapper from '@/common/DemoWrapper';
import Code from '@/common/Code';
const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Button' description='按钮' />
      <Code>{` <Button> Button </Button>
<Button loading > Loading </Button>
<Button disabled> Disabled </Button>
      `}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <Code title='Type'>{`
<Button type='primary'> Primary </Button>
<Button type='default'> Default </Button>
<Button type='warn'> Warn </Button>
      `}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
      <Code title='Size'>{`
<Button> Default </Button>
<Button size='mini'> Mini </Button>
      `}</Code>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>
      <Code title='Plain'>{`
<Button plain type='primary'> Plain + Primary </Button>
<Button plain type='warn'> Plain + Warn </Button>
`}</Code>
      <DemoWrapper align='center'>
        <Demo3 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
