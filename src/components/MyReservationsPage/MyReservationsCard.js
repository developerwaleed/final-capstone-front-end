/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/MyReservationsPage.css';

const MyReservationsCard = ({
  PictureLink,
  ActivityName,
  ReservationDate,
  ReservationCity,
  DriverName,
  Price,
}) => (
  <>
    <div className="card d-flex m-4">
      <img className="img" src={PictureLink} alt="Fitness" />
      <div className="ms-3 mt-1">
        <h3 className="Activity">
          <span>Activity Name: </span>
          <span className="fw-bold">{ActivityName}</span>
        </h3>
        <p>
          <span>Reservation date: </span>
          <span className="fw-bold">{ReservationDate}</span>
        </p>
        <p>
          <span>Reservation city: </span>
          <span className="fw-bold">{ReservationCity}</span>
        </p>
        <p>
          <span>Trainer&apos;s name: </span>
          <span className="fw-bold">{DriverName}</span>
        </p>
        <p>
          <span>Price Per Day: </span>
          <span className="fw-bold">{Price}</span>
        </p>
      </div>
    </div>
  </>
);

export default MyReservationsCard;
