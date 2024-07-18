import { RootState } from '@models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StaticPrefix = string;
type InitStaticPrefixPayload = StaticPrefix;

/**
 * Slice
 */
const staticPrefixSlice = createSlice({
  name: 'staticPrefix',
  initialState: '' as StaticPrefix,
  reducers: {
    initStaticPrefix(state, action: PayloadAction<InitStaticPrefixPayload>) {
      return action.payload;
    },
  },
});

/**
 * Actions
 */
export const { initStaticPrefix } = staticPrefixSlice.actions;

/**
 * Selectors
 */
export const selectStaticPrefix = (state: RootState) => state.staticPrefix;

export default staticPrefixSlice.reducer;
