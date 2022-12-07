import { createSlice } from '@reduxjs/toolkit';
import { addFitnessActivity, getFitnessActivities, deleteFitnessActivity } from './actions/fitness-activities';

const initialState = {
  fitnessActivities: [],
};

const fitnessActivitiesSlice = createSlice({
  name: 'fitnessActivities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFitnessActivities.fulfilled, (state, action) => ({
        ...state,
        fitnessActivities: action.payload,
      }))
      .addCase(deleteFitnessActivity.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(addFitnessActivity.fulfilled, (state, action) => {
        const { fitnessActivities } = state;
        const newFitnessActivities = [...fitnessActivities, action.payload];
        return {
          ...state,
          fitnessActivities: newFitnessActivities,
        };
      });
  },
});

export default fitnessActivitiesSlice.reducer;
