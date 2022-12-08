import React from 'react';
import PropTypes from 'prop-types';
import API_ROUTE from '../../config/api-route';
import { deleteReservation, getReservations } from '../../redux/actions/reservations';
import store from '../../redux/configureStore';
import '../../styles/MyReservationsPage.css';

const MyReservationsCard = ({
  id,
  fitnessActivityId,
  thumbnail,
  title,
  date,
}) => {
  const handleDeleteReservation = async () => {
    const { payload } = await store.dispatch(deleteReservation(id, fitnessActivityId));
    if (payload.message) {
      document.getElementById('messages').innerHTML = `<div class="alert alert-success alert-dismissible fade show w-100 h-25" role="alert">
      <strong>Success: </strong>${payload.message}
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
    } else {
      document.getElementById('messages').innerHTML = `<div class="alert alert-danger alert-dismissible fade show w-100 h-25" role="alert">
      <strong>Error: </strong>${payload.errors[0]}
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
    }
    store.dispatch(getReservations());
  };

  return (
    <div className="card pb-0 position-relative" style={{ width: '18rem' }}>
      <img
        src={`${API_ROUTE}${thumbnail}`}
        className="card-img-top"
        alt="activity"
      />
      <div className="mt-3">
        <span className="d-flex gap-2 ">
          <p className="text-secondary">Reservation for:</p>
          <p className="text-dark">{title}</p>
        </span>
        <span className="d-flex gap-2">
          <p className="text-secondary">Date reserved:</p>
          <p className="text-dark">{date}</p>
        </span>
      </div>
      <button
        className="position-absolute border border-0 bg-light end-0 bottom-0 p-3 shadow text-danger"
        type="button"
        onClick={() => handleDeleteReservation()}
      >
        <i className="fa-solid fa-trash" />
      </button>
    </div>
  );
};

MyReservationsCard.propTypes = {
  id: PropTypes.number.isRequired,
  fitnessActivityId: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MyReservationsCard;
