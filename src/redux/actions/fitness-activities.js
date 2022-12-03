import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_ROUTE from '../../config/api-route';
import { GET_FITNESS_ACTIVITIES, DELETE_FITNESS_ACTIVITY } from '../actionTypes';

const getFitnessActivites = createAsyncThunk(
  GET_FITNESS_ACTIVITIES,
  async () => {
    const { data } = await axios.get(
      `${API_ROUTE}/api/v1/fitness_activities`,
    );
    return data;
  },
);

const deleteFitnessActivity = createAsyncThunk(DELETE_FITNESS_ACTIVITY, async (id) => {
  await axios.delete(`${API_ROUTE}/api/v1/fitness_activities/${id}`);
  const { data } = await axios.get(
    `${API_ROUTE}/api/v1/fitness_activities`,
  );
  return data;
});

export { getFitnessActivites, deleteFitnessActivity };
