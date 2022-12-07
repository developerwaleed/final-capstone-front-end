import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFitnessActivities } from '../../redux/actions/fitness-activities';
import ActivitiesList from '../ActivitiesCard/ActivitiesList';
import '../../styles/App.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFitnessActivities());
  },
  [dispatch]);

  return (
    <div className="container p-0 m-0 d-flex flex-column home-main-container">
      <ActivitiesList />
    </div>
  );
};

export default Home;
