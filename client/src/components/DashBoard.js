import React, { useState, useEffect } from "react";
import { Cryptos } from "../services/ApiServices";
import { UserService } from "../services/UserServices";

const DashBoard = () => {
  const [stocks, setStocks] = useState([]);
  const [user, setUser] = useState({});

  const fetchStock = () => {
    Cryptos.getCryptos().then((cryptos) => setStocks(cryptos));
  };

  const fetchUser = () => {
    UserService.getUsers().then((users) => setUser(users[0]));
  };
  useEffect(() => {
    fetchStock();
    fetchUser();
  }, []);

  return <h1>This is my Dashboard</h1>;
};

export default DashBoard;
