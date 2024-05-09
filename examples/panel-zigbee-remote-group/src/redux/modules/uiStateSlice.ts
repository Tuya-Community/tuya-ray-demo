import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { home } from '@ray-js/ray';
import { PromisifyTTT } from '@ray-js/panel-sdk';
import { getOssUrl } from '@/api/getOssUrl';
import { ReduxState } from '..';
import { coverList } from '@/constant';

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
     * 页面是否可以滚动
     */
    isPageScrollable: true,
    /**
     * 是否为管理员
     */
    isAdmin: true,
    /**
     * 静态资源地址
     */
    ossUrl: '',
  },
  reducers: {
    setIsInitialized(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },
    setPageScrollable(state, action: PayloadAction<boolean>) {
      state.isPageScrollable = action.payload;
    },
    setIsAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
    setOssUrl(state, action: PayloadAction<string>) {
      state.ossUrl = action.payload;
    },
  },
});

/**
 * Actions
 */

export const { setIsInitialized, setPageScrollable, setIsAdmin } = uiStateSlice.actions;

/**
 * Effects
 */
export const getCurrentHomeInfoAsync = createAsyncThunk(
  'uiState/getCurrentHomeInfoAsync',
  async (_, thunkApi) => {
    const res = await getCurrentHomeInfo({});
    thunkApi.dispatch(uiStateSlice.actions.setIsAdmin(res.admin));
    return res;
  }
);

export const getOssUrlAsync = createAsyncThunk('uiState/getOssUrl', async (_, thunkApi) => {
  const res = await getOssUrl();
  thunkApi.dispatch(uiStateSlice.actions.setOssUrl(res));
  return res;
});

/**
 * Selectors
 */
export const selectIsInitialized = (state: ReduxState) => state.uiState.isInitialized;
export const selectIsPageScrollable = (state: ReduxState) => state.uiState.isPageScrollable;
export const selectIsAdmin = (state: ReduxState) => state.uiState.isAdmin;
export const selectCoverList = (state: ReduxState) =>
  coverList.map(d => `${state.uiState.ossUrl}${d}`);

export default uiStateSlice.reducer;
