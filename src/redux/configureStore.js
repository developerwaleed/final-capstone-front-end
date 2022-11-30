import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './current-user_slice';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

export default store;
