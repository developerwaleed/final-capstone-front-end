import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import { createUser } from '../redux/actions/current-user';
import { storeUser } from '../utils/userStorage';
import getJwtToken from '../redux/actions/jwt-token';
import { getFitnessActivities } from '../redux/actions/fitness-activities';
import { storeToken } from '../utils/storeUserToken';
import Alert from './Alert';
import showAlert from '../hooks/useAlert';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const { search } = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [alert, setAlert] = useState(null);

  if (currentUser.name) {
    navigate('/');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      showAlert('Password must be atleast 6 characters', 'Error', 'danger', setAlert);
      return;
    }

    if (passwordConfirm !== password) {
      showAlert('Passwords must match', 'Error', 'danger', setAlert);

      return;
    }

    const user = { user: { name, email, password } };
    const credentials = { email, password };
    const response = await dispatch(createUser(user));
    if (response.payload.user) {
      const tokenResponse = await dispatch(getJwtToken(credentials));
      if (tokenResponse.payload.token) {
        storeToken(tokenResponse.payload.token);
        dispatch(getFitnessActivities());
      } else {
        console.log('no token');
      }
    } else {
      showAlert(response.payload.errors, 'Error', 'danger', setAlert);
    }
  };

  useEffect(() => {
    if (search === '?redirect=true') {
      showAlert('You must sign up before continuing', 'Error', 'danger', setAlert);
    }
  }, []);

  useEffect(() => {
    if (currentUser.user) {
      storeUser(currentUser.user);
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      document.getElementById('messages').innerHTML = `<div class="alert alert-success alert-dismissible fade show w-100" role="alert">
      <strong>Success: </strong>Signup Success!
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
      navigate('/', { replace: true });
    }
  }, [currentUser]);

  return (
    <section className="form-container container p-0 m-0 w-100">
      <header>
        <h2>Sign Up</h2>
      </header>
      <Alert alert={alert}> </Alert>
      <form action="" className="signup-form auth-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="signup-name">
            Your Name
            <input
              id="signup-name"
              type="text"
              placeholder="First and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="signup-email">
            E-mail
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="signup-password">
            Password
            <input
              id="signup-password"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="signup-password_confirmation">
            Confirm Password
            <input
              id="signup-password_confirmation"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="text-light mt-3">
        Already have an account?
        {' '}
        <Link to="/login" className="text-white">Login</Link>
      </div>
    </section>
  );
};

export default SignUp;
