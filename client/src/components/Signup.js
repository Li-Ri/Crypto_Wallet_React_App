import React from "react";

const Signup = () => {
  return (
    <>
      <form action="/" onSubmit>
        <label htmlFor="name">Full Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
        <label htmlFor="password-confirm">Confirm Password</label>
        <input type="text" name="password-confirm" />
      </form>
    </>
  );
};

export default Signup;
