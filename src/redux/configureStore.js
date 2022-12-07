import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './current-user_slice';
import fitnessActivitiesReducer from './fitness-activites_slice';
import singleActivityReducer from './single-activity_slice';
import reservationsReducer from './reservations_slice';
import jwtTokenReducer from './jwt-token_slice';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    fitnessActivities: fitnessActivitiesReducer,
    singleActivity: singleActivityReducer,
    reservations: reservationsReducer,
    jwtToken: jwtTokenReducer,
  },
});

export default store;
