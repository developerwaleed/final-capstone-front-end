import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './current-user_slice';
import fitnessActivitiesReducer from './fitness-activites_slice';
import singleActivityReducer from './single-activity_slice';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    fitnessActivities: fitnessActivitiesReducer,
    singleActivity: singleActivityReducer,
  },
});

export default store;
