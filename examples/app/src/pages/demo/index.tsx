// import { location, usePageEvent } from 'ray';
import React, { Fragment, useState, useEffect } from 'react';

import { getApp, setStorage, getStorage } from '@ray-js/api';

import Header from '@/common/Header';

import { Input, Button, Radio, RadioGroup, View, Checkbox, Text } from '@ray-js/components';
import styles from './index.module.less'

type ITEM = {
  id: number
  content: string
  checked: string
}

export default function Home() {
  const [ list, setList ] = useState<ITEM[]>([]);
  const [ value, setValue ] = useState<string>('')
  const [ type, setType ] = useState<string>('uncheck')


  useEffect(() => {
    getStorage({
      key: 'list',
      success: (ret) => {
        const cache = ret.data
        if (cache) {
          try {
            setList(JSON.parse(cache))
          } catch (error) {}
        }
      }
    })
  }, [])

  useEffect(() => {
    setStorage({
      key: 'list',
      data: JSON.stringify(list),
    })
  }, [list])

  const handleAdd = () => {
    setList(
      [
      ...list,
      {
        id: list.length,
        content: value,
        checked: 'false'
      }
    ])
    setValue('')
  }

  const handleInput = (e) => {
    setValue(e.value)
  }

  const handleChange = (item) => {
    setList(
      list.map(i => {
        if (i.id === item.id) {
          return {
            ...i,
            checked: item.checked === 'true' ? 'false' : 'true'
          }
        }
        return i
      })
    )
  }

  const handleTypeChange = (e) => {
    setType(e.detail.value)
  }

  return (
    <Fragment>
      <Header title='Ray' description={'涂鸦跨端研发体系'} />
      <View className={styles.container} >
        <View className={styles.addContainer}>
          <Input className={styles.input} value={value} onInput={handleInput} />
          <Button size="small" type="primary" className={styles.btn} onClick={handleAdd}>添加</Button>
        </View>
        <View className={styles.bar}>
          <RadioGroup options={[{
            label: '未完成',
            value: 'uncheck',
            checked: type === 'uncheck'
          }, {
            label: '已完成',
            value: "checked",
            checked: type === 'checked'
          }]} onChange={handleTypeChange} />
        </View>
        {
          list && list.map((item) => {
            const checked = item.checked === 'true' ? "checked" : "uncheck";
            return checked === type && (
              <View key={item.id} className={styles.item}>
                <View className={styles.itemContent}>
                   <Text>{item.id + 1}. {item.content}</Text>
                </View>
                {
                  checked === 'uncheck' && (<View className={styles.textBtn} onClick={() => handleChange(item)}>完成</View>)
                }
              </View>
            )
          })
        }
      </View>
    </Fragment>
  );
}
