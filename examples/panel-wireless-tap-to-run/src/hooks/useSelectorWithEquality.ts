import { shallowEqual, useSelector } from 'react-redux';
import { ReduxState } from '@/redux';

export function useSelectorWithEquality<TSelected>(
  selector: (state: ReduxState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelector<ReduxState, TSelected>(selector, equalityFn || shallowEqual);
}
