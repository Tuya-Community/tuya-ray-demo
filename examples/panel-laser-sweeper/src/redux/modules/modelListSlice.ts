import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//3D家具物体
const modelListSlice = createSlice({
  name: 'modelList',
  initialState: {
    
  },
  reducers: {
    updateModelList(state, action: PayloadAction<{[mapId: string]: any[]}>) {

      return {...state,...action.payload}
    }
  }
})

export default modelListSlice.reducer;
export const {updateModelList} = modelListSlice.actions