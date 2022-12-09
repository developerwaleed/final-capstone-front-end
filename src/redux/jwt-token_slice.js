import { createSlice } from '@reduxjs/toolkit';
import { getTokenFromStorage } from '../utils/storeUserToken';
import getJwtToken from './actions/jwt-token';

const initialState = {
  token: getTokenFromStorage() || null,
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
