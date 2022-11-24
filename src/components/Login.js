import React from 'react';

const Login = () => (
  <form action="" className="login-form auth-form">
    <div>
      <label htmlFor="name">
        Your Name
        <input id="name" type="text" />
      </label>
    </div>
    <div>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
        />
      </label>
    </div>
  </form>
);

export default Login;
