import React from 'react';

const Login = () => (
  <section className="form-container">
    <header>
      <h2>Log In</h2>
    </header>
    <form action="" className="login-form auth-form">
      <div>
        <label htmlFor="name">
          Your Name
          <input id="name" type="text" required />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  </section>
);

export default Login;
