import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_ROUTE from '../../config/api-route';
import { GET_FITNESS_ACTIVITY } from '../actionTypes';
import { getTokenFromStorage } from '../../utils/storeUserToken';

const getSingleActivity = createAsyncThunk(GET_FITNESS_ACTIVITY, async (id) => {
  const token = getTokenFromStorage();
  const response = await axios.get(`${API_ROUTE}/api/v1/fitness_activities/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export default getSingleActivity;
