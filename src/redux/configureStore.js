import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './current-user_slice';
import fitnessActivitiesReducer from './fitness-activites_slice';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    fitnessActivities: fitnessActivitiesReducer,
  },
});

export default store;
