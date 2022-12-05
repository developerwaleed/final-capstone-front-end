import { createSlice } from '@reduxjs/toolkit';
import getJwtToken from './actions/jwt-token';

const initialState = {
  token: null,
};

const jwtTokenSlice = createSlice({
  name: 'jwtToken',
  initialState,
  reducers: {
    clearUserToken: () => ({ token: null }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJwtToken.fulfilled, (state, action) => ({
        ...state,
        token: action.payload,
      }));
  },
});

export const { clearUserToken } = jwtTokenSlice.actions;
export default jwtTokenSlice.reducer;
