import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/actions/current-user';
import getJwtToken from '../redux/actions/jwt-token';
import { getFitnessActivities } from '../redux/actions/fitness-activities';
import { storeUser } from '../utils/userStorage';
import { storeToken } from '../utils/storeUserToken';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (currentUser.user) {
      setEmail('');
      setPassword('');
      storeUser(currentUser.user);
      navigate('/', { replace: true });
    }
    if (!currentUser.user && currentUser.errors) {
      setErrors(currentUser.errors);
      setProcessing(false);
    }
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = { user: { email, password } };
    const credentials = { email, password };
    dispatch(getCurrentUser(user));
    const response = await dispatch(getJwtToken(credentials));
    if (response.payload.token) {
      console.log(response.payload.token);
      storeToken(response.payload.token);
      dispatch(getFitnessActivities());
    } else {
      console.log('no token');
    }
    setProcessing(true);
  };

  return (
    <section className="form-container container p-0 m-0 w-100">
      <header>
        <h2>Log In</h2>
      </header>
      <form action="" className="login-form auth-form" onSubmit={handleSubmit}>
        <div className="errors">{errors}</div>
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
        <button type="submit" disabled={processing}>{processing ? 'Logging in...' : 'Login'}</button>
      </form>
      <div className="text-light mt-3">
        Dont have an account?
        {' '}
        <Link to="/signup" className="text-white">Sign Up</Link>
      </div>
    </section>
  );
};

export default Login;
