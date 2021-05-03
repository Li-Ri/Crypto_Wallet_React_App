import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashBoard from "./containers/DashBoard";
import Stocks from "./components/Stocks";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={DashBoard} />
        <Route path="/stocks" component={Stocks} />
      </>
    </Router>
  );
};

export default App;
