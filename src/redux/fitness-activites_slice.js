import { createSlice } from '@reduxjs/toolkit';
import { getFitnessActivites, deleteFitnessActivity } from './actions/fitness-activities';

const initialState = {
  fitnessActivities: null,
};

const fitnessActivitiesSlice = createSlice({
  name: 'fitnessActivities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFitnessActivites.fulfilled, (state, action) => ({
        ...state,
        fitnessActivities: action.payload,
      }))
      .addCase(deleteFitnessActivity.fulfilled, (state, action) => {
        const fas = state.fitnessActivities;
        return fas.data.filter((item) => item.id !== action.payload);
      });
  },
});

export default fitnessActivitiesSlice.reducer;
