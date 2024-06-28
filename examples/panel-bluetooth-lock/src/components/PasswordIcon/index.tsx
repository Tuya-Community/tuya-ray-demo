/* eslint-disable max-len */
import React from 'react';
import { View } from '@ray-js/ray';
import { useCreation } from 'ahooks';
import Svg from '@ray-js/svg';
import { globalConfig } from '@/config';
import { PasswordType } from '@/pages/temp/interface';

interface IPasswordIcon {
  type: number;
  size?: number;
  isInvalid?: boolean;
}

const pwdTypeMap: { [key: number]: PasswordType } = {
  0: PasswordType.custom,
  1: PasswordType.limitTimes,
  2: PasswordType.oneTime,
  3: PasswordType.clean,
  4: PasswordType.clean,
};

const PasswordIcon: React.FC<IPasswordIcon> = ({ type, size = 48, isInvalid }) => {
  const themeColor = isInvalid ? '#D6D6D6' :globalConfig.getConfig('themeColor') as string;
  const icons = useCreation(() => {
    return {
      [PasswordType.oneTime]: (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 49 48"
        >
          <circle cx="12.4937" cy="12" r="12" fill={themeColor} />
          <rect
            x="9.39844"
            y="9.11426"
            width="5"
            height="2"
            rx="1"
            transform={{ rotate: '-45 9.39844 9.11426' }}
            fill="white"
          />
          <rect x="11.9341" y="6" width="2" height="12" rx="1" fill="white" />
        </Svg>
      ),
      [PasswordType.limitTimes]: (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <circle cx="12" cy="12" r="12" fill={themeColor} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM11.3611 9.5C11.3611 9.22386 11.5849 9 11.8611 9C12.1372 9 12.3611 9.22386 12.3611 9.5V12.3083L13.6562 13.6035C13.8515 13.7987 13.8515 14.1153 13.6562 14.3106C13.4609 14.5058 13.1444 14.5058 12.9491 14.3106L11.5349 12.8964C11.5023 12.8638 11.4751 12.8278 11.4534 12.7896C11.3953 12.7079 11.3611 12.6079 11.3611 12.5V9.5Z"
            fill="white"
          />
        </Svg>
      ),
      [PasswordType.dynamic]: (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="短效">
              <circle id="椭圆形" fill={themeColor} fill-rule="nonzero" cx="12" cy="12" r="12" />
              <path
                d="M17,12 C17,14.7614 14.7614,17 12,17 C10.8744,17 9.83566,16.6281 9,16.0004 M7,12 C7,9.23858 9.23858,7 12,7 C13.1258,7 14.1647,7.37209 15.0005,8"
                id="形状"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.79289,11 L5.20711,11 C4.76165,11 4.53857,11.5386 4.85355,11.8536 L6.64645,13.6464 C6.84171,13.8417 7.15829,13.8417 7.35355,13.6464 L9.14645,11.8536 C9.46143,11.5386 9.23835,11 8.79289,11 Z"
                id="路径"
                fill="#FFFFFF"
                fill-rule="nonzero"
              />
              <path
                d="M18.7929,13 L15.2071,13 C14.7617,13 14.5386,12.4614 14.8536,12.1464 L16.6464,10.3536 C16.8417,10.1583 17.1583,10.1583 17.3536,10.3536 L19.1464,12.1464 C19.4614,12.4614 19.2383,13 18.7929,13 Z"
                id="路径"
                fill="#FFFFFF"
                fillRule="nonzero"
              />
            </g>
          </g>
        </Svg>
      ),
      [PasswordType.custom]: (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <circle cx="12.2612" cy="12" r="12" fill={themeColor} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.866 6.43311C13.3877 6.15696 12.7761 6.32084 12.5 6.79913L12 7.66516L14.5981 9.16516L15.0981 8.29913C15.3742 7.82084 15.2103 7.20925 14.7321 6.93311L13.866 6.43311ZM14.0981 10.0312L11.5 8.53118L8 14.5934L8.29904 17.0754L10.5981 16.0934L14.0981 10.0312Z"
            fill="white"
          />
          <rect x="11.75" y="16" width="4" height="1" rx="0.5" fill="white" />
        </Svg>
      ),
      [PasswordType.clean]: (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
        >
          <circle cx="12" cy="12" r="12" fill={themeColor} />
          <circle cx="12" cy="12" r="12" fill={themeColor} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3717 6.66667H17V8.33333H7V6.66667H10.6283C10.7656 6.27827 11.136 6 11.5714 6H12.4286C12.864 6 13.2344 6.27827 13.3717 6.66667ZM7.625 9H16.375V17C16.375 17.5523 15.9273 18 15.375 18H8.625C8.07272 18 7.625 17.5523 7.625 17V9ZM10 11H11V15H10V11ZM14 11H13V15H14V11Z"
            fill="white"
          />
        </Svg>
      ),
    };
  }, []);
  return <View style={{ width: size, height: size }}>{icons[pwdTypeMap[type]]}</View>;
};

export default PasswordIcon;
