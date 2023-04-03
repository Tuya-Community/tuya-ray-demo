import React from 'react'
import { View, Input, router, Button, navigateTo } from 'ray'

import './index.less'

export default () => {
  return (
    <View>
      current page: index of the first sub package
      <Button onClick={() => router.push('/')}>to page home of the first sub package</Button>
      <Button onClick={() => navigateTo({
        url: '/pages/home/index'
      })}>to page home of main package</Button>
      <Input placeholder='请输入...' style={{ backgroundColor: '#eee' }} onInput={(e) => console.log(e.value)} />
    </View>
  )
}
