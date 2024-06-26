import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { hideLoading } from '@ray-js/ray';
import {
  BindTapToRunRules,
  TapToRunRules,
} from '@ray-js/panel-sdk/lib/sdm/abilities/tapToRun/type';
import { ReduxState } from '@/redux';
import { devices } from '@/devices';

type BindParams = Parameters<typeof devices.common.model.abilities.tapToRun.bind>[0];
type UnbindParams = Parameters<typeof devices.common.model.abilities.tapToRun.unbind>[0];

type ReduxScene = {
  bindTapToRunRules: BindTapToRunRules;
  tapToRunRules: TapToRunRules;
};

const sceneSlice = createSlice({
  name: 'scene',
  initialState: {
    bindTapToRunRules: [],
    tapToRunRules: [],
  } as ReduxScene,
  reducers: {
    initBindTapToRunRules: (state, action) => {
      state.bindTapToRunRules = action.payload;
    },
    initTapToRunRules: (state, action) => {
      state.tapToRunRules = action.payload;
    },
    updateBindTapToRunRules: (state, action) => {
      state.bindTapToRunRules = action.payload;
    },
    updateTapToRunRules: (state, action) => {
      state.tapToRunRules = action.payload;
    },
  },
});

/**
 * Actions
 */
export const {
  initBindTapToRunRules,
  initTapToRunRules,
  updateBindTapToRunRules,
  updateTapToRunRules,
} = sceneSlice.actions;

/**
 * Effects
 */
export const getBindTapToRunRules = createAsyncThunk<BindTapToRunRules>(
  'scene/getBindTapToRunRules',
  async (_, thunkApi) => {
    try {
      const data = await devices.common.model.abilities.tapToRun.getBindTapToRunRules();
      thunkApi.dispatch(sceneSlice.actions.initBindTapToRunRules(data));
      return data;
    } catch (error) {
      return [];
    }
  }
);

export const updateBindTapToRunRulesAsync = createAsyncThunk<BindTapToRunRules>(
  'scene/updateBindTapToRunRulesAsync',
  async (_, thunkApi) => {
    const data = await devices.common.model.abilities.tapToRun.getBindTapToRunRules();
    thunkApi.dispatch(sceneSlice.actions.updateBindTapToRunRules(data));
    hideLoading();
    return data;
  }
);

export const getTapToRunRulesAsync = createAsyncThunk<TapToRunRules>(
  'scene/getTapToRunRulesAsync',
  async (_, thunkApi) => {
    const data = await devices.common.model.abilities.tapToRun.getTapToRunRules();
    thunkApi.dispatch(sceneSlice.actions.initTapToRunRules(data));
    return data;
  }
);

export const updateTapToRunRulesAsync = createAsyncThunk<TapToRunRules>(
  'scene/updateTapToRunRulesAsync',
  async (_, thunkApi) => {
    const data = await devices.common.model.abilities.tapToRun.getTapToRunRules();
    thunkApi.dispatch(sceneSlice.actions.updateTapToRunRules(data));
    return data;
  }
);

export const bindAsync = createAsyncThunk<boolean, BindParams>(
  'scene/bindAsync',
  async (params, thunkApi) => {
    await devices.common.model.abilities.tapToRun.bind({
      dpId: params.dpId,
      dpValue: params.dpValue,
      ruleId: params.ruleId,
    });
    thunkApi.dispatch(updateBindTapToRunRulesAsync());
    return true;
  }
);

export const unbindAsync = createAsyncThunk<boolean, UnbindParams>(
  'scene/unbindAsync',
  async (params, thunkApi) => {
    await devices.common.model.abilities.tapToRun.unbind({
      bindId: params.bindId,
    });
    thunkApi.dispatch(updateBindTapToRunRulesAsync());
    return true;
  }
);

/**
 * Selectors
 */
export const selectBindTapToRunRules = (state: ReduxState) => state.scene.bindTapToRunRules;
export const selectTapToRunRules = (state: ReduxState) => state.scene.tapToRunRules;

export default sceneSlice.reducer;
