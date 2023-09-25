// @ts-check

// props
const THUMBS = ['start', 'end'];

const isNumber = n => /\d+/.test(n);
const getNumber = (n, def) => (isNumber(n) ? n : def);

// state by instanceId in sjs singleton instance
const getOst = (ownerInstance, instanceId) => {
  const ost = ownerInstance.getState() || {};
  return ost[instanceId] || {};
};
// set instance state
const setOstValue = (ownerInstance, instanceId, key, value) => {
  const ost = ownerInstance.getState() || {};
  const state = ost[instanceId] || {};
  state[key] = value;
  ost[instanceId] = state;
};

// watch props
const createPropObserver = prop => instanceId =>
  function(newValue, oldValue, ownerInstance) {
    const ost = getOst(ownerInstance, instanceId);
    const isUpdate = oldValue !== undefined;
    if (newValue === oldValue) return;

    if (prop === 'start') {
      setStart(ownerInstance, instanceId, getNumber(newValue, 0));
    }
    if (prop === 'watchstart' && isUpdate) {
      setStart(ownerInstance, instanceId, getNumber(newValue, 0));
    }
    if (prop === 'end') {
      setEnd(ownerInstance, instanceId, getNumber(newValue, 30));
      updateThumbBg({
        ownerInstance,
        instanceId,
      });
    }
    if (prop === 'watchend' && isUpdate) {
      setEnd(ownerInstance, instanceId, getNumber(newValue, 30));
    }
    setOstValue(ownerInstance, instanceId, '_startValueInPixels', null);
    setOstValue(ownerInstance, instanceId, '_endValueInPixels', null);

    setOstValue(ownerInstance, instanceId, 'rendered', false);
    if (!ost.rendered) {
      updateSlider(ownerInstance, instanceId);
      setOstValue(ownerInstance, instanceId, 'rendered', true);
    }
  };

const getMin = (ownerInstance, instanceId) => {
  return getNumber(getProps(ownerInstance, instanceId).min, 0);
};

const getMax = (ownerInstance, instanceId) => {
  const max = getNumber(getProps(ownerInstance, instanceId).max, 100);
  const min = getMin(ownerInstance, instanceId);
  if (max > min) return max;
  return min + 100;
};

const getStep = (ownerInstance, instanceId) => {
  return getNumber(getProps(ownerInstance, instanceId).step, 1);
};
const getThumbStyleCalc = (ownerInstance, instanceId) => {
  return getProps(ownerInstance, instanceId).thumbstylecalc;
};

const getStart = (ownerInstance, instanceId) => {
  const ost = getOst(ownerInstance, instanceId);
  return ost._start;
};
const setStart = (ownerInstance, instanceId, value) => {
  setOstValue(ownerInstance, instanceId, '_start', setBoundries(ownerInstance, instanceId, value));
};
const getEnd = (ownerInstance, instanceId) => {
  const ost = getOst(ownerInstance, instanceId);
  return ost._end;
};
const setEnd = (ownerInstance, instanceId, value) => {
  setOstValue(ownerInstance, instanceId, '_end', setBoundries(ownerInstance, instanceId, value));
};
const getRangeValue = (ownerInstance, instanceId) => {
  return Math.abs(getEnd(ownerInstance, instanceId) - getStart(ownerInstance, instanceId));
};

const getProps = (ownerInstance, instanceId) => {
  const slider = queryComponent(ownerInstance, instanceId);
  return slider ? slider.getDataset() : {};
};

const isRangeMode = (ownerInstance, instanceId) => {
  const props = getProps(ownerInstance, instanceId);
  const isRangeMode = props.mode === 'range';
  return isRangeMode;
};

const isHideThumb = (ownerInstance, instanceId) => {
  const props = getProps(ownerInstance, instanceId);
  return !!props.hidethumb;
};

const isShowSteps = (ownerInstance, instanceId) => {
  const props = getProps(ownerInstance, instanceId);
  return !!props.showsteps;
};

