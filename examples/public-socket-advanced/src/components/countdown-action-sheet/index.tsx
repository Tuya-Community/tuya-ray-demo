import React from 'react';
import Actionsheet from '@ray-js/components-ty-actionsheet';
import { CountdownPicker } from '@/components';

type CountdownProps = React.ComponentProps<typeof CountdownPicker>;
interface Props extends CountdownProps {
  visible: boolean;
  title: string;
  cancelText: string;
  okText: string;
  startText: string;
  onCancel: () => void;
  onOk: (countdown: any) => void;
  onClickOverlay: () => void;
}

export const CountdownActionSheet: React.FC<Props> = React.memo<Props>(props => {
  const {
    visible,
    title,
    value,
    min,
    onClickOverlay,
    onCancel,
    onOk,
    cancelText,
    okText,
    startText,
    ...countdownPickerProps
  } = props;
  const [countdown, setCountdown] = React.useState(value);

  /**
   * 倒计时展示模式，如果倒计时为空则默认在设置页，反之则默认在展示页
   */
  const [mode, setMode] = React.useState<'set' | 'display'>(value === 0 ? 'set' : 'display');

  React.useEffect(() => {
    const currentMode = value === 0 ? 'set' : 'display';
    setMode(currentMode);
    setCountdown(value);
  }, [value]);

  const handleChange = React.useCallback(data => {
    setCountdown(data.value);
  }, []);

  const handleOKClick = React.useCallback(() => {
    if (countdown !== 0 && mode !== 'display') setMode('display');
    onOk(countdown < min ? min : countdown);
  }, [countdown]);

  const handleReset = React.useCallback(() => {
    setMode('set');
  }, []);

  const footerProps = {
    cancelText: mode === 'set' ? cancelText : '',
    okText: mode === 'set' ? startText : okText,
  };

  return (
    <Actionsheet
      overlayCloseable
      position="bottom"
      show={visible}
      header={title}
      {...footerProps}
      onClickOverlay={onClickOverlay}
      onCancel={onCancel}
      onOk={handleOKClick}
    >
      <CountdownPicker
        {...countdownPickerProps}
        value={countdown}
        mode={mode}
        onChange={handleChange}
        onReset={handleReset}
      />
    </Actionsheet>
  );
});

CountdownActionSheet.defaultProps = {
  ...CountdownPicker.defaultProps,
};
