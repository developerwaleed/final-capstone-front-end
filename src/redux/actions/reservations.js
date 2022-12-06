import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ADD_RESERVATION, GET_RESERVATIONS, GET_AVAILABLE_DATES } from '../actionTypes';
import API_ROUTE from '../../config/api-route';
import { getTokenFromStorage } from '../../utils/storeUserToken';

const addReservation = createAsyncThunk(
  ADD_RESERVATION,
  async ({ dateId, fitnessActivityId }) => {
    console.log(dateId);
    const token = getTokenFromStorage();
    const response = await fetch(`${API_ROUTE}/api/v1/fitness_activities/${fitnessActivityId}/reservations`, {
      method: 'POST',
      body: JSON.stringify({
        reservation: {
          available_date_id: dateId,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  },
);

const getReservations = createAsyncThunk(
  GET_RESERVATIONS,
  async () => {
    const token = getTokenFromStorage();
    const response = await axios.get(`${API_ROUTE}/api/v1/reservations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data.data[0].relationships);
    return response.data;
  },
);

const getAvailableDates = createAsyncThunk(
  GET_AVAILABLE_DATES,
  async (fitnessActivityId) => {
    const token = getTokenFromStorage();
    const response = await axios.get(`${API_ROUTE}/api/v1/fitness_activities/${fitnessActivityId}/available_dates`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
);
export { addReservation, getReservations, getAvailableDates };