const isVerticalMode = (ownerInstance, instanceId) => {
  const props = getProps(ownerInstance, instanceId);
  return props.direction === 'vertical';
};

const isEnableTouch = (ownerInstance, instanceId) => {
  const props = getProps(ownerInstance, instanceId);
  if (isHideThumb(ownerInstance, instanceId)) {
    return true;
  }
  return !!props.enabletouch;
};

const isEnableTouchBar = (ownerInstance, instanceId) => {
  const props = getProps(ownerInstance, instanceId);
  return !!props.enabletouchbar;
};

const isReverseMode = (ownerInstance, instanceId) => {
  const props = getProps(ownerInstance, instanceId);
  return !!props.reverse && !isRangeMode(ownerInstance, instanceId);
};

const queryComponent = (ownerInstance, instanceId, selector) => {
  const root = ownerInstance.selectComponent(`#${instanceId}`);
  return selector ? root.selectComponent(selector) : root;
};
const queryComponentAll = (ownerInstance, instanceId, selector) => {
  const root = queryComponent(ownerInstance, instanceId);
  return selector ? root.selectAllComponents(selector) : [];
};

const getThumbWidth = (ownerInstance, instanceId, type = 'width') => {
  const thumbStart = queryComponent(ownerInstance, instanceId, '.rayui-slider-thumb-start');
  const thumbStartWidth = thumbStart.getBoundingClientRect()[type];
  if (thumbStartWidth) {
    return thumbStartWidth;
  }
  const thumbEnd = queryComponent(ownerInstance, instanceId, '.rayui-slider-thumb-end');
  const thumbEndWidth = thumbEnd.getBoundingClientRect()[type];
  if (thumbEndWidth) {
    return thumbEndWidth;
  }
};

