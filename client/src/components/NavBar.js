import React from "react";
import { Link, Redirect, Route, Router } from "react-router-dom";
import Login from "../components/Login";
import "../App.css";
const NavBar = ({ name }) => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload(false);
  };
  return (
    <header className="header">
      <h1>CryptoBite</h1>
      <ul className="main-nav">
        <li data-testid="nav-link" className="main-nav__link">
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li data-testid="nav-link" className="main-nav__link">
          <Link to="/stocks">Stock</Link>
        </li>
        <li>
          <a onClick={handleLogout}>Log Out</a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
