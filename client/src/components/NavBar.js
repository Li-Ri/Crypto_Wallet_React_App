import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">DashBoard</Link>
      </li>
      <li>
        <Link to="/stocks">Stock</Link>
      </li>
    </ul>
  );
};

export default NavBar;
