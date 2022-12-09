import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../../redux/configureStore';
import getSingleActivity from '../../redux/actions/single-activity';
import '../../styles/DetailsPage.css';
import API_ROUTE from '../../config/api-route';

const DetailsPage = () => {
  const singleActivity = useSelector((state) => state.singleActivity);
  const { id } = useParams();

  useEffect(() => {
    store.dispatch(getSingleActivity(id));
  }, [id]);
  const activity = singleActivity.singleActivity?.data.attributes;

  return (
    <div className="container">
      <h2 className="title">
        <strong>Activity Details</strong>
        {' '}
        <i className="fa-sharp fa-solid fa-circle-info"> </i>
        {' '}
      </h2>
      <div className="detailContainer">
        <div className="ActivityPicture">
          <img
            src={`${API_ROUTE}${activity?.['images-urls'][0]}`}
            alt="2022 Corolla"
            width="600px"
          />
        </div>
        <div className="details text-center">
          <h2>
            {activity?.name}
          </h2>
          <div className="price">
            <p>Price Per Day: </p>
            <p className="priceColor">
              $
              {activity?.amount}
            </p>
          </div>
          <p className="w-100 my-5">
            {activity?.description}
          </p>
          <NavLink to={`/fitness_activities/${id}/reserve`} className="reserve-btn nav-link btncontainer">
            <i className="fa-solid fa-dumbbell me-3"> </i>
            <span className="reservebtn">Reserve</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
