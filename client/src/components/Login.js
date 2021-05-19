import React from "react";
import { UserService } from "../services/UserServices";
import Signup from "../components/Signup";
import { Redirect, Router } from "react-router";
import DashBoard from "../containers/DashBoard";
import "../Login.css";
import github from "../images/github.png";

const Login = ({ user, setUser }) => {
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
      sessionStorage.setItem("user_id", foundUser[0]._id);
    } else {
      event.target.reset();
    }
  };
  return (
    <>
      <h1 id="login-title">CryptoBite</h1>
      <form action="/dashboard" onSubmit={handleSubmit} className="form-login">
        <h2 className="login-form-title">Login</h2>

        <input
          className="login-input"
          type="text"
          name="username"
          placeholder="Username"
        />

        <input
          className="login-input"
          type="text"
          name="password"
          placeholder="Password"
        />
        <input type="submit" value="login" />
        <h4 className="login-form-title redirect">
          <a href="/signup">Dont have an Account? Sign up Here</a>
        </h4>
      </form>
      <a href="https://github.com/Li-Ri" id="github-logo">
        <img src={github} alt="" />
      </a>
    </>
  );
};

export default Login;
