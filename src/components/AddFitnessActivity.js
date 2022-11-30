import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import '../styles/AddFitnessActivity.css';
import randomItem from '../utils/randomItem';

const fitnessActivityNames = ['Yoga', 'Gym', 'Swimming', 'Medication'];

function submitToAPI(data) {
  console.log(data);
  fetch(' http://127.0.0.1:3001/api/v1/fitness_activities', {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    }).catch((error) => {
      console.error('Error:', error);
    });
}

function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData();

  data.append('fitness_activity[name]', e.target.name.value);
  data.append('fitness_activity[amount]', e.target.amount.value);
  data.append('fitness_activity[description]', e.target.description.value);
  data.append('fitness_activity[dates]', e.target.dates.value);
  for (let i = 0; i < e.target.images.files.length; i += 1) {
    data.append('fitness_activity[images][]', e.target.images.files[i]);
  }
  submitToAPI(data);
}

const AddFitnessActivity = () => {
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [values, setValues] = useState([today, tomorrow]);

  return (
    <section className="form-container container p-0 m-0">
      <header>
        <h2>Create a Fitness Activity</h2>
      </header>
      <form onSubmit={(e) => handleSubmit(e)} className="fa-form auth-form">
        <div>
          <label htmlFor="name">
            Name of Activity
            <input
              id="fa-name"
              type="text"
              name="name"
              placeholder={`eg. ${randomItem(fitnessActivityNames)}`}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="amount">
            Amount
            <input
              id="fa-amount"
              name="amount"
              type="number"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="images">
            Image
            <input
              id="fa-image"
              name="images"
              multiple
              type="file"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <textarea
              id="fa-description"
              type="text"
              name="description"
              placeholder="Something about the fitness activity"
              rows={4}
              required
            />
          </label>
        </div>
        <input type="hidden" name="dates" value={values} />
        <DatePicker
          multiple
          value={values}
          onChange={setValues}
        />
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default AddFitnessActivity;
