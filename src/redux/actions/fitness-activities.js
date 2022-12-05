import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_ROUTE from '../../config/api-route';
import { ADD_FITNESS_ACTIVITY, GET_FITNESS_ACTIVITIES, DELETE_FITNESS_ACTIVITY } from '../actionTypes';
import { getTokenFromStorage } from '../../utils/storeUserToken';

const addFitnessActivity = createAsyncThunk(
  ADD_FITNESS_ACTIVITY,
  async (data) => {
    const token = getTokenFromStorage();
    const response = await axios.post(`${API_ROUTE}/api/v1/fitness_activities`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
);

const getFitnessActivities = createAsyncThunk(
  GET_FITNESS_ACTIVITIES,
  async () => {
    const token = getTokenFromStorage();
    const response = await fetch(`${API_ROUTE}/api/v1/fitness_activities`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
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

export { addFitnessActivity, getFitnessActivities, deleteFitnessActivity };
