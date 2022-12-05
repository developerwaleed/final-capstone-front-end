import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAvailableDates, addReservation } from '../redux/actions/reservations';
import '../styles/ReserveFitnessActivity.css';

const ReserveFitnessActivity = () => {
  const dispatch = useDispatch();
  const availableDates = useSelector((state) => state.reservations.availableDates);
  const fitnessActivityId = useParams().id;

  useEffect(() => {
    dispatch(getAvailableDates(fitnessActivityId));
  },
  [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateId = e.target.date.value;
    console.log(dateId);
    console.log(fitnessActivityId);

    const data = {
      fitnessActivityId,
      dateId,
    };

    dispatch(addReservation(data));
  };

  return (
    <section className="reserve-form-container form-container container p-0 m-0">
      <header>
        <h2>BOOK A FITNESS ACTIVITY</h2>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae
        quidem, nisi ducimus, commodi assumenda sint, maiores sunt accusamus
        temporibus maxime laboriosam officiis? Facere cum maiores dolore.
      </p>
      <form onSubmit={(e) => handleSubmit(e)} className="reserve-form">
        <select name="date" id="date">
          {availableDates.data?.map((data) => (
            <option key={data.id} value={data.id}>{data.attributes.date}</option>
          ))}
        </select>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default ReserveFitnessActivity;
