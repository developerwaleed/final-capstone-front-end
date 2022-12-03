import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, createUser } from './actions/current-user';

const initialState = { user: null, errors: null };

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    restoreUserSession: (state, action) => ({ ...state, user: action.payload }),
    clearUserSession: () => ({ user: null, errors: null }),
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (_, action) => (action.payload));
    builder.addCase(getCurrentUser.fulfilled, (_, action) => action.payload);
  },
});

export const { restoreUserSession, clearUserSession } = currentUserSlice.actions;
export default currentUserSlice.reducer;
