import { useSelector as useSelectorBase, shallowEqual } from 'react-redux';
import { actions as component } from './actions/component';
import { store, ReduxState } from './store';

const actions = {
  component,
};
export { actions, store };

export function useSelector<TSelected>(
  selector: (state: ReduxState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelectorBase<ReduxState, TSelected>(selector, equalityFn || shallowEqual);
}
