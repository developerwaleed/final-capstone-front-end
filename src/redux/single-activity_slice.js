import { createSlice } from '@reduxjs/toolkit';
import getSingleActivity from './actions/single-activity';

const initialState = {
  singleActivity: null,
};

const singleActivitySlice = createSlice({
  name: 'singleActivity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleActivity.fulfilled, (state, action) => ({
      ...state,
      singleActivity: action.payload,
    }));
  },
});

export default singleActivitySlice.reducer;
