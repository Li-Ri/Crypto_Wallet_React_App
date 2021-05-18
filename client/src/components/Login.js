import React from "react";
import { UserService } from "../services/UserServices";
import Signup from "../components/Signup";

const Login = ({ setUser }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const users = await UserService.getUsers();
    const foundUser = await users.filter((user) => {
      return user.email == username;
    });
    if (foundUser[0].password == password) {
      setUser(foundUser[0]);
    } else {
      event.target.reset();
    }
  };
  return (
    <>
      <form action="/" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" />
        <input type="submit" value="Login" />
      </form>
      <a href="/signup">Dont have an Account? Sign up Here</a>
    </>
  );
};

export default Login;
