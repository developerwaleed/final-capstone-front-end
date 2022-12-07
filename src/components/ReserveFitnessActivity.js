import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {
  getAvailableDates,
  addReservation,
  getReservations,
} from '../redux/actions/reservations';
import '../styles/ReserveFitnessActivity.css';

const ReserveFitnessActivity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const availableDates = useSelector(
    (state) => state.reservations.availableDates,
  );
  const fitnessActivityId = useParams().id;

  useEffect(() => {
    dispatch(getAvailableDates(fitnessActivityId));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateId = e.target.date.value;

    const data = {
      fitnessActivityId,
      dateId,
    };

    const response = await dispatch(addReservation(data));
    // log the response status
    if (response.payload.message) {
      // console.log(response.payload.message);
      document.getElementById('messages').innerHTML = `<div class="alert alert-success alert-dismissible fade show w-100 h-25" role="alert">
      <strong>Success: </strong>${response.payload.message}
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
      navigate('/make-reservation');
    } else {
      document.getElementById('messages').innerHTML = `<div class="alert alert-danger alert-dismissible fade show w-100 h-25" role="alert">
      <strong>Error: </strong>${response.payload.errors[0]}
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
    }
    if (response) {
      dispatch(getReservations());
      dispatch(getAvailableDates(fitnessActivityId));
    }
  };

  return (
    <section className="reserve-form-container form-container container p-0 m-0">
      <header>
        <h2>RESERVE A FITNESS ACTIVITY</h2>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae
        quidem, nisi ducimus, commodi assumenda sint, maiores sunt accusamus
        temporibus maxime laboriosam officiis? Facere cum maiores dolore.
      </p>
      <form onSubmit={(e) => handleSubmit(e)} className="reserve-form">
        <select name="date" id="date">
          {availableDates.data?.length < 1 && (
            <option value="0">No available dates</option>
          )}
          {availableDates.data?.map((data) => (
            <option key={data.id} value={data.id}>
              {data.attributes.date}
            </option>
          ))}
        </select>
        <button type="submit" disabled={availableDates.data?.length < 1}>
          Reserve
        </button>
      </form>
    </section>
  );
};

export default ReserveFitnessActivity;
