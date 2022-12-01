import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import GET_FITNESS_ACTIVITIES from '../actionTypes';

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

export default getFitnessActivites;