function updateSlider(ownerInstance, instanceId) {
  const ost = getOst(ownerInstance, instanceId);

  const ost_slider = queryComponent(ownerInstance, instanceId);
  setOstValue(ownerInstance, instanceId, 'slider', ost_slider);

  const ost_sliderRange = queryComponent(ownerInstance, instanceId, '.rayui-slider-bar');
  setOstValue(ownerInstance, instanceId, 'sliderRange', ost_sliderRange);

  if (ost_slider && ost_sliderRange) {
    const isRange = isRangeMode(ownerInstance, instanceId);
    const hideThumb = isHideThumb(ownerInstance, instanceId);
    const isVertical = isVerticalMode(ownerInstance, instanceId);
    const isRerverse = isReverseMode(ownerInstance, instanceId);
    const enableTouchBar = isEnableTouchBar(ownerInstance, instanceId);

    const thumbWidth = isVertical
      ? getThumbWidth(ownerInstance, instanceId, 'height')
      : getThumbWidth(ownerInstance, instanceId, 'width');

    const ost_thumbWidth = hideThumb ? 0 : thumbWidth;
    setOstValue(ownerInstance, instanceId, 'thumbWidth', ost_thumbWidth);

    const props = getProps(ownerInstance, instanceId);

    let ost_maxRange =
      (isVertical
        ? ost_slider.getBoundingClientRect().height
        : ost_slider.getBoundingClientRect().width) - ost_thumbWidth;
    if (!isRerverse && !isRange && !isVertical) {
      ost_maxRange -= ost_thumbWidth;
    }
    if (isVertical && isRerverse) {
      ost_maxRange -= ost_thumbWidth;
    }

    ost_maxRange += getNumber(props.maxrangeoffset, 0);
    setOstValue(ownerInstance, instanceId, 'maxRange', ost_maxRange);

    // 如果是单向，start就是 min
    const _startValueInPixels = isRange
      ? convertValueToPixels(ownerInstance, instanceId, getStart(ownerInstance, instanceId))
      : 0;

    setOstValue(ownerInstance, instanceId, '_startValueInPixels', _startValueInPixels);

    const _endValueInPixels = convertValueToPixels(
      ownerInstance,
      instanceId,
      getEnd(ownerInstance, instanceId)
    );

    setOstValue(ownerInstance, instanceId, '_endValueInPixels', _endValueInPixels);

    const reverseRange = isRerverse
      ? getMax(ownerInstance, instanceId) -
        getMin(ownerInstance, instanceId) -
        getRangeValue(ownerInstance, instanceId)
      : 0;

    setThumb(ownerInstance, instanceId, 'start', _startValueInPixels, {
      display: hideThumb ? 'none' : isRange ? 'block' : 'none', // 单向隐藏左按钮
    });

    const endValue = isRerverse
      ? convertValueToPixels(ownerInstance, instanceId, reverseRange)
      : _endValueInPixels;
    setThumb(ownerInstance, instanceId, 'end', endValue, {
      display: hideThumb ? 'none' : 'block', // 单向隐藏左按钮
    });
    setText(
      ownerInstance,
      instanceId,
      convertPixelsToValue(ownerInstance, instanceId, endValue, getStep(ownerInstance, instanceId))
    );

    setRange(
      ownerInstance,
      instanceId,
      _startValueInPixels,
      isRerverse ? convertValueToPixels(ownerInstance, instanceId, reverseRange) : _endValueInPixels
    );

    const showSteps = isShowSteps(ownerInstance, instanceId);
    if (showSteps) {
      const steps = queryComponent(ownerInstance, instanceId, '.rayui-slider-steps');
      if (steps) {
        steps.setStyle({
          padding: isVertical ? `${ost_thumbWidth / 2}px 0` : `0 ${ost_thumbWidth / 2}px`,
        });
      }
      setBarStepsWrap(ownerInstance, instanceId);
    }

    if (hideThumb || enableTouchBar) {
      const trackCurrentX =
        ost.trackCurrentX ||
        convertValueToPixels(
          ownerInstance,
          instanceId,
          isRerverse
            ? getMax(ownerInstance, instanceId) -
                getMin(ownerInstance, instanceId) -
                getEnd(ownerInstance, instanceId)
            : getEnd(ownerInstance, instanceId)
        );
      setOstValue(ownerInstance, instanceId, 'trackCurrentX', trackCurrentX);
    }

    const trackWidth = isVertical
      ? ost_slider.getBoundingClientRect().height
      : ost_slider.getBoundingClientRect().width;

    setOstValue(ownerInstance, instanceId, 'trackWidth', trackWidth);
  }
}

function renderTemplate(template, data) {
  return template.replace(/{{[\s\S]*?}}/g, slot => {
    const code = slot.replace(/{{|}}/g, '');
    let codeStr = code;
    for (const key in data) {
      codeStr = codeStr.replace(key, data[key]);
    }
    return eval(codeStr);
  });
}

function setText(ownerInstance, instanceId, text) {
  const props = getProps(ownerInstance, instanceId);
  if (props.showtext) {
    const content = props.texttemplate ? renderTemplate(props.texttemplate, { text }) : text;
    ownerInstance.callMethod('setText', { instanceId, content });
  }
}

/**
 * 百分比值转换滑动位置
 */
function convertValueToPixels(ownerInstance, instanceId, value) {
  const ost = getOst(ownerInstance, instanceId);
  return parseFloat(
    (
      (value / (getMax(ownerInstance, instanceId) - getMin(ownerInstance, instanceId))) *
      ost.maxRange
    ).toFixed(2)
  );
}

/**
 * 滑动位置转换百分比值
 */
function convertPixelsToValue(ownerInstance, instanceId, value, step = 1) {
  const ost = getOst(ownerInstance, instanceId);

  let _value = parseFloat(
    String(
      (value / ost.maxRange) *
        (getMax(ownerInstance, instanceId) - getMin(ownerInstance, instanceId))
    )
  );
  // round to step value
  _value = step > 0 ? Math.round(_value / step) * step : _value;
  return parseFloat(_value.toFixed(2));
}

