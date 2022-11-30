import { createSlice } from '@reduxjs/toolkit';
import getCurrentUser from './actions/current-user';

const initialState = {
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => ({
      ...state,
      currentUser: action.payload,
    }));
  },
});

export default currentUserSlice.reducer;
