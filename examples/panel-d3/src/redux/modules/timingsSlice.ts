import {
  addTimingApi,
  fetchTimingsApi,
  updateTimingStatusApi,
  updateTimingApi,
  removeTimingApi,
} from '@/api';
import { createAsyncThunk, createEntityAdapter, createSlice, EntityId } from '@reduxjs/toolkit';
import { DEFAULT_TIMING_CATEGORY } from '@/constant';
import moment from 'moment';
import { ReduxState } from '..';

type Timer = ty.device.TimerModel & {
  time: string;
  id: EntityId;
};

const timingsAdapter = createEntityAdapter<Timer>({
  sortComparer: (a, b) => (moment(a.time, 'HH:mm').isBefore(moment(b.time, 'HH:mm')) ? -1 : 1),
});

export const fetchTimings = createAsyncThunk<Timer[]>('timings/fetchTimings', async () => {
  const { timers } = (await fetchTimingsApi()) as { timers: Timer[] };

  return timers as unknown as Timer[];
});

export const addTiming = createAsyncThunk<Timer, any>('timings/addTiming', async param => {
  const defaultParams = {
    isAppPush: false,
  };
  const params = { ...defaultParams, ...param };
  const { timerId } = (await addTimingApi(DEFAULT_TIMING_CATEGORY, params)) as {
    timerId: string;
  };
  return { id: timerId, status: true, ...params };
});

export const updateTiming = createAsyncThunk(
  'timings/updateTiming',
  async (param: any & { id: EntityId }) => {
    const defaultParams = {
      isAppPush: false,
    };
    const params = { ...defaultParams, ...param, timerId: param.id };
    await updateTimingApi(params);
    return { id: param.id, changes: param };
  }
);

export const deleteTiming = createAsyncThunk<EntityId, EntityId>(
  'timings/deleteTiming',
  async id => {
    await removeTimingApi({ timerId: String(id) });
    return id;
  }
);

export const updateTimingStatus = createAsyncThunk(
  'timings/updateTimingStatus',
  async ({ id, status }: { id: EntityId; status: boolean }) => {
    await updateTimingStatusApi({ timerId: String(id), status });
    return { id, changes: { status: status ?? false } };
  }
);

/**
 * Slice
 */
const timingsSlice = createSlice({
  name: 'timings',
  initialState: timingsAdapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTimings.fulfilled, (state, action) => {
      timingsAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(addTiming.fulfilled, (state, action) => {
      timingsAdapter.upsertOne(state, action.payload);
    });
    builder.addCase(deleteTiming.fulfilled, (state, action) => {
      timingsAdapter.removeOne(state, action.payload);
    });
    builder.addCase(updateTimingStatus.fulfilled, (state, action) => {
      timingsAdapter.updateOne(state, action.payload);
    });
    builder.addCase(updateTiming.fulfilled, (state, action) => {
      timingsAdapter.updateOne(state, action.payload);
    });
  },
});

/**
 * Selectors
 */
const selectors = timingsAdapter.getSelectors((state: ReduxState) => state.timings);
export const {
  selectIds: selectAllTimingIds,
  selectAll: selectAllTimings,
  selectTotal: selectTimingsTotal,
  selectById: selectTimingById,
  selectEntities: selectTimingEntities,
} = selectors;

export default timingsSlice.reducer;
