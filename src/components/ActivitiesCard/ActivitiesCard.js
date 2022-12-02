/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/ActivitiesCard.css';

// eslint-disable-next-line react/prop-types
const ActivityCard = ({
  FitnessActivityName, picture, Description, price,
}) => (
  <div className="ActivityCard">
    <div className="CardImg">
      <img
        src={`http://127.0.0.1:3001${picture}`}
        alt="Fiteness Activity"
        className="FitnessImg"
        height="500px"
      />
    </div>
    <div className="model-detail d-flex flex-column justify-content-center align-items-center">
      <h3 className="h4 mt-3">{FitnessActivityName}</h3>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
        <h5 className="h6 pt-1 w-75">{Description}</h5>
      </div>
      <h5 className="price">
        $
        {' '}
        {price}
      </h5>
    </div>
  </div>
);

export default ActivityCard;
