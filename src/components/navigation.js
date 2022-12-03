/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navigation.css';
import { signOut } from '../utils/userSession';

function Navigation() {
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState('');

  function handleClick() {
    if (showNav !== 'visible') {
      setShowNav('visible');
    } else {
      setShowNav('');
    }
  }

  useEffect(() => {
    if (!currentUser.user) {
      navigate('/signup?redirect=true', { replace: true });
    }
  }, []);

  return (
    <>
      <div className="DesktopNavContainer">
        <h2 className="nav-head">GymFit</h2>
        <nav className="navigationLinks">
          <NavLink to="/" className="NavLink-Container">
            <i className="fa-sharp fa-solid fa-house"> </i>
            <span className="Nav-Links">Home</span>
          </NavLink>
          <NavLink to="/make-reservation" className="NavLink-Container">
            <i className="fa-solid fa-heart-pulse"> </i>
            <span className="Nav-Links">Reservation</span>
          </NavLink>
          <NavLink to="/reservations" className="NavLink-Container">
            <i className="fa-solid fa-calendar-days"> </i>
            <span className="Nav-Links"> My Reservations</span>
          </NavLink>
          <NavLink to="/fitness/new" className="NavLink-Container">
            <i className="fa-solid fa-plus"> </i>
            <span className="Nav-Links"> Add Activity</span>
          </NavLink>
          <NavLink to="/fitness/delete" className="NavLink-Container">
            <i className="fa-solid fa-trash"> </i>
            <span className="Nav-Links"> Delete Activity</span>
          </NavLink>
          <Link to="/login" className="NavLink-Container">
            <button type="button" className="btn btn-light w-100 border" onClick={signOut}>
              Sign Out
            </button>
          </Link>
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

      <div className="mobile-nav">
        <i onClick={(event) => handleClick(event)} className="fa-solid fa-bars">
          {' '}
        </i>
        <h2 className="mobile-nav-head">GymFit</h2>
        <div className={`mobile-navLinks ${showNav}`}>
          <nav className="navigationLinks mobile-navLinks-child">
            <NavLink
              onClick={(event) => handleClick(event)}
              to="/"
              className="NavLink-Container nav-links-mobile"
            >
              <i className="fa-sharp fa-solid fa-house"> </i>
              <span className="Nav-Links">Home</span>
            </NavLink>
            <NavLink
              onClick={(event) => handleClick(event)}
              to="/make-reservation"
              className="NavLink-Container nav-links-mobile"
            >
              <i className="fa-solid fa-heart-pulse"> </i>
              <span className="Nav-Links">Reservation</span>
            </NavLink>
            <NavLink
              onClick={(event) => handleClick(event)}
              to="/reservations"
              className="NavLink-Container nav-links-mobile"
            >
              <i className="fa-solid fa-calendar-days"> </i>
              <span className="Nav-Links"> My Reservations</span>
            </NavLink>
            <NavLink
              onClick={(event) => handleClick(event)}
              to="/fitness/new"
              className="NavLink-Container nav-links-mobile"
            >
              <i className="fa-solid fa-plus"> </i>
              <span className="Nav-Links"> Add Activity</span>
            </NavLink>
            <NavLink
              onClick={(event) => handleClick(event)}
              to="/fitness/delete"
              className="NavLink-Container nav-links-mobile"
            >
              <i className="fa-solid fa-trash"> </i>
              <span className="Nav-Links"> Delete Activity</span>
            </NavLink>
            <Link to="/login" className="NavLink-Container nav-links-mobile">
              <button type="button" className="btn btn-light w-100 border" onClick={signOut}>
                Sign Out
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
