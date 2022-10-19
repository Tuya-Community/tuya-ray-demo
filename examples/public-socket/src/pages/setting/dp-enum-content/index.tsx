import React from 'react';
import { DpSchema } from '@ray-js/panel-sdk';
import TyCell from '@ray-js/components-ty-cell';
import { Icon } from '@/components';
import { icons } from '@/res';
import Strings from '@/i18n';

interface Props {
  schema: DpSchema;
  value: string;
  onItemClick: (value: string) => void;
}

export const DpEnumContent: React.FC<Props> = props => {
  const { value, schema, onItemClick } = props;
  const dataSource = schema?.property?.range.map((rangeValue: string) => {
    const isActive = value === rangeValue;
    return {
      title: Strings.getDpLang(schema.code, rangeValue),
      content: isActive && (
        <Icon viewBox="0 0 15 15" d={icons.selected} size="15px" fill="#007aff" />
      ),
      onClick: () => typeof onItemClick === 'function' && onItemClick(rangeValue),
    };
  });
  return <TyCell.Row style={{ margin: 0 }} dataSource={dataSource} rowKey="title" />;
};
