import _ from 'lodash-es';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';
import { getDevProperty, saveDevProperty } from '@ray-js/ray';
import { getCachedLaunchOptions } from '@/api/getCachedLaunchOptions';
import { DEV_PROPERTIES } from '@/constant';
import { utils } from '@ray-js/panel-sdk';
import { getZigbeeLocalIds, ResGetZigbeeLocalIds } from '@/api/getZigbeeLocalIds';
import { getGroupDevices, GroupDevices } from '@/api/getGroupDevices';

type Group = {
  localIds: ResGetZigbeeLocalIds['locals'];
  groupDevices: {
    [categoryCode: string]: GroupDevices;
  };
  groupIcons: Array<{ code: string; value: string }>;
};

const DEFAULT_GROUP_ICONS = [
  { code: 'switch_1', value: '0' },
  { code: 'switch_2', value: '0' },
  { code: 'switch_3', value: '0' },
  { code: 'switch_4', value: '0' },
  { code: 'switch_5', value: '0' },
  { code: 'switch_6', value: '0' },
  { code: 'switch_7', value: '0' },
  { code: 'switch_8', value: '0' },
];

/**
 * Slice
 */
const groupSlice = createSlice({
  name: 'group',
  initialState: {
    localIds: [],
    groupDevices: {},
    groupIcons: DEFAULT_GROUP_ICONS,
  } as Group,
  reducers: {
    initLocalIds(state, action: PayloadAction<{ localIds: Group['localIds'] }>) {
      state.localIds = action.payload.localIds;
    },
    initGroupDevices(state, action: PayloadAction<{ groupDevices: Group['groupDevices'] }>) {
      state.groupDevices = action.payload.groupDevices;
    },
    updateGroupDevices(state, action: PayloadAction<{ groupDevices: Group['groupDevices'] }>) {
      state.groupDevices = action.payload.groupDevices;
    },
    initGroupIcons(state, action: PayloadAction<{ groupIcons: Group['groupIcons'] }>) {
      state.groupIcons = action.payload.groupIcons;
    },
    updateGroupIcons(state, action: PayloadAction<{ groupIcons: Group['groupIcons'] }>) {
      state.groupIcons = action.payload.groupIcons;
    },
  },
});

/**
 * Actions
 */

export const { initGroupIcons, updateGroupIcons } = groupSlice.actions;

const { deviceId } = getCachedLaunchOptions().query;

/**
 * Effects
 */
export const getZigbeeLocalIdAsync = createAsyncThunk(
  'group/getZigbeeLocalIdAsync',
  async (_, thunkApi) => {
    const res = await getZigbeeLocalIds();
    console.log('=== res localIds', res);
    thunkApi.dispatch(groupSlice.actions.initLocalIds({ localIds: res.locals }));
    const groupDevices = await Promise.all(
      res.locals.map(local => getGroupDevices(local.categoryCode))
    );
    const groupDevicesMap = res.locals.reduce((acc, local, index) => {
      acc[local.categoryCode] = groupDevices[index];
      return acc;
    }, {});
    thunkApi.dispatch(groupSlice.actions.initGroupDevices({ groupDevices: groupDevicesMap }));
    return res;
  }
);

export const updateGroupDevicesAsync = createAsyncThunk<boolean, string>(
  'group/updateGroupDevicesAsync',
  async (categoryCode, thunkApi) => {
    const curGroupDevices = (thunkApi.getState() as ReduxState).group.groupDevices;
    const groupDevices = await getGroupDevices(categoryCode);
    const newGroupDevices = {
      ...curGroupDevices,
      [categoryCode]: groupDevices,
    };
    thunkApi.dispatch(groupSlice.actions.updateGroupDevices({ groupDevices: newGroupDevices }));
    return true;
  }
);

export const getGroupIconsAsync = createAsyncThunk<Group['groupIcons']>(
  'group/getGroupIconsAsync',
  async (__, thunkApi) => {
    const res = (await getDevProperty({
      devId: deviceId,
      code: DEV_PROPERTIES.GROUP_ICONS,
      bizType: 0,
    })) as unknown as Group['groupIcons'];
    const groupIcons =
      !res || res.length === 0
        ? DEFAULT_GROUP_ICONS
        : (utils.parseJSON(res?.[0]?.value) as unknown as Group['groupIcons']);
    thunkApi.dispatch(groupSlice.actions.initGroupIcons({ groupIcons }));
    return res;
  }
);

export const updateGroupIconsAsync = createAsyncThunk<boolean, { code: string; value: string }>(
  'group/updateGroupIconsAsync',
  async (param, thunkApi) => {
    const state = thunkApi.getState() as ReduxState;
    const { code, value } = param;
    const groupIcons = _.cloneDeep(state.group.groupIcons) as Group['groupIcons'];
    const targetGroup = groupIcons.find(item => item.code === code);
    if (!targetGroup) {
      return false;
    }
    targetGroup.value = value;
    const res = await saveDevProperty({
      devId: deviceId,
      bizType: 0,
      propertyList: JSON.stringify([{ code: DEV_PROPERTIES.GROUP_ICONS, value: groupIcons }]),
    });
    thunkApi.dispatch(groupSlice.actions.updateGroupIcons({ groupIcons }));
    return res;
  }
);

/**
 * Selectors
 */
export const selectLocalIds = (state: ReduxState) => state.group.localIds;
export const selectGroupIcons = (state: ReduxState) => state.group.groupIcons;
export const selectGroupDevices = (state: ReduxState) => state.group.groupDevices;
export const selectBindGroupDevices = (state: ReduxState, categoryCode: string) => {
  return state.group.groupDevices?.[categoryCode]?.filter(item => item.checked) ?? [];
};

export default groupSlice.reducer;
