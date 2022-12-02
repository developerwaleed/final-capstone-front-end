import React from 'react';
import '../../styles/MyReservationsPage.css';
import MyReservationsCard from './MyReservationsCard';

export default function MyReservationsPage() {
  return (
    <div className="container mx-0 my-5 p-0">
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center reservation-main-cont m-0 p-0">
        <div className="my-reservation-header">
          <h2 className="mt-4"><strong>My Reservations</strong></h2>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <MyReservationsCard
            ActivityName="Yoga"
            PictureLink="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
            ReservationDate="02-02-2002"
            ReservationCity="San Francisco"
            DriverName="Waleed"
            Price="200$"
          />
          <MyReservationsCard
            ActivityName="Yoga"
            PictureLink="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
            ReservationDate="02-02-2002"
            ReservationCity="San Francisco"
            DriverName="Waleed"
            Price="200$"
          />
        </div>
      </div>
    </div>
  );
}
