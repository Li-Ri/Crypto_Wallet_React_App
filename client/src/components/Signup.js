import React from "react";
import { UserService } from "../services/UserServices";
const md5 = require("md5");
const Signup = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirm = event.target.passwordConfirm.value;
    if (password == passwordConfirm) {
      const newUser = {
        name: name,
        password: md5(password),
        email: email,
        cash: 0,
        portfolio: [],
        stock_units: {},
        invested: 0,
      };
      UserService.insertUser(newUser);
      return event.target.reset();
    }
  };

  return (
    <>
      <body className="login-page">
        <h1 id="login-title">CryptoBite</h1>
        <form action="/" onSubmit={handleSignUp} className="form-login">
          <h2 className="login-form-title">Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="login-input"
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="login-input"
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            className="login-input"
          />

          <input
            type="text"
            name="passwordConfirm"
            placeholder="Confirm Password"
            className="login-input"
          />
          <input type="submit" value="Sign Up" />
        </form>
      </body>
    </>
  );
};

export default Signup;
