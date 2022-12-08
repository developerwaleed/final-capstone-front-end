import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReservations } from '../../redux/actions/reservations';
import '../../styles/MyReservationsPage.css';
import MyReservationsCard from './MyReservationsCard';

export default function MyReservationsPage() {
  const dispatch = useDispatch();
  const reservationsData = useSelector((state) => state.reservations.reservations);
  const reservations = reservationsData.data || [];
  const fitnessActivities = reservationsData.included?.filter((item) => item.type === 'fitness-activities') || [];
  const availableDates = reservationsData.included?.filter((item) => item.type === 'available-dates') || [];
  const reservationsCombined = reservations?.map((reservation) => ({
    id: reservation.id,
    fitnessActivity: fitnessActivities.find((activity) => activity.id === reservation.relationships['fitness-activity'].data.id),
    dateBooked: availableDates.find((date) => date.id === reservation.relationships['available-date'].data.id),
  }));

  const length = reservationsCombined?.length || 0;

  useEffect(() => {
    dispatch(getReservations());
  },
  []);

  return (
    <div className="container mx-0 my-5">
      <div className={`container-fluid d-flex flex-column ${length > 3 && 'align-items-center'} justify-content-center reservation-main-cont m-0 px-4`}>
        <div className="my-reservation-header">
          <h2 className="mt-2"><strong>My Reservations</strong></h2>
        </div>
        <div className={`my-reservation-container d-flex gap-4 flex-wrap align-items-center ${length > 3 && 'justify-content-center'} mt-4`}>
          {reservationsCombined?.map((reservation) => (
            <MyReservationsCard
              key={reservation.id}
              id={reservation.id}
              fitnessActivityId={reservation.fitnessActivity.id}
              thumbnail={reservation.fitnessActivity.attributes['images-urls'][0]}
              title={reservation.fitnessActivity.attributes.name}
              date={reservation.dateBooked.attributes.date}
            />
          ))}
        </div>
      </div>
      {
        !reservationsCombined.length && (
          <div className="text-center">
            <div>You currently do not have any reservations</div>
            <Link to="/make-reservation">Make a reservation?</Link>
          </div>
        )
      }
    </div>
  );
}
