import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-multi-date-picker';
import '../styles/AddFitnessActivity.css';
import randomItem from '../utils/randomItem';
import { addFitnessActivity } from '../redux/actions/fitness-activities';

const fitnessActivityNames = ['Yoga', 'Gym', 'Swimming', 'Medication'];
const AddFitnessActivity = () => {
  const dispatch = useDispatch();

  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [values, setValues] = useState([today, tomorrow]);
  const [errors, setErrors] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name, amount, description, dates, images,
    } = e.target;

    if (description.value.length < 10) {
      setNotification('');
      setErrors('Decsription\'s length must be at least 10 characters');
      return;
    }
    setErrors('');
    setNotification('Fitness activity created successfully');

    const data = new FormData();
    data.append('fitness_activity[name]', name.value);
    data.append('fitness_activity[amount]', amount.value);
    data.append('fitness_activity[description]', description.value);
    data.append('fitness_activity[dates]', dates.value);
    for (let i = 0; i < images.files.length; i += 1) {
      data.append('fitness_activity[images][]', images.files[i]);
    }
    dispatch(addFitnessActivity(data));
    name.value = '';
    amount.value = '';
    description.value = '';
    dates.value = '';
  };

  return (
    <section className="form-container container p-0 m-0">
      <header>
        <h2>Create a Fitness Activity</h2>
      </header>
      <form onSubmit={(e) => handleSubmit(e)} className="fa-form auth-form">
        <div className="error">{errors}</div>
        <div className="notification">{notification}</div>
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
            <input id="fa-amount" name="amount" type="number" required />
          </label>
        </div>
        <div>
          <label htmlFor="images">
            Image
            <input id="fa-image" name="images" multiple type="file" required />
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
        <DatePicker multiple value={values} onChange={setValues} required />
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default AddFitnessActivity;
