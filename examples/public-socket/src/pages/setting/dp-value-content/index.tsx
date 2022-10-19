import React from 'react';
import { DpSchema, utils } from '@ray-js/panel-sdk';
import { Text, View, Icon as IconBase } from '@ray-js/ray';
import SjsSlider from '@ray-js/components-ty-slider/lib/slider';
import styles from './index.module.less';

interface Props {
  schema: DpSchema;
  value: number;
  onChange: (value: number) => void;
}

export const DpValueContent: React.FC<Props> = props => {
  const { schema, value } = props;
  const [currentValue, setCurrentValue] = React.useState(value);
  const min = schema?.property?.min || 0;
  const max = schema?.property?.max || 100;
  const step = schema?.property?.step || 1;
  const handleValueChange = React.useCallback((v: number) => {
    setCurrentValue(v);
    typeof props.onChange === 'function' && props.onChange(v);
  }, []);
  const percent = Math.round(utils.calcPercent(min, max, currentValue) * 100);
  return (
    <View className={styles['dp-value-content']}>
      <View className={styles['dp-value-content-title']}>
        <View className={styles.flipX} onClick={() => setCurrentValue(currentValue - step)}>
          <IconBase type="icon-a-playfill" color="rgba(0, 0, 0, 0.2)" />
        </View>
        <Text className={styles['dp-value-content-title-text']}>{percent}%</Text>
        <View onClick={() => setCurrentValue(currentValue + step)}>
          <IconBase color="rgba(0, 0, 0, 0.2)" type="icon-a-playfill" />
        </View>
      </View>
      <View className={styles['dp-value-content-slider']}>
        <SjsSlider
          instanceId="__dp_value_slider__"
          min={schema?.property?.min || 0}
          max={schema?.property?.max || 100}
          step={step}
          end={currentValue}
          trackStyle={{
            background: 'transparent',
          }}
          barStyle={{
            height: '45px',
            background: '#0078fa',
          }}
          thumbEndStyle={{
            width: '14.71px',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '2px solid #ffffff',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
            borderRadius: '1.83914px',
          }}
          bind:onStart={evt => handleValueChange(evt.detail.end)}
          bind:onChange={evt => handleValueChange(evt.detail.end)}
          bind:onEnd={evt => handleValueChange(evt.detail.end)}
        />
      </View>
    </View>
  );
};
