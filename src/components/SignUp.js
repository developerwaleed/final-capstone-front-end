import React from 'react';

const SignUp = () => (
  <section className="form-container">
    <header>
      <h2>Sign Up</h2>
    </header>
    <form action="" className="signup-form auth-form">
      <div>
        <label htmlFor="signup-name">
          Your Name
          <input id="signup-name" type="text" placeholder="First and last name" required />
        </label>
      </div>
      <div>
        <label htmlFor="signup-email">
          E-mail
          <input id="signup-email" type="email" required />
        </label>
      </div>
      <div>
        <label htmlFor="signup-password">
          Password
          <input id="signup-password" type="password" placeholder="At least 6 characters" required />
        </label>
      </div>
      <div>
        <label htmlFor="signup-password_confirmation">
          Confirm Password
          <input id="signup-password_confirmation" type="password" required />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </section>
);

export default SignUp;
