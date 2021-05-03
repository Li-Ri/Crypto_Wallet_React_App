import React, { useState, useEffect } from "react";
import { Cryptos } from "../services/ApiServices";
import { UserService } from "../services/UserServices";
import Portfolio from "../components/Portfolio";

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

  return (
    <>
      <Portfolio user={user} stocks={stocks} />
    </>
  );
};

export default DashBoard;
