import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ReduxState, AppDispatch } from './index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
