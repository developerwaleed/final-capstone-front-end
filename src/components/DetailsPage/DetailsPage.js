import React from 'react';
import '../../styles/DetailsPage.css';

export default function DetailsPage() {
  return (
    <>
      <h2 className="title">Activity Details</h2>
      <div className="detailContainer">
        <div className="ActivityPicture">
          <img
            src="https://images.unsplash.com/photo-1648176777835-d103730ae2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="2022 Corolla"
            width="600px"
          />
        </div>
        <div className="details">
          <h2>Cardio</h2>
          <div className="trainerName">
            <p>Trainers Name:</p>
            <p>Waleed</p>
          </div>
          <div className="price">
            <p>Price Per Day: </p>
            <p className="priceColor">$200</p>
          </div>
          <div className="btncontainer">
            <button type="button" className="reservebtn">
              <i className="fa-solid fa-dumbbell me-3" />
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
