/* eslint-disable react/prop-types */
import React from 'react';
import API_ROUTE from '../../config/api-route';
import '../../styles/MyReservationsPage.css';

const MyReservationsCard = ({ thumbnail, title, date }) => (
  <div className="card pb-0" style={{ width: '18rem' }}>
    <img src={`${API_ROUTE}${thumbnail}`} className="card-img-top" alt="activity" />
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
  </div>
);

export default MyReservationsCard;
