import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import { createUser } from '../redux/actions/current-user';
import { storeUser } from '../utils/userStorage';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const { search } = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState('');

  if (currentUser.name) {
    navigate('/');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setPasswordError('Password must be atleast 6 characters');
      return;
    }

    if (passwordConfirm !== password) {
      setPasswordError('Passwords must match');
      return;
    }

    const user = { user: { name, email, password } };
    dispatch(createUser(user));
    setProcessing(true);
  };

  useEffect(() => {
    if (search === '?redirect=true') {
      setErrors('You must sign up before continuing');
      setTimeout(() => {
        setErrors('');
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (currentUser.user) {
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      storeUser(currentUser.user);
      navigate('/', { replace: true });
    }
    if (!currentUser.user && currentUser.errors) {
      setErrors(currentUser.errors);
      setProcessing(false);
    }
  }, [currentUser]);

  return (
    <section className="form-container container p-0 m-0 w-100">
      <header>
        <h2>Sign Up</h2>
      </header>
      <form action="" className="signup-form auth-form" onSubmit={handleSubmit}>
        <div className="error">{errors}</div>
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
        <div className="passord-error">{passwordError}</div>
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
        <button type="submit" disabled={processing}>{processing ? 'Signing Up...' : 'Sign Up'}</button>
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
