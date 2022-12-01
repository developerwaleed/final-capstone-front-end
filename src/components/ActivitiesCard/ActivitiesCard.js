import React from 'react';
import '../../styles/ActivitiesCard.css';

// eslint-disable-next-line react/prop-types
const ActivityCard = ({ FitnessActivityName, picture, Description }) => (
  <div className="ActivityCard">
    <div className="CardImg">
      <img
        src={picture}
        alt="Fiteness Activity"
        className="FitnessImg"
        height="500px"
      />
    </div>
    <div className="model-detail d-flex flex-column justify-content-center align-items-center">
      <h3 className="h4 mt-3">{FitnessActivityName}</h3>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
        <h5 className="h6 pt-1">{Description}</h5>
      </div>
    </div>
  </div>
);

export default ActivityCard;
