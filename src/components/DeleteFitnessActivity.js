import React from 'react';
import { useSelector } from 'react-redux';
import API_ROUTE from '../config/api-route';
import { deleteFitnessActivity } from '../redux/actions/fitness-activities';
import store from '../redux/configureStore';
import '../styles/DeleteActivity.css';

export default function DeleteFitnessActivity() {
  const { fitnessActivities } = useSelector((state) => state.fitnessActivities);

  const deleteFitness = (id) => {
    store.dispatch(deleteFitnessActivity(id));
  };

  return (
    <div className="delete-container container p-0 m-0">
      <ul className="activity-wrapper">
        {
      fitnessActivities?.data.map((fitnessActivity) => (
        <li key={fitnessActivity.id}>
          <img src={`${API_ROUTE}${fitnessActivity.attributes['images-urls'][1]}`} alt="activity-img" />
          <div className="activity-contents">
            <span>
              {fitnessActivity.attributes.name}
            </span>
            <button className="delete-btn" type="button" onClick={() => { deleteFitness(fitnessActivity.id); }}>Delete</button>
          </div>
        </li>
      ))
    }
      </ul>
    </div>
  );
}
