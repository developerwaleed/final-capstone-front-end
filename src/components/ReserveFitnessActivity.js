import React from 'react';

// This is just dummy content which will be replaced after the redux store implementation.
const availableFitnessActivities = [
  'Gym', 'Swimming', 'Yoga'
]

const ReserveFitnessActivity = () => {
  return (
    <section className="form-container">
      <header>BOOK A FITNESS ACTIVITY</header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae quidem, nisi ducimus, commodi assumenda sint, maiores sunt accusamus temporibus maxime laboriosam officiis? Facere cum maiores dolore.</p>
      <form action="" className="reserve-form">
        <select name="" id="">{
          availableFitnessActivities.map(fa => (
            <option value={fa}>{fa}</option>
          ))
        }</select>
        <button>Book Now</button>
      </form>
    </section>
  )
}

export default ReserveFitnessActivity