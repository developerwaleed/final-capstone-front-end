import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_FITNESS_ACTIVITIES, DELETE_FITNESS_ACTIVITY } from '../actionTypes';

const getFitnessActivites = createAsyncThunk(
  GET_FITNESS_ACTIVITIES,
  async () => {
    const { data } = await axios.get(
      'http://localhost:3001/api/v1/fitness_activities',
    );
    // console.log('I am in redux=', data);
    return data;
  },
);

const deleteFitnessActivity = createAsyncThunk(DELETE_FITNESS_ACTIVITY, async (id) => {
  await axios.delete(`${'http://localhost:3001/api/v1/fitness_activities'}/${id}`);
  return id;
});

export { getFitnessActivites, deleteFitnessActivity };
