import { createSlice } from '@reduxjs/toolkit';
import DeleteFitnessActivity from '../components/DeleteFitnessActivity';
import { getFitnessActivites } from './actions/fitness-activities';

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
      })
        // eslint-disable-next-line max-len
        .addCase(DeleteFitnessActivity.fulfilled, (state, action) => state.fitnessActivities.filter((item) => item.id !== action.payload)));
  },
});

export default fitnessActivitiesSlice.reducer;
