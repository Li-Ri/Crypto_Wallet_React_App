import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const NavBar = () => {
  return (
    <header className="header">
      <h1>CryptoBite</h1>
      <ul className="main-nav">
        <li className="main-nav__link">
          <Link to="/">DashBoard</Link>
        </li>
        <li className="main-nav__link">
          <Link to="/stocks">Stock</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