function compileCalcStyle(ownerInstance, instanceId, valueInPixels) {
  const calcMap = getThumbStyleCalc(ownerInstance, instanceId);
  const style = {};
  if (calcMap) {
    for (const key in calcMap) {
      const str = calcMap[key];
      const code = renderTemplate(str, {
        text: convertPixelsToValue(
          ownerInstance,
          instanceId,
          valueInPixels,
          getStep(ownerInstance, instanceId)
        ),
      });
      style[key] = code;
    }
  }
  return style;
}

function setThumb(ownerInstance, instanceId, thumbName, valueInPixels, style) {
  const isVertical = isVerticalMode(ownerInstance, instanceId);

  const thumbs = queryComponentAll(ownerInstance, instanceId, '.rayui-slider-thumb');
  const renderThumbs = queryComponentAll(ownerInstance, instanceId, '.rayui-slider-thumb-render');

  const calcStyle = compileCalcStyle(ownerInstance, instanceId, valueInPixels);
  thumbs.forEach(thumb => {
    if (thumb.getDataset().name === thumbName) {
      if (isVertical) {
        thumb.setStyle({
          ...(style || {}),
          top: `${valueInPixels - 3}px`,
        });
      } else {
        thumb.setStyle({
          ...(style || {}),
          left: `${valueInPixels - 3}px`,
        });
      }
    }
  });
  renderThumbs.forEach(thumb => {
    if (thumb.getDataset().name === thumbName) {
      thumb.setStyle({
        ...(calcStyle || {}),
      });
    }
  });
}

function updateThumbZIndex(ownerInstance, instanceId) {
  const isRange = isRangeMode(ownerInstance, instanceId);
  if (!isRange) return;
  const start = getStart(ownerInstance, instanceId);
  const end = getEnd(ownerInstance, instanceId);
  const min = getMin(ownerInstance, instanceId);
  const max = getMax(ownerInstance, instanceId);

  const mid = Math.floor((max - min) / 2);

  // 左右重叠，右在上
  if (end < mid) {
    const start = queryComponent(ownerInstance, instanceId, '.rayui-slider-thumb-start');
    const end = queryComponent(ownerInstance, instanceId, '.rayui-slider-thumb-end');

    if (start && end) {
      start.setStyle({
        zIndex: 10,
      });
      end.setStyle({
        zIndex: 11,
      });
    }
  }
  // 左右重叠，左在上
  if (start > mid) {
    const start = queryComponent(ownerInstance, instanceId, '.rayui-slider-thumb-start');
    const end = queryComponent(ownerInstance, instanceId, '.rayui-slider-thumb-end');

    if (start && end) {
      start.setStyle({
        zIndex: 11,
      });
      end.setStyle({
        zIndex: 10,
      });
    }
  }
}

function setBarStepsWrap(ownerInstance, instanceId) {
  const ost_slider = queryComponent(ownerInstance, instanceId);
  const isVertical = isVerticalMode(ownerInstance, instanceId);
  const wrap = queryComponent(ownerInstance, instanceId, '.rayui-slider-bar-steps_wrap');

  let length = 0;
  if (isVertical) {
    length = ost_slider.getBoundingClientRect().height;
  } else {
    length = ost_slider.getBoundingClientRect().width;
  }

  wrap.setStyle({
    [isVertical ? 'height' : 'width']: `${length}px`,
  });
}

