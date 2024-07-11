import { AnimationTask } from "./animation.sjs";

const queryElement = (ownerInstance, classSelector) => {
    return ownerInstance.selectComponent(`.${classSelector}`);
};

let instance = null;
const imageAnim = new AnimationTask(0, 5000, 1);
const sliderAnim = new AnimationTask(0, 5000, 1);

let moveableLen, sliderWidth, viewWidth;
let startX = 0;
let movePosition;
let currentSliderMove = 0;

const observerValue = (newValue, oldValue, ownerInstance) => {
    if (!instance) {
        instance = ownerInstance;
    }
    const moveableLen = getMoveableLen(ownerInstance);
    if (!moveableLen) return;
    const value = Math.min(100, Math.max(0, newValue));
    const len = (value * moveableLen) / 100;

    currentSliderMove = len;
    // 初始化动画参数
    if (!imageAnim.lastTime) {
        imageAnim.setImmediate(len);
        sliderAnim.setImmediate(len);
        imageAnim.maxChangedValue = moveableLen;
        sliderAnim.maxChangedValue = moveableLen;
    } else {
        imageAnim.startAnimation(len);
        // 变化超过 1% 时才触发动画更新
        if (Math.abs(sliderAnim.value - len) >= moveableLen / 100) {
            sliderAnim.startAnimation(len);
        }
    }
}

const getCurrentPercent = (value) => {
    if (!moveableLen) return 0;
    return Math.floor(((value || currentSliderMove) / moveableLen) * 100);
}

const getMoveableLen = (ownerInstance) => {
    if (moveableLen) return moveableLen;
    const container = queryElement(ownerInstance, 'container');
    const leftSlider = queryElement(ownerInstance, 'slider-left');
    if (!container || !leftSlider) return;
    const view = container.getBoundingClientRect();
    const leftView = leftSlider.getBoundingClientRect();
    sliderWidth = leftView.width;
    viewWidth = view.width;
    moveableLen = view.width / 2 - leftView.width;
    return moveableLen;
}

const setSliderStyle = (ownerInstance, value) => {
    const leftSlider = queryElement(ownerInstance, 'slider-left');
    const rightSlider = queryElement(ownerInstance, 'slider-right');
    const move = Math.max(0, Math.min(moveableLen, value));
    leftSlider.setStyle({
        left: `${move}px`
    });
    rightSlider.setStyle({
        right: `${move}px`
    });
    currentSliderMove = move;

    // 不是由拖动引起的，不触发change事件
    if (!movePosition) return;

    const percent = getCurrentPercent();
    ownerInstance.triggerEvent('change', {
        value: percent
    });
}

const setImageStyle = (ownerInstance, value) => {
    const leftImage = queryElement(ownerInstance, 'image-left');
    const rightImage = queryElement(ownerInstance, 'image-right');
    const move = Math.max(0, Math.min(moveableLen, value));
    leftImage.setStyle({
        width: `${move + sliderWidth}px`
    });
    rightImage.setStyle({
        width: `${move + sliderWidth}px`
    });
}

const setPercentStyle = (ownerInstance) => {
    const dialog = queryElement(ownerInstance, 'dialog-percent');
    const percent = getCurrentPercent();
    dialog.setStyle({
        "--percent-num": percent.toString()
    });
}

imageAnim.onUpdate = function (value) {
    setImageStyle(instance, value);
}

imageAnim.onAnimationEnd = function () {
    instance.callMethod('onAnimationEnd');
}

imageAnim.onAnimationStart = function () {
    instance.callMethod('onAnimationStart');
}

sliderAnim.onUpdate = function (value) {
    setSliderStyle(instance, value);
}

const handleStart = (event, ownerInstance) => {
    const { clientX } = event.touches[0];
    const { position } = event.currentTarget.dataset;
    // 没找到position？发生了异常
    if (!position || !["left", 'right'].includes(position)) return;

    movePosition = position;
    // 停止slider动画
    sliderAnim.stopAnimation();
    startX = clientX;
    ownerInstance.callMethod('onSlidering');
    setPercentStyle(ownerInstance);
}


const handleMove = (event, ownerInstance) => {
    const { clientX } = event.touches[0];
    if (!movePosition) return;
    // 使用offsetLeft代替left
    if (movePosition === 'left') {
        const left = currentSliderMove;
        const diff = clientX - startX;
        sliderAnim.setImmediate(left + diff);
        startX = clientX;
    } else if (movePosition === 'right') {
        const right = currentSliderMove;
        const diff = startX - clientX;
        sliderAnim.setImmediate(right + diff);
        startX = clientX;
    }
    setPercentStyle(ownerInstance);
}


const handleEnd = (event, ownerInstance) => {
    const percent = getCurrentPercent();
    ownerInstance.triggerEvent('changend', {
        value: percent
    });
    movePosition = '';
    imageAnim.startAnimation(currentSliderMove);
    ownerInstance.callMethod('onSliderEnd');
}


let lastControl = '';
const controlChange = (newControl, oldControl, ownerInstance) => {
    console.log("newControl", newControl);
    if (newControl !== lastControl) {
        lastControl = newControl;
        if (newControl === 'stop') {
            imageAnim.stopAnimation();
            sliderAnim.stopAnimation();
        } else if (newControl === 'continue') {
            imageAnim.startAnimation(currentSliderMove);
        }
    }
}


module.exports = {
    observerValue,
    handleStart,
    handleMove,
    handleEnd,
    controlChange
};
