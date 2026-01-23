import React from 'react';
import Strings from '@/i18n';
import { Analyze } from './components/Analyze';
import Layout from '@/components/layout';
export function Curve() {

  return (
    <Layout title={Strings.getLang("curve")} showBack={true}>
      <Analyze></Analyze>
    </Layout>
  );
}

export default Curve;
