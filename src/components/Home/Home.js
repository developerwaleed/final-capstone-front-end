import React from 'react';
import ActivitiesList from '../ActivitiesCard/ActivitiesList';
import '../../styles/App.css';

const Home = () => (
  <div className="container p-0 m-0 d-flex flex-column home-main-container">
    <ActivitiesList />
  </div>
);

export default Home;