function setRange(ownerInstance, instanceId, start, end) {
  const ost = getOst(ownerInstance, instanceId);
  const isVertical = isVerticalMode(ownerInstance, instanceId);
  const isReverse = isReverseMode(ownerInstance, instanceId);

  const maxThumb = Math.max(start, end);
  const minThumb = Math.min(start, end);
  const width = Math.abs(maxThumb - minThumb);
  const thumbWidth = ost.thumbWidth;

  const props = getProps(ownerInstance, instanceId);

  const barPad = props.barpad;

  let rangeWidth = width + thumbWidth + barPad;
  if (isReverse) {
    rangeWidth = ost.trackWidth - rangeWidth;
  }

  ost.sliderRange.setStyle({
    [isVertical ? (isReverse ? 'bottom' : 'top') : isReverse ? 'right' : 'left']: `${minThumb -
      barPad / 2}px`,
    [isVertical ? 'height' : 'width']: `${rangeWidth}px`,
  });
}

function setBoundries(ownerInstance, instanceId, value) {
  const isReverse = isReverseMode(ownerInstance, instanceId);
  let _value = typeof value === 'number' ? value : parseFloat(value);

  _value = _value < 0 ? 0 : value; // MIN

  return _value > getMax(ownerInstance, instanceId) ? getMax(ownerInstance, instanceId) : _value; // MAX
}

const handleMouseDown = instanceId => (event, ownerInstance) => {
  const target = event.instance;
  const thumbId = target.getDataset().name;
  const isVertical = isVerticalMode(ownerInstance, instanceId);
  onStart(event, ownerInstance, instanceId);

  const ost = getOst(ownerInstance, instanceId);

  // allow move
  if (THUMBS.includes(thumbId)) {
    setOstValue(ownerInstance, instanceId, 'currentThumbName', thumbId);
    setOstValue(ownerInstance, instanceId, 'currentThumb', target);
    const startX = isVertical ? event.touches[0].pageY : event.touches[0].pageX;

    const currentThumbPositionX =
      startX -
      (isVertical
        ? ost.currentThumb.getBoundingClientRect().top
        : ost.currentThumb.getBoundingClientRect().left);

    setOstValue(ownerInstance, instanceId, 'currentThumbPositionX', currentThumbPositionX);

    toggleActiveThumb(ownerInstance, instanceId, true);

    setOstValue(ownerInstance, instanceId, 'isMoving', true);
  } else {
    return false;
  }
};

const handleTrackMouseDown = instanceId => (event, ownerInstance) => {
  const isRange = isRangeMode(ownerInstance, instanceId);
  const hideThumb = isHideThumb(ownerInstance, instanceId);
  const enableTouchBar = isEnableTouchBar(ownerInstance, instanceId);

  const ost = getOst(ownerInstance, instanceId);
  const isVertical = isVerticalMode(ownerInstance, instanceId);
  const startX = isVertical ? event.touches[0].clientY : event.touches[0].pageX;

  const trackStartX =
    startX -
    (isVertical ? ost.slider.getBoundingClientRect().top : ost.slider.getBoundingClientRect().left);
  setOstValue(ownerInstance, instanceId, 'trackStartX', trackStartX);

  onStart(event, ownerInstance, instanceId);
  setOstValue(ownerInstance, instanceId, 'currentThumbName', 'end');

  if (!isRange && !hideThumb && isEnableTouch(ownerInstance, instanceId) && !enableTouchBar) {
    const thumbEnd = queryComponent(ownerInstance, instanceId, '.rayui-slider-thumb-end');

    setOstValue(ownerInstance, instanceId, 'currentThumb', thumbEnd);

    const offset = isVertical
      ? thumbEnd.getBoundingClientRect().height / 2
      : thumbEnd.getBoundingClientRect().width / 2;

    if (thumbEnd) {
      let moveX = ost.trackStartX - offset;

      let moveValue = convertPixelsToValue(
        ownerInstance,
        instanceId,
        moveX,
        getStep(ownerInstance, instanceId)
      );
      // lock the thumb within the bounaries
      moveValue = setBoundries(ownerInstance, instanceId, moveValue);

      setOstValue(ownerInstance, instanceId, '_start', 0);
      setOstValue(ownerInstance, instanceId, '_end', moveValue);

      moveX = convertValueToPixels(ownerInstance, instanceId, moveValue);

      onChange(ownerInstance, instanceId, 'end');
      setThumb(ownerInstance, instanceId, 'end', moveX);
      setRange(ownerInstance, instanceId, 0, moveX);
      setOstValue(ownerInstance, instanceId, 'isMoving', true);

      const currentThumbPositionX =
        startX -
        (isVertical ? thumbEnd.getBoundingClientRect().top : thumbEnd.getBoundingClientRect().left);
      setOstValue(ownerInstance, instanceId, 'currentThumbPositionX', currentThumbPositionX);
    }
  }
};

