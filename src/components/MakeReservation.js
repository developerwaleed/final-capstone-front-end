// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/ReserveFitnessActivity.css';

const MakeReservation = () => {
  const navigate = useNavigate();
  const activities = useSelector(
    (state) => state.fitnessActivities.fitnessActivities,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const select = document.getElementById('SelectActivity');
    const { value } = select.options[select.selectedIndex];
    navigate(`/fitness_activities/${value}/reserve`);
  };

  return (
    <section className="reserve-form-container form-container container p-0 m-0">
      <header>
        <h2>Please Select an Activity to Reserve!</h2>
      </header>
      <form onSubmit={(e) => handleSubmit(e)} className="reserve-form">
        <select name="Activity" id="SelectActivity">
          {activities.data?.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.attributes.name}
            </option>
          ))}
        </select>
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default MakeReservation;
