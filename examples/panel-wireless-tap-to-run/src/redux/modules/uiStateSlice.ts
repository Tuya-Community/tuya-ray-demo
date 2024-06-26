import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { home } from '@ray-js/ray';
import { PromisifyTTT } from '@ray-js/panel-sdk';
import { ReduxState } from '..';

// @ts-expect-error
// eslint-disable-next-line prefer-destructuring
const getCurrentHomeInfo: PromisifyTTT<typeof home.getCurrentHomeInfo> = home.getCurrentHomeInfo;

/**
 * Slice
 */
const uiStateSlice = createSlice({
  name: 'uiState',
  initialState: {
    /**
     * 必要的数据是否都已经加载完毕了
     */
    isInitialized: false,
    /**
     * 是否为管理员
     */
    isAdmin: true,
  },
  reducers: {
    setIsInitialized(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },
    setIsAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
  },
});

/**
 * Actions
 */

export const { setIsInitialized, setIsAdmin } = uiStateSlice.actions;

/**
 * Effects
 */

export const getCurrentHomeInfoAsync = createAsyncThunk(
  'scene/getCurrentHomeInfoAsync',
  async (_, thunkApi) => {
    const res = await getCurrentHomeInfo({});
    thunkApi.dispatch(uiStateSlice.actions.setIsAdmin(res.admin));
    return res;
  }
);

/**
 * Selectors
 */
export const selectIsInitialized = (state: ReduxState) => state.uiState.isInitialized;
export const selectIsAdmin = (state: ReduxState) => state.uiState.isAdmin;

export default uiStateSlice.reducer;
