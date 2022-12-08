import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/actions/current-user';
import { getFitnessActivities } from '../redux/actions/fitness-activities';
import getJwtToken from '../redux/actions/jwt-token';
import { storeUser } from '../utils/userStorage';
import { storeToken } from '../utils/storeUserToken';
import Alert from './Alert';
import showAlert from '../hooks/useAlert';

const Login = () => {
  const [alert, setAlert] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUser.user) {
      setEmail('');
      setPassword('');
      storeUser(currentUser.user);
      showAlert('Login Success', 'Success', 'success', setAlert);
      navigate('/', { replace: true });
    }
    if (!currentUser.user && currentUser.errors) {
      showAlert(currentUser.errors, 'Error', 'danger', setAlert);
    }
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = { user: { email, password } };
    const credentials = { email, password };
    dispatch(getCurrentUser(user));
    const response = await dispatch(getJwtToken(credentials));
    if (response.payload.token) {
      storeToken(response.payload.token);
      dispatch(getFitnessActivities());
      document.getElementById('messages').innerHTML = `<div class="alert alert-success alert-dismissible fade show w-100 h-25" role="alert">
      <strong>Success: </strong>Login Success
      </div>`;
      setTimeout(() => {
        document.getElementById('messages').innerHTML = '';
      }, 3000);
    }
  };

  return (
    <section className="form-container container p-0 m-0 w-100">
      <header>
        <h2>Log In</h2>
      </header>
      <Alert alert={alert}> </Alert>
      <form action="" className="login-form auth-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-email">
            Email
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="login-password">
            Password
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">
          Login
        </button>
      </form>
      <div className="text-light mt-3">
        Dont have an account?
        {' '}
        <Link to="/signup" className="text-white">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default Login;
