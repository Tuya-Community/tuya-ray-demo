import React from 'react'
import { View, Input, router, Button, navigateTo } from 'ray'

import './index.less'

export default () => {
  return (
    <View>
      current page: home of the second sub package
      <Button onClick={() => router.push('/index')}>to page index of the second sub package</Button>
      <Button onClick={() => navigateTo({
        url: '/pages/home/index'
      })}>to page home of main package</Button>
      <Input placeholder='请输入...' style={{ backgroundColor: '#eee' }} onInput={() => console.log(9999)} />
    </View>
  )
}
