import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <div className="navContainer">
      <h2>GymFit</h2>
      <nav className="navigationLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/makereserve">Make Reservation</NavLink>
        <NavLink to="/myreserve">My Reservations</NavLink>
        <NavLink to="/addreserve">Add Reservation</NavLink>
        <NavLink to="/deletereserve">Delete Reservation</NavLink>
      </nav>
      <footer>
        <ul>
          <li><a href="https://www.facebook.com"><i className="fa fa-facebook-f" role="button" aria-label="social icon" /></a></li>
          <li><a href="https://www.twitter.com"><i className="fa fa-twitter" role="button" aria-label="social icon" /></a></li>
          <li><a href="https://www.google.com"><i className="fa fa-google" role="button" aria-label="social icon" /></a></li>
          <li><a href="https://www.vimeo.com"><i className="fa fa-vimeo" role="button" aria-label="social icon" /></a></li>
          <li><a href="https://www.pinterest.com"><i className="fa fa-pinterest" role="button" aria-label="social icon" /></a></li>
        </ul>
        <small><span>&copy; 2022 Gym and Fit, U.S.A</span></small>
      </footer>
    </div>
  );
}

export default Navigation;
