import { shallowEqual, useSelector as useSelectorBase } from 'react-redux';
import { actions as CommonActions } from './modules/common';
import { ReduxState, store } from './store';

const actions = {
  common: CommonActions,
};

export { actions, store };

export function useSelector<TSelected>(
  selector: (state: ReduxState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelectorBase<ReduxState, TSelected>(selector, equalityFn || shallowEqual);
}
