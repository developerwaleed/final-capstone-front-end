import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, createUser } from './actions/current-user';

const initialState = { user: null, errors: null };

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => ({
      ...state,
      user: action.payload,
    }));
    builder.addCase(getCurrentUser.fulfilled, (_, action) => action.payload);
  },
});

export default currentUserSlice.reducer;
