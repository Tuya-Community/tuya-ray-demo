import { shallowEqual, useSelector as useSelectorBase } from 'react-redux';

import { actions as CommonActions } from './actions/common';
import { ReduxState, store } from './store';
import dpUtils from './putDpData';

const actions = {
  common: CommonActions,
};

export { actions, store, dpUtils };

export function useSelector<TSelected>(
  selector: (state: ReduxState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelectorBase<ReduxState, TSelected>(selector, equalityFn || shallowEqual);
}
