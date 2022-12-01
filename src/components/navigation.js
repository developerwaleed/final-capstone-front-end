import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <div className="navContainer">
      <h2 className="nav-head">GymFit</h2>
      <nav className="navigationLinks">
        <NavLink to="/" className="NavLink-Container">
          <i className="fa-sharp fa-solid fa-house"> </i>
          <span className="Nav-Links"> Home</span>
        </NavLink>
        <NavLink to="/make-reservation" className="NavLink-Container">
          <i className="fa-solid fa-heart-pulse"> </i>
          <span className="Nav-Links"> Make Reservation</span>
        </NavLink>
        <NavLink to="/reservations" className="NavLink-Container">
          <i className="fa-solid fa-calendar-days"> </i>
          <span className="Nav-Links"> My Reservations</span>
        </NavLink>
        <NavLink to="/fitness/new" className="NavLink-Container">
          <i className="fa-solid fa-plus"> </i>
          <span className="Nav-Links"> Add Fitness Activity</span>
        </NavLink>
        <NavLink to="/fitness/delete" className="NavLink-Container">
          <i className="fa-solid fa-trash"> </i>
          <span className="Nav-Links"> Delete Fitness Activity</span>
        </NavLink>
      </nav>
      <footer>
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <i
                className="fa fa-facebook-f"
                role="button"
                aria-label="social icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i
                className="fa fa-twitter"
                role="button"
                aria-label="social icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.google.com">
              <i
                className="fa fa-google"
                role="button"
                aria-label="social icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.vimeo.com">
              <i
                className="fa fa-vimeo"
                role="button"
                aria-label="social icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com">
              <i
                className="fa fa-pinterest"
                role="button"
                aria-label="social icon"
              />
            </a>
          </li>
        </ul>
        <small>
          <span>&copy; 2022 Gym and Fit, U.S.A</span>
        </small>
      </footer>
    </div>
  );
}

export default Navigation;
