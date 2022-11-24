import React from 'react';
import '../styles/AddFitnessActivity.css';
import randomItem from '../utils/randomItem';

const fitnessActivityNames = ['Yoga', 'Gym', 'Swimming', 'Medication'];

const AddFitnessActivity = () => (
  <section className="form-container">
    <header>
      <h2>Create a Fitness Activity</h2>
    </header>
    <form action="" className="fa-form auth-form">
      <div>
        <label htmlFor="fa-name">
          Name of Activity
          <input
            id="fa-name"
            type="text"
            placeholder={`eg. ${randomItem(fitnessActivityNames)}`}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="fa-amount">
          Amount
          <input
            id="fa-amount"
            type="number"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="fa-image">
          Image URL
          <input
            id="fa-image"
            type="text"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="fa-description">
          Description
          <textarea
            id="fa-description"
            type="text"
            placeholder="Something about the fitness activity"
            rows={4}
            required
          />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  </section>
);

export default AddFitnessActivity;
