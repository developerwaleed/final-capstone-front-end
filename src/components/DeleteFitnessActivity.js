import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFitnessActivity, getFitnessActivites } from '../redux/actions/fitness-activities';

import '../styles/DeleteActivity.css';

export default function DeleteFitnessActivity() {
  const activities = useSelector((state) => state.fitnessActivities);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFitnessActivites());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteFitnessActivity(id));
  };

  return (
    <div className="delete-container container p-0 m-0">
      <ul className="activity-container">
        {
      activities.map((fitness) => (
        <li className="" key={fitness.id}>
          <img className="activity-img" src={fitness.image} alt="fitness_image" />
          <div className="">
            <span className="activity-name">
              {fitness.name}
            </span>
            <button className="delete-btn" type="button" onClick={() => handleDelete(fitness.id)}>Delete</button>
          </div>
        </li>
      ))
    }
      </ul>
    </div>
  );
}
