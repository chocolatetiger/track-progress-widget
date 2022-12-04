import { createSlice } from '@reduxjs/toolkit';
import { getGroups } from './groupSlice';
//Slice about progress
export const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    progress: 0,
    totalTaskValue: 0,
    completedTaskValue: 0,
  },
  //Setting the intial value of progress from API
  extraReducers: {
    [getGroups.fulfilled]: (state, action) => {
      let totalTaskValue = 0;
      let completedTaskValue = 0;
      action.payload.forEach((group) => {
        group.tasks.forEach((task) => {
          totalTaskValue += task.value;
          if (task.checked) {
            completedTaskValue += task.value;
          }
        });
      });
      state.progress = Math.ceil((completedTaskValue / totalTaskValue) * 100);
      state.totalTaskValue = totalTaskValue;
      state.completedTaskValue = completedTaskValue;
    },
  },
  reducers: {
    //On addition of progress
    addProgress: (state, action) => {
      state.completedTaskValue += action.payload;
      state.progress = Math.ceil(
        (state.completedTaskValue / state.totalTaskValue) * 100
      );
    },
    //On subtraction of progress
    subtractProgress: (state, action) => {
      state.completedTaskValue -= action.payload;
      state.progress = Math.ceil(
        (state.completedTaskValue / state.totalTaskValue) * 100
      );
    },
  },
});

export const { addProgress, subtractProgress } = progressSlice.actions;

export default progressSlice.reducer;