function toggleActiveThumb(ownerInstance, instanceId, toggle = true) {
  const ost = getOst(ownerInstance, instanceId);
}

const onMouseMove = instanceId => (event, ownerInstance) => {
  const isVertical = isVerticalMode(ownerInstance, instanceId);
  const isReverse = isReverseMode(ownerInstance, instanceId);
  const ost = getOst(ownerInstance, instanceId);
  const hideThumb = isHideThumb(ownerInstance, instanceId);
  const enableTouchBar = isEnableTouchBar(ownerInstance, instanceId);
  // track mouse mouve only when toggle true
  if (ost.isMoving) {
    const currentX = isVertical ? event.touches[0].pageY : event.touches[0].pageX;
    let moveX =
      currentX -
      ost.currentThumbPositionX -
      (isVertical
        ? ost.slider.getBoundingClientRect().top
        : ost.slider.getBoundingClientRect().left);

    let moveValue = convertPixelsToValue(
      ownerInstance,
      instanceId,
      moveX,
      getStep(ownerInstance, instanceId)
    );
    // lock the thumb within the bounaries
    moveValue = setBoundries(ownerInstance, instanceId, moveValue);
    moveX = convertValueToPixels(ownerInstance, instanceId, moveValue);

    const props = getProps(ownerInstance, instanceId);

    switch (ost.currentThumbName) {
      case 'start':
        const _endValueInPixels = ost._endValueInPixels;
        // if (moveX > _endValueInPixels) return false;
        if (props.startmin && moveValue < props.startmin) return false;
        if (props.startmax && moveValue > props.startmax) return false;
        setOstValue(ownerInstance, instanceId, '_startValueInPixels', moveX);
        setOstValue(ownerInstance, instanceId, '_start', moveValue);
        onChange(ownerInstance, instanceId, 'start');
        break;
      case 'end':
        const _startValueInPixels = ost._startValueInPixels;
        // if (moveX < _startValueInPixels) return false;
        if (props.endmin && moveValue < props.endmin) return false;
        if (props.endmax && moveValue > props.endmax) return false;
        setOstValue(ownerInstance, instanceId, '_endValueInPixels', moveX);
        setOstValue(ownerInstance, instanceId, '_end', moveValue);
        onChange(ownerInstance, instanceId, 'end');
        break;
    }
    const _ost_ = getOst(ownerInstance, instanceId);
    setThumb(ownerInstance, instanceId, _ost_.currentThumbName, moveX);
    setRange(ownerInstance, instanceId, _ost_._endValueInPixels, _ost_._startValueInPixels);
  } else if (hideThumb || enableTouchBar) {
    // hideThumb mode
    const currentX = isVertical
      ? event.touches[0].clientY - ost.slider.getBoundingClientRect().top
      : event.touches[0].pageX;

    const delta = currentX - ost.trackStartX;
    const nextX = ost.trackCurrentX + delta;

    const trackNextX = nextX;
    setOstValue(ownerInstance, instanceId, 'trackNextX', trackNextX);
    if (trackNextX < 0) {
      setOstValue(ownerInstance, instanceId, 'trackNextX', 0);
    }
    if (trackNextX > ost.trackWidth) {
      setOstValue(ownerInstance, instanceId, 'trackNextX', ost.trackWidth);
    }

    let moveX = ost.trackNextX;

    let moveValue = convertPixelsToValue(
      ownerInstance,
      instanceId,
      moveX,
      getStep(ownerInstance, instanceId)
    );
    // lock the thumb within the bounaries
    moveValue = setBoundries(ownerInstance, instanceId, moveValue);

    setOstValue(ownerInstance, instanceId, '_start', 0);
    setOstValue(ownerInstance, instanceId, '_end', moveValue);

    moveX = convertValueToPixels(ownerInstance, instanceId, moveValue);

    setThumb(ownerInstance, instanceId, ost.currentThumbName, moveX);
    setRange(ownerInstance, instanceId, 0, moveX);
    onChange(ownerInstance, instanceId, 'end');

    return false;
  }
};

