import { createSlice } from '@reduxjs/toolkit';
import getFitnessActivites from './actions/fitness-activities';

const initialState = {
  fitnessActivities: null,
};

const fitnessActivitiesSlice = createSlice({
  name: 'fitnessActivities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFitnessActivites.fulfilled, (state, action) => ({
      ...state,
      fitnessActivities: action.payload,
    }));
  },
});

export default fitnessActivitiesSlice.reducer;
