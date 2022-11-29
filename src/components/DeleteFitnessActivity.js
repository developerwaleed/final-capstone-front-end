import React from 'react';

import '../styles/DeleteActivity.css';

export default function DeleteFitnessActivity() {
  const allFitness = [
    {
      id: 1,
      name: 'Gym',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
    },
    {
      id: 2,
      name: 'Swim',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
    },
    {
      id: 3,
      name: 'Gym',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80',
    },
  ];

  return (
    <div className="delete-container container p-0 m-0">
      <ul className="activity-container">
        {
      allFitness.map((fitness) => (
        <li className="" key={fitness.id}>
          <img className="activity-img" src={fitness.image} alt="fitness_image" />
          <div className="">
            <span className="activity-name">
              {fitness.name}
            </span>
            <button className="delete-btn" type="button"> Delete</button>
          </div>
        </li>
      ))
    }
      </ul>
    </div>
  );
}
