import React from "react";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="sub-container">
        <h2 className="signup-title">Create an Account</h2>
        <div className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <p className="login-link">
            Already have an account? <a href="/login  ">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
