import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import DashBoard from "./containers/DashBoard";
import Stocks from "./components/Stocks";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [user, setUser] = useState(null);
  if (!user) {
    return (
      <>
        <Router>
          {window.location.pathname == "/" ? <Redirect to="/login" /> : null}
          <Route component={() => <Login setUser={setUser} />} path="/login" />
          <Route component={Signup} path="/signup" />
        </Router>
      </>
    );
  }
  return (
    <Router>
      <Switch>
        <>
          <Route
            exact
            path="/"
            component={() => <DashBoard user={user} setUser={setUser} />}
          />
          <Route path="/stocks" component={Stocks} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
