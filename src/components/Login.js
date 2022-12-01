import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/actions/current-user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);

  if (currentUser.name) {
    navigate('/', { replace: true });
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { user: { email, password } };
    setEmail('');
    setPassword('');

    dispatch(getCurrentUser(user));
  };

  return (
    <section className="form-container container p-0 m-0">
      <header>
        <h2>Log In</h2>
      </header>
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
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
