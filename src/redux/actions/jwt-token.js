import { createAsyncThunk } from '@reduxjs/toolkit';
import API_ROUTE from '../../config/api-route';
import { GET_JWT_TOKEN } from '../actionTypes';

const getJwtToken = createAsyncThunk(
  GET_JWT_TOKEN,
  async (credentials) => {
    const response = await fetch(`${API_ROUTE}/api/v1/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
  },
);

export default getJwtToken;
