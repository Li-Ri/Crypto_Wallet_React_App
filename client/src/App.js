import "./App.css";
import React, { useEffect, useState } from "react";
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
import { UserService } from "./services/UserServices";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let userId = sessionStorage.getItem("user_id");
    if (userId) {
      UserService.findUser(userId).then((res) => setUser(res));
    }
  }, []);

  if (!user) {
    return (
      <>
        <Router>
          <Redirect to="/login" />
          <Route
            component={() => <Login setUser={setUser} user={user} />}
            path="/login"
          />
          <Route component={Signup} path="/signup" />
        </Router>
      </>
    );
  } else {
    return (
      <Router>
        <>
          <Redirect to="/dashboard" />
          <Route
            exact
            path="/dashboard"
            component={() => <DashBoard user={user} setUser={setUser} />}
          />
          <Route path="/stocks" component={Stocks} />
        </>
      </Router>
    );
  }
};

export default App;
