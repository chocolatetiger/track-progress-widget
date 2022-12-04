import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//Getting the response and setting the groups data
export const getGroups = createAsyncThunk('getGroups', async () => {
  const response = await axios.get(
    'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress'
  );
  return response.data;
});

//Slice about groups
export const groupSlice = createSlice({
  name: 'groups',
  initialState: {
    groups: [],
    isLoading: false,
  },
  extraReducers: {
    [getGroups.pending]: (state) => {
      state.isLoading = true;
    },
    [getGroups.fulfilled]: (state, action) => {
      state.groups = action.payload;
      state.isLoading = false;
    },
    [getGroups.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default groupSlice.reducer;
