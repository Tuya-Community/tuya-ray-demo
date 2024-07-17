import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@models';
import { getMultipleMapFiles } from '@/hybrid-mini-robot-map/api';
import moment from 'moment';
import Strings from '@/hybrid-mini-robot-map/i18n';
import { readJsonFile } from '@/hybrid-mini-robot-map/utils';
import { Utils } from 'tuya-panel-kit';
import { translateFileName } from '@utils';

const historyMapsAdapter = createEntityAdapter<HistoryMap>({
  selectId: (historyMap: HistoryMap) => historyMap.filePathKey,
});

export const fetchHistoryMaps = createAsyncThunk<HistoryMap[], void, { state: RootState }>(
  'historyMaps/fetchHistoryMaps',
  async (nothing, { getState }) => {
    const { datas } = await getMultipleMapFiles();
    const existMapIds = getState().historyMaps.ids;

    const newHistoryMaps = [];

    for (let i = 0; i < datas.length; i++) {
      const { file, bucket, time, id, extend, fileName } = datas[i];
      const [robotUseFile, appUseFile] = file.split(',');

      const filePathKey = `${time}_${appUseFile}`;

      if (!existMapIds.includes(filePathKey)) {
        const mapId = parseInt(extend.replace(/(.*_)(\d*)(_.*)/, '$2'), 10);
        const localJson = await readJsonFile(translateFileName(filePathKey));
        const snapshotImage = Utils.JsonUtils.parseJSON(localJson) as {
          image: string;
          width: number;
          height: number;
        };

        newHistoryMaps.push({
          id,
          file: appUseFile,
          filePathKey,
          robotUseFile,
          snapshotImage,
          bucket,
          title: fileName || Strings.getLang(`dsc_mapManage_floor_${i + 1}`),
          time: moment(time * 1000).format('YYYY.MM.DD HH:mm'),
          mapId,
        });
      } else {
        newHistoryMaps.push(getState().historyMaps.entities[filePathKey] as HistoryMap);
      }
    }

    return newHistoryMaps;
  }
);

/**
 * Slice
 */
const historyMapsSlice = createSlice({
  name: 'historyMaps',
  initialState: historyMapsAdapter.getInitialState(),
  reducers: {
    updateHistoryMap: historyMapsAdapter.updateOne,
  },
  extraReducers(builder) {
    builder.addCase(fetchHistoryMaps.fulfilled, (state, action) => {
      historyMapsAdapter.setAll(state, action.payload);
    });
  },
});

/**
 * Selectors
 */
export const {
  selectIds: selectHistoryMapIds,
  selectById: selectHistoryMapById,
  selectAll: selectHistoryMaps,
  selectTotal: selectHistoryMapsTotal,
} = historyMapsAdapter.getSelectors((state: RootState) => state.historyMaps);

export const { updateHistoryMap } = historyMapsSlice.actions;

export default historyMapsSlice.reducer;
