import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import API_ROUTE from '../config/api-route';
import { deleteFitnessActivity, getFitnessActivities } from '../redux/actions/fitness-activities';
import store from '../redux/configureStore';
import '../styles/DeleteActivity.css';

const DeleteFitnessActivity = () => {
  const { fitnessActivities } = useSelector((state) => state.fitnessActivities);

  useEffect(() => {
    store.dispatch(getFitnessActivities());
  }, []);

  const deleteFitness = async (id) => {
    const { payload } = await store.dispatch(deleteFitnessActivity(id));
    if (payload.message) {
      document.getElementById('messages').innerHTML = `<div class="alert alert-success alert-dismissible fade show w-100 h-25" role="alert">
      <strong>Success: </strong>${payload.message}
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
    } else {
      document.getElementById('messages').innerHTML = `<div class="alert alert-danger alert-dismissible fade show w-100 h-25" role="alert">
      <strong>Error: </strong>${payload.errors[0]}
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
    }
    store.dispatch(getFitnessActivities());
  };

  return (
    <div className="delete-container container p-0 m-0">
      <ul className="activity-wrapper">
        {
      fitnessActivities.data?.map((fitnessActivity) => (
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
};

export default DeleteFitnessActivity;
