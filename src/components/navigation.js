/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <li><a href="https://www.facebook.com"><i className="fa fa-facebook-f" /></a></li>
          <li><a href="https://www.twitter.com"><i className="fa fa-twitter" /></a></li>
          <li><a href="https://www.google.com"><i className="fa fa-google" /></a></li>
          <li><a href="https://www.vimeo.com"><i className="fa fa-vimeo" /></a></li>
          <li><a href="https://www.pinterest.com"><i className="fa fa-pinterest" /></a></li>
        </ul>
        <small><span>&copy; 2022 Gym and Fit, U.S.A</span></small>
      </footer>
    </div>
  );
}

export default Navigation;
