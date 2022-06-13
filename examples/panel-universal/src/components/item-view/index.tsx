import React from 'react';
import { BitmapView } from './bitmap-view';

import { BoolView } from './bool-view';
import { EnumView } from './enum-view';
import { RawView } from './raw-view';
import { StringView } from './string-view';
import { ValueView } from './value-view';

export const ItemView: React.FC<ItemViewProps> = props => {
  switch (props?.item?.property?.type as any) {
    case 'bool':
      return <BoolView {...props} />;
    case 'enum':
      return <EnumView {...props} />;
    case 'raw':
      return <RawView {...props} />;
    case 'string':
      return <StringView {...props} />;
    case 'value':
      return <ValueView {...props} />;
    case 'bitmap':
      return <BitmapView {...props} />;
    default:
      break;
  }
  return <></>;
};
