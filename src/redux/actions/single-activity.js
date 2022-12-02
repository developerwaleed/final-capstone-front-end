import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_FITNESS_ACTIVITY } from '../actionTypes';

const getSingleActivity = createAsyncThunk(GET_FITNESS_ACTIVITY, async (id) => {
  const { data } = await axios.get(
    `http://localhost:3001/api/v1/fitness_activities/${id}`,
  );
  return data;
});

export default getSingleActivity;
