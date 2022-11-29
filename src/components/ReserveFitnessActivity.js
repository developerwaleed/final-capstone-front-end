import React from 'react';
import '../styles/ReserveFitnessActivity.css';

// This is just dummy content which will be replaced after the redux store implementation.
const availableFitnessActivities = ['Gym', 'Swimming', 'Yoga'];

const ReserveFitnessActivity = () => (
  <section className="reserve-form-container form-container container">
    <header>
      <h2>BOOK A FITNESS ACTIVITY</h2>
    </header>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae
      quidem, nisi ducimus, commodi assumenda sint, maiores sunt accusamus
      temporibus maxime laboriosam officiis? Facere cum maiores dolore.
    </p>
    <form action="" className="reserve-form">
      <select name="" id="">
        {availableFitnessActivities.map((fa) => (
          <option key={fa} value={fa}>{fa}</option>
        ))}
      </select>
      <button type="submit">Book Now</button>
    </form>
  </section>
);

export default ReserveFitnessActivity;