const limit = (number, min, max) => Math.min(max, Math.max(min, number));

const hsvToRgb = (h = 0, s = 0, v = 0, a = 1) => {
  const hsb = [h, s, v].map((bit, i) => {
    let _bit = bit;
    if (_bit) _bit = parseFloat(_bit.toString());
    if (i === 0) {
      _bit %= 360;
      const res = _bit < 0 ? _bit + 360 : _bit;
      return res;
    }
    return limit(Math.round(bit), 0, 100);
  });

  const br = Math.round((hsb[2] / 100) * 255);
  if (hsb[1] === 0) return [br, br, br];

  const hue = hsb[0];
  const f = hue % 60;
  const p = Math.round(((hsb[2] * (100 - hsb[1])) / 10000) * 255);
  const q = Math.round(((hsb[2] * (6000 - hsb[1] * f)) / 600000) * 255);
  const t = Math.round(((hsb[2] * (6000 - hsb[1] * (60 - f))) / 600000) * 255);

  let rgb;
  switch (Math.floor(hue / 60)) {
    case 0:
      rgb = [br, t, p];
      break;
    case 1:
      rgb = [q, br, p];
      break;
    case 2:
      rgb = [p, br, t];
      break;
    case 3:
      rgb = [p, q, br];
      break;
    case 4:
      rgb = [t, p, br];
      break;
    default:
      rgb = [br, p, q];
      break;
  }
  if (a !== undefined) {
    rgb.push(limit(Number(a), 0, 1));
  }
  return rgb;
};

const updateThumbBg = ({ ownerInstance, instanceId }) => {
  // !!! thumb 内部颜色填充 ==== start
  // const { hue, closed } = getProps(ownerInstance, instanceId);
  const isRerverse = isReverseMode(ownerInstance, instanceId);
  const thumbEnd = ownerInstance.selectComponent('.rayui-slider-thumb-end-render');
  const reverseRange = isRerverse
    ? getMax(ownerInstance, instanceId) - getRangeValue(ownerInstance, instanceId)
    : 0;
  const end = isRerverse ? reverseRange : getEnd(ownerInstance, instanceId);
  // const color = hsvToRgb(hue, Math.min(100, Math.round(end / 10)), 100);
  // const bg = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  // thumbEnd.setStyle({ background: closed ? '#000' : bg });
  // !!! thumb 内部颜色填充 ==== end
};

const onChange = (ownerInstance, instanceId, position) => {
  const ost = getOst(ownerInstance, instanceId);
  const isRerverse = isReverseMode(ownerInstance, instanceId);
  const reverseRange = isRerverse
    ? getMax(ownerInstance, instanceId) - getRangeValue(ownerInstance, instanceId)
    : 0;

  const nextStart = getStart(ownerInstance, instanceId);
  const nextEnd = isRerverse ? reverseRange : getEnd(ownerInstance, instanceId);
  const nextRange = isRerverse ? reverseRange : getRangeValue(ownerInstance, instanceId);

  // 如果start、end、range 都没变
  if (nextStart === ost._last_start && nextEnd === ost._last_end && nextRange === ost._last_range) {
    return;
  }
  setText(ownerInstance, instanceId, nextEnd);

  setOstValue(ownerInstance, instanceId, '_last_start', nextStart);
  setOstValue(ownerInstance, instanceId, '_last_end', nextEnd);
  setOstValue(ownerInstance, instanceId, '_last_range', nextRange);

  updateThumbBg({
    ownerInstance,
    instanceId,
  });

  // publish
  ownerInstance.triggerEvent('move', {
    instanceId,
    start: nextStart,
    end: nextEnd,
    range: nextRange,
    position,
  });
};

