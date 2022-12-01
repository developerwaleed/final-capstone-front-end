import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/actions/current-user';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');

    dispatch(createUser(user));
  };

  return (
    <section className="form-container container p-0 m-0">
      <header>
        <h2>Sign Up</h2>
      </header>
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
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
