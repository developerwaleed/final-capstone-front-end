import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import API_ROUTE from '../../config/api-route';
import '../../styles/ActivitiesCard.css';

const ActivityCard = ({
  id,
  FitnessActivityName,
  picture,
  Description,
  price,
}) => (
  <NavLink className="links" key={id} to={`/fitness_activities/${id}`}>
    <div className="ActivityCard">
      <div className="CardImg">
        <img
          src={`${API_ROUTE}${picture}`}
          alt="Fiteness Activity"
          className="FitnessImg"
          height="500px"
        />
      </div>
      <div className="model-detail d-flex flex-column justify-content-center align-items-center">
        <h3 className="h4 mt-3">{FitnessActivityName}</h3>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
          <h5 className="h6 pt-1 w-75 card-desc">{Description}</h5>
        </div>
        <h5 className="price">
          $
          {price}
        </h5>
      </div>
    </div>
  </NavLink>
);

ActivityCard.propTypes = {
  id: PropTypes.string.isRequired,
  FitnessActivityName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ActivityCard;
