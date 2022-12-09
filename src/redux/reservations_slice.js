import { createSlice } from '@reduxjs/toolkit';
import { addReservation, getReservations, getAvailableDates } from './actions/reservations';

const initialState = {
  reservations: [],
  availableDates: [],
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addReservation.fulfilled, (state, action) => ({
      ...state,
      reservations: action.payload,
    }));
    builder.addCase(getReservations.fulfilled, (state, action) => ({
      ...state,
      reservations: action.payload,
    }));
    builder.addCase(getAvailableDates.fulfilled, (state, action) => ({
      ...state,
      availableDates: action.payload,
    }));
  },
});

export default reservationsSlice.reducer;
