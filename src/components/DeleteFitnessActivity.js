import React from 'react';
import { useSelector } from 'react-redux';
import API_ROUTE from '../config/api-route';
import { deleteFitnessActivity } from '../redux/actions/fitness-activities';
import store from '../redux/configureStore';
import '../styles/DeleteActivity.css';

export default function DeleteFitnessActivity() {
  const { fitnessActivities } = useSelector((state) => state.fitnessActivities);

  const handleDelete = (id) => {
    store.dispatch(deleteFitnessActivity(id));
  };

  return (
    <div className="delete-container container p-0 m-0">
      <ul className="activity-container">
        {
      fitnessActivities?.data.map((activity) => (
        <li className="activity-card" key={activity.id}>
          <img className="activity-img" src={`${API_ROUTE}${activity.attributes['images-urls'][1]}`} alt="activity-img" />
          <div className="activity-content">
            <span className="activity-name">
              {activity.attributes.name}
            </span>
            <button className="delete-btn" type="button" onClick={() => { handleDelete(activity.id); }}>Delete</button>
          </div>
        </li>
      ))
    }
      </ul>
    </div>
  );
}