const onEnd = (event, ownerInstance, instanceId) => {
  const target = event.instance;
  const isRerverse = isReverseMode(ownerInstance, instanceId);
  const reverseRange = isRerverse
    ? getMax(ownerInstance, instanceId) - getRangeValue(ownerInstance, instanceId)
    : 0;

  const nextStart = getStart(ownerInstance, instanceId);
  const nextEnd = isRerverse ? reverseRange : getEnd(ownerInstance, instanceId);
  const nextRange = isRerverse ? reverseRange : getRangeValue(ownerInstance, instanceId);
  setText(ownerInstance, instanceId, nextEnd);

  setOstValue(ownerInstance, instanceId, '_last_start', null);
  setOstValue(ownerInstance, instanceId, '_last_end', null);
  setOstValue(ownerInstance, instanceId, '_last_range', null);
  updateThumbBg({
    ownerInstance,
    instanceId,
  });

  // publish
  ownerInstance.triggerEvent('end', {
    instanceId,
    start: nextStart,
    end: nextEnd,
    range: nextRange,
    position: target.getDataset().name || 'end',
  });
};
const onStart = (event, ownerInstance, instanceId) => {
  const target = event.instance;
  const isRerverse = isReverseMode(ownerInstance, instanceId);
  const reverseRange = isRerverse
    ? getMax(ownerInstance, instanceId) - getRangeValue(ownerInstance, instanceId)
    : 0;

  const nextStart = getStart(ownerInstance, instanceId);
  const nextEnd = isRerverse ? reverseRange : getEnd(ownerInstance, instanceId);
  const nextRange = isRerverse ? reverseRange : getRangeValue(ownerInstance, instanceId);

  setText(ownerInstance, instanceId, nextEnd);
  updateThumbBg({
    ownerInstance,
    instanceId,
  });

  // publish
  ownerInstance.triggerEvent('start', {
    instanceId,
    start: nextStart,
    end: nextEnd,
    range: nextRange,
    position: target.getDataset().name || 'end',
  });
};

const onMouseUp = instanceId => (event, ownerInstance) => {
  const ost = getOst(ownerInstance, instanceId);

  setOstValue(ownerInstance, instanceId, 'isMoving', false);
  toggleActiveThumb(ownerInstance, instanceId, false);
  onEnd(event, ownerInstance, instanceId);

  updateThumbZIndex(ownerInstance, instanceId);

  return false;
};

const onTrackMouseUp = instanceId => (event, ownerInstance) => {
  const hideThumb = isHideThumb(ownerInstance, instanceId);
  const ost = getOst(ownerInstance, instanceId);
  setOstValue(ownerInstance, instanceId, 'trackCurrentX', ost.trackNextX);
  onEnd(event, ownerInstance, instanceId);
  setOstValue(ownerInstance, instanceId, 'isMoving', false);
  updateThumbZIndex(ownerInstance, instanceId);
};

module.exports = {
  startPropObserver: createPropObserver('start'),
  endPropObserver: createPropObserver('end'),
  watchstartPropObserver: createPropObserver('watchstart'),
  watchenddPropObserver: createPropObserver('watchend'),
  handleMouseDown,
  onMouseMove,
  onMouseUp,
  onTrackMouseUp,
  handleTrackMouseDown,
};
