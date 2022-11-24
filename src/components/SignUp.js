import React from 'react';

const SignUp = () => (
  <section className="form-container">
    <header>
      <h2>Sign Up</h2>
    </header>
    <form action="" className="signup-form auth-form">
      <div>
        <label htmlFor="name">
          Your Name
          <input id="name" type="text" placeholder="First and last name" required />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          E-mail
          <input id="email" type="email" required />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input id="password" type="password" placeholder="At least 6 characters" required />
        </label>
      </div>
      <div>
        <label htmlFor="password_confirmation">
          Confirm Password
          <input id="password_confirmation" type="password" required />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </section>
);

export default SignUp;
