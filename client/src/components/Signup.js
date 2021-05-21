import React from "react";

const Signup = () => {
  return (
    <>
      <body className="login-page">
        <h1 id="login-title">CryptoBite</h1>
        <form action="/" onSubmit className="form-login">
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
            name="password-confirm"
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
