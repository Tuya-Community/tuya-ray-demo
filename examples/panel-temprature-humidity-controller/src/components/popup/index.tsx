import { usePageEvent } from "@ray-js/ray";
import {
    ActionSheet, DateTimePicker, Dialog, Overlay, Picker,
    Popup, SmartActionSheetProps, SmartDateTimePickerProps, SmartDialogProps,
    SmartPickerProps
} from "@ray-js/smart-ui";
import React, { useCallback, useEffect, useMemo, useState } from "react";

interface ActionSheetProps extends SmartActionSheetProps {
    onSelect?: (e: any, cb: Function) => void,
    onCancel?: (e: any, cb: Function) => void,
    onConfirm?: (e: any, cb: Function) => void,
};

interface DialogProps extends SmartDialogProps {
    onClose?: (e: any, cb: Function) => void,
    onConfirm?: (e: any, cb: Function) => void,
    onCancel?: (e: any, cb: Function) => void
}


interface PickerProps extends SmartPickerProps {
    onConfirm?: (e: any, cb: Function) => void,
    onCancel?: (e: any, cb: Function) => void,
    onChange?: (e: any) => void,
}

interface DatetimePickerProps extends Omit<SmartDateTimePickerProps, 'type'> {
    onConfirm?: (e: any, cb: Function) => void,
    onCancel?: (e: any, cb: Function) => void,
}
const emptyFn = () => { };
const usePopup = () => {
    const [props, setProps] = useState<any>({ type: null });
    const [show, setShow] = useState(true);
    const [type, setType] = useState('')
    const close = () => { setShow(false); };
    const clear = () => { setType(''); };

    const actionSheet = useCallback((props: ActionSheetProps) => {
        setShow(true);
        setType('actionSheet');
        const { show, onConfirm = (e, cb) => cb(), onSelect = emptyFn, onCancel = (e, cb) => cb(), ...other } = props;
        const composedProps = { onClose: (e) => { props.closeOnClickOverlay || props.closeOnClickAction && close(); }, onConfirm: e => onConfirm.call(composedProps, e, close), onSelect: (e) => { onSelect.call(composedProps, e, close); }, onCancel: (e) => { onCancel.call(composedProps, e, close) }, ...other };
        setProps(composedProps)

        return (updateProps: Partial<ActionSheetProps>) => {
            Object.assign(composedProps, updateProps);
            setProps({ ...composedProps });
        }
    }, []);

    const dialog = useCallback((props: DialogProps) => {
        setShow(true);
        setType('dialog');
        const { show, onConfirm = (e, cb) => cb(), onCancel = (e, cb) => cb(), ...other } = props;
        const composedProps = { onConfirm: e => onConfirm.call(composedProps, e, close), onCancel: e => onCancel.call(composedProps, e, close), ...other };;
        setProps(composedProps);

        return (updateProps: Partial<DialogProps>) => {
            Object.assign(composedProps, updateProps);
            setProps({ ...composedProps });
        }
    }, [])

    const picker = useCallback((props: PickerProps) => {
        setShow(true);
        setType('picker');
        const { onCancel = (e, cb) => cb(), onConfirm = (e, cb) => cb(), ...other } = props;
        const composedProps = { onConfirm: e => onConfirm.call(composedProps, e, close), onCancel: e => onCancel.call(composedProps, e, close), ...other };
        setProps(composedProps);
        return (updateProps: Partial<PickerProps>) => {
            Object.assign(composedProps, updateProps);
            setProps({ ...composedProps });
        }
    }, []);


    const datePicker = useCallback((props: DatetimePickerProps) => {
        setShow(true);
        setType('datePicker');
        const { onCancel = (e, cb) => cb(), onConfirm = (e, cb) => cb(), ...other } = props;
        const composedProps = { onConfirm: e => onConfirm.call(composedProps, e, close), onCancel: e => onCancel.call(composedProps, e, close), ...other, type: 'date' };
        setProps(composedProps);
        return (updateProps: Partial<DatetimePickerProps>) => {
            Object.assign(composedProps, updateProps);
            setProps({ ...composedProps });
        }
    }, [])

    const timePicker = useCallback((props: DatetimePickerProps) => {
        setShow(true);
        setType('timePicker');
        const { onCancel = (e, cb) => cb(), onConfirm = (e, cb) => cb(), ...other } = props;
        const composedProps = { onConfirm: e => onConfirm.call(composedProps, e, close), onCancel: e => onCancel.call(composedProps, e, close), ...other, type: 'time' };
        setProps(composedProps);
        return (updateProps: Partial<DatetimePickerProps>) => {
            Object.assign(composedProps, updateProps);
            setProps({ ...composedProps });
        }
    }, [])

    return {
        call: {
            actionSheet,
            dialog,
            picker,
            datePicker,
            timePicker,
            close,
            clear
        },
        render() {
            return useMemo(() => (
                <>
                    {type === 'dialog' && <Dialog show={show}  {...props} />}
                    {type === 'actionSheet' && <ActionSheet show={show}  {...props} />}
                    {/* @ts-ignore */}
                    {type === 'picker' && <Popup show={show} onClose={close} position="bottom"><Picker {...props}></Picker></Popup>}
                    {/* @ts-ignore */}
                    {(type === 'datePicker') && <Popup safeAreaInsetBottom={true} onAfterLeave={clear} show={show} onClose={close} position="bottom">
                        <DateTimePicker {...props} key={'datePicker'}></DateTimePicker>
                    </Popup>}
                    {/* @ts-ignore */}
                    {(type === 'timePicker') && <Popup safeAreaInsetBottom={true} onAfterLeave={clear} show={show} onClose={close} position="bottom">
                        {type === 'timePicker' && <DateTimePicker {...props} key={'timePicker'}></DateTimePicker>}
                    </Popup>}
                </>
            ), [show, type, props]);
        }
    };
};



function warningCB<T>(props?: T): (props?: Partial<T>) => void {
    console.warn(
        '请先将 PopupView 组件引入页面中，才能使用全局弹出；'
    );
    return emptyFn;
}
const defaultPopup = {
    actionSheet: warningCB<ActionSheetProps>,
    dialog: warningCB<DialogProps>,
    picker: warningCB<PickerProps>,
    close: warningCB<null>,
    clear: warningCB<null>,
    datePicker: warningCB<DatetimePickerProps>,
    timePicker: warningCB<DatetimePickerProps>
};

const globalPopup = { ...defaultPopup };

export const PopupView = () => {
    const popup = usePopup();
    useEffect(() => {
        Object.assign(globalPopup, popup.call);
    }, []);
    usePageEvent('onShow', () => {
        Object.assign(globalPopup, popup.call);
    });
    usePageEvent('onHide', () => {
        Object.assign(globalPopup, defaultPopup);
    });
    return popup.render();
};

export default globalPopup;
