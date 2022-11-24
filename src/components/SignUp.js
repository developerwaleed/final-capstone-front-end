import React from 'react';

const SignUp = () => (
  <form action="" className="signup-form auth-form">
    <div>
      <label htmlFor="name">
        Your Name
        <input id="name" type="text" placeholder="First and last name" />
      </label>
    </div>
    <div>
      <label htmlFor="email">
        E-mail
        <input id="email" type="email" />
      </label>
    </div>
    <div>
      <label htmlFor="password">
        Password
        <input id="password" type="password" placeholder="At least 6 characters" />
      </label>
    </div>
    <div>
      <label htmlFor="password_confirmation">
        Confirm Password
        <input id="password_confirmation" type="password" />
      </label>
    </div>
  </form>
);

export default SignUp;
